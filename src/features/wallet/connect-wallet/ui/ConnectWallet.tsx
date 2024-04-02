import { useWallet } from '@meshsdk/react';
import { Stack, Typography } from '@mui/material';

import { WalletLoadingSkeleton } from '../../../../entities/Wallet';
import { ReconnectWallet } from '../../reconnect-wallet';

import { InstalledWallets } from './InstalledWallets/InstalledWallets.tsx';
import { SupportedWallets } from './SupportedWallets/SupportedWallets.tsx';

export const ConnectWallet = () => {
    const { connecting } = useWallet();

    return (
        <ReconnectWallet>
            {connecting ? (
                <WalletLoadingSkeleton />
            ) : (
                <Stack spacing={2} direction="column">
                    <Typography textAlign="center" variant="h6">
                        Connect to a wallet
                    </Typography>
                    <InstalledWallets />
                    <SupportedWallets />
                </Stack>
            )}
        </ReconnectWallet>
    );
};
