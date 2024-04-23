import { poolApi } from '../../../api/poolApi';
import { SpecificPool } from '../../../model/types/PoolSchema.ts';
import { useDelegate } from '../useDelegate/useDelegate.tsx';

interface UsePoolReturn {
    data?: SpecificPool;
    delegatePool: () => void;
    loading: boolean;
}
export const usePool = (poolId: string): UsePoolReturn => {
    const { data: specificPool, isLoading: poolLoading } = poolApi.useGetSpecificStakePoolQuery(poolId);
    const delegatePool = useDelegate(poolId);

    return {
        data: specificPool?.data,
        delegatePool,
        loading: poolLoading,
    };
};
