import { baseApi } from 'shared/api/baseApi';
import { BLOCKFROST_API_KEY } from 'shared/constants/env';

import {
    PoolAdditionalInfo,
    PoolExtendedMetadata,
    SpecificPool,
    StakePoolMetadata,
} from '../model/types/PoolSchema.ts';

export const poolApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getSpecificStakePool: build.query<SpecificPool, { poolId: string }>({
            query: ({ poolId }) => ({
                url: `https://cardano-mainnet.blockfrost.io/api/v0//pools/${poolId}`,
                method: 'GET',
                headers: { project_id: BLOCKFROST_API_KEY },
            }),
        }),
        getStakePoolMetadata: build.query<StakePoolMetadata, { poolId: string }>({
            query: ({ poolId }) => ({
                url: `https://cardano-mainnet.blockfrost.io/api/v0//pools/${poolId}/metadata`,
                method: 'GET',
                headers: { project_id: BLOCKFROST_API_KEY },
            }),
        }),
        getPoolInfoMetadata: build.query<PoolAdditionalInfo, string | undefined>({
            query: (url) => ({
                url: `${url}`,
                method: 'GET',
            }),
        }),
        getPoolExtendedMetadata: build.query<PoolExtendedMetadata, string | undefined>({
            query: (url) => ({
                url: `${url}`,
                method: 'GET',
            }),
        }),
        submitTransaction: build.mutation<string, Uint8Array>({
            query: (cbor) => ({
                url: `http://relaydb.blackrocket.space:8090/api/submit/tx`,
                method: 'POST',
                body: cbor,
                headers: { 'Content-Type': 'application/cbor' },
            }),
        }),
    }),
    overrideExisting: false,
});
