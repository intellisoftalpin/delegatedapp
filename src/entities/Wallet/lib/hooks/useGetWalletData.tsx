import { useAddress, useLovelace, useNetwork, useRewardAddress } from '@meshsdk/react';

import { walletApi } from '../../api/walletApi.ts';

interface UseGetWalletDataReturn {
    address?: string;
    balance?: string;
    network?: number;
    stakeAddress?: string;
    delegatedPoolId?: string;
}
export const useGetWalletData = (): UseGetWalletDataReturn => {
    const address = useAddress(0);
    const balance = useLovelace();
    const network = useNetwork();
    const stakeAddress = useRewardAddress(0);

    const { data: specificData } = walletApi.useGetSpecificAccountQuery(
        { stakeAddress: stakeAddress || '' },
        {
            skip: !stakeAddress,
        },
    );

    return {
        address,
        balance,
        stakeAddress,
        network,
        delegatedPoolId: specificData && specificData.data.active_pool_bech32,
    };
};
