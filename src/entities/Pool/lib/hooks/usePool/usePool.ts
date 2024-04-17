import { useRewardAddress, useWallet } from '@meshsdk/react';
import { useCallback } from 'react';

import { cborToBinary } from '../../../../../shared/lib/cborToBinary';
import { poolApi } from '../../../api/poolApi';
import { SpecificPool } from '../../../model/types/PoolSchema.ts';
import { delegate } from '../../delegate';

interface UsePoolReturn {
    data?: SpecificPool;
    delegatePool: () => void;
    loading: boolean;
}
export const usePool = (poolId: string): UsePoolReturn => {
    const { name: walletName } = useWallet();
    const stakeAddress = useRewardAddress(0);

    const { data: specificPool, isLoading: poolLoading } = poolApi.useGetSpecificStakePoolQuery(poolId);
    const [submitTransaction] = poolApi.useSubmitTransactionMutation();

    const delegatePool = useCallback(async () => {
        if (stakeAddress) {
            const cbor = await delegate(poolId, { walletName, stakeAddress });
            if (cbor) submitTransaction(cborToBinary(cbor));
        }
    }, [poolId, stakeAddress, submitTransaction, walletName]);

    return {
        data: specificPool?.data,
        delegatePool,
        loading: poolLoading,
    };
};
