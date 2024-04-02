import { Wallet } from '@meshsdk/core';
import { useWallet, useWalletList } from '@meshsdk/react';
import { Button, Stack, Typography } from '@mui/material';
import { useCallback } from 'react';

import styles from './InstalledWallets.module.scss';

export const InstalledWallets = () => {
    const wallets: Wallet[] = useWalletList();
    const { connect, connected } = useWallet();

    const connectWallet = useCallback(
        async (walletName: string) => {
            if (!connected) {
                await connect(walletName).then(() => localStorage.setItem('wallet', walletName));
            }
        },
        [connect, connected],
    );

    return (
        <Stack spacing={2} direction="column" alignItems={'center'} className={styles.InstalledWallets}>
            {wallets.length ? (
                <>
                    <Typography variant="body1">Installed wallets</Typography>
                    {wallets.map((wallet) => (
                        <Button
                            variant="contained"
                            size="large"
                            fullWidth
                            key={wallet.name}
                            onClick={() => connectWallet(wallet.name)}
                        >
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <img src={wallet.icon} alt={wallet.name} height={36} width={36} />
                                <Typography>{wallet.name}</Typography>
                            </Stack>
                        </Button>
                    ))}
                </>
            ) : (
                <Typography align={'center'}>
                    You do not have any wallets installed, install them from the supported wallets block
                </Typography>
            )}
        </Stack>
    );
};
