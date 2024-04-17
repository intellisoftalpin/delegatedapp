import { baseApi } from 'shared/api/baseApi';

import { AccountInfo } from '../model/types/WalletSchema.ts';

export const walletApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getSpecificAccount: build.query<{ data: AccountInfo }, { stakeAddress: string }>({
            query: ({ stakeAddress }) => ({
                url: `https://api.adastat.net/rest/v1/accounts/${stakeAddress}.json`,
                method: 'GET',
            }),
        }),
    }),
    overrideExisting: false,
});
