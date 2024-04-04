import { Stack } from '@mui/material';

import { Pool } from '../../../entities/Pool';
import { useGetWalletData } from '../../../entities/Wallet';

export const Delegate = () => {
    const { delegatedPoolId } = useGetWalletData();

    return (
        <Stack
            component="main"
            width="100%"
            alignItems={'center'}
            padding={5}
            spacing={4}
            height={'100vh'}
            sx={{ overflowY: 'scroll' }}
        >
            <Pool
                poolId={'pool1tx6e7gewsrcceejwpa69vrhlhay6862amaks095pmw9jxulwhvx'}
                delegated={delegatedPoolId === 'pool1tx6e7gewsrcceejwpa69vrhlhay6862amaks095pmw9jxulwhvx'}
            />
        </Stack>
    );
};
