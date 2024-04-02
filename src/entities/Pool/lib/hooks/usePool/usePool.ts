import { useRewardAddress, useWallet } from '@meshsdk/react';
import { useCallback, useEffect, useState } from 'react';

import { cborToBinary } from '../../../../../shared/lib/cborToBinary';
import { poolApi } from '../../../api/poolApi';
import {
    PoolAdditionalInfo,
    PoolExtendedMetadata,
    SpecificPool,
    StakePoolMetadata,
} from '../../../model/types/PoolSchema.ts';
import { delegate } from '../../delegate';

interface UsePoolReturn {
    specific?: SpecificPool;
    metadata?: StakePoolMetadata;
    additional?: PoolAdditionalInfo;
    extended?: PoolExtendedMetadata;
    delegatePool: () => void;
    loading: boolean;
}
export const usePool = (poolId: string): UsePoolReturn => {
    const [loading, setLoading] = useState(true);
    const { name: walletName } = useWallet();
    const stakeAddress = useRewardAddress(0);

    const { data: specificData, isLoading: specificLoading } = poolApi.useGetSpecificStakePoolQuery({ poolId: poolId });

    const { data: poolMetadata, isLoading: metadataLoading } = poolApi.useGetStakePoolMetadataQuery({ poolId: poolId });

    const { data: poolInfo, isLoading: infoLoading } = poolApi.useGetPoolInfoMetadataQuery(poolMetadata?.url, {
        skip: poolMetadata?.url === undefined,
    });

    const [submitTransaction] = poolApi.useSubmitTransactionMutation();

    const { data: extentedData, isLoading: extendeLoading } = poolApi.useGetPoolExtendedMetadataQuery(
        poolInfo?.extended,
        {
            skip: poolInfo?.extended === undefined,
        },
    );

    const delegateToPool = useCallback(async () => {
        if (stakeAddress) {
            const cbor = await delegate(poolId, { walletName, stakeAddress });
            if (cbor) submitTransaction(cborToBinary(cbor));
        }
    }, [poolId, stakeAddress, submitTransaction, walletName]);

    useEffect(() => {
        if (specificLoading || metadataLoading || infoLoading || extendeLoading) {
            setLoading(true);
        } else {
            setLoading(false);
        }
    }, [extendeLoading, infoLoading, metadataLoading, specificLoading]);

    return {
        delegatePool: delegateToPool,
        specific: specificData,
        metadata: poolMetadata,
        extended: extentedData,
        additional: poolInfo,
        loading,
    };
};
