import { useRewardAddress, useWallet } from '@meshsdk/react';
import { useCallback, useEffect } from 'react';
import { toast } from 'react-toastify';

import { cborToBinary } from 'shared/lib/cborToBinary';

import { poolApi } from '../../../api/poolApi.ts';
import { delegate } from '../../delegate';

type useDelegateReturn = () => void;
export const useDelegate = (poolId: string): useDelegateReturn => {
    const { name: walletName } = useWallet();
    const stakeAddress = useRewardAddress(0);

    const [submitTransaction, { isError: isSubmitError, isSuccess: isSubmitSuccess }] =
        poolApi.useSubmitTransactionMutation();

    const delegatePool = useCallback(async () => {
        if (stakeAddress) {
            const cbor = await delegate(poolId, { walletName, stakeAddress });
            if (cbor) {
                await submitTransaction(cborToBinary(cbor));
            } else {
                toast('Failure: Transaction creation error', { type: 'error' });
            }
        }
    }, [poolId, stakeAddress, submitTransaction, walletName]);

    useEffect(() => {
        if (isSubmitError) {
            toast('Failure: Transaction signing error', { type: 'error' });
        }
    }, [isSubmitError]);

    useEffect(() => {
        if (isSubmitSuccess) {
            toast('Success: Delegating transaction created', { type: 'success' });
        }
    });

    return delegatePool;
};
