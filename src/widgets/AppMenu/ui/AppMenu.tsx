import { useWallet } from '@meshsdk/react';
import { Link, Stack, Typography } from '@mui/material';

import { Wallet } from 'entities/Wallet';

import { ConnectWallet } from 'features/wallet/connect-wallet';

import styles from './AppMenu.module.scss';

export const AppMenu = () => {
    const { connected } = useWallet();

    return (
        <Stack
            component={'aside'}
            className={styles.AppMenu}
            sx={{
                maxWidth: { lg: '500px', md: '400px' },
                minWidth: { lg: '500px', md: '400px' },
                display: { md: 'flex', xs: 'none' },
            }}
        >
            <Stack component={'header'} className={styles.header}>
                <Link href={'https://blackrocket.space/'} target={'_blank'} rel="noopener noreferrer">
                    <Stack direction={'row'} alignItems={'center'} gap={2}>
                        <img src="black-rocket-logo.png" alt="logo" width={40} height={40} />
                        <Typography variant="h5" className={styles.text}>
                            Black Rocket Space
                        </Typography>
                    </Stack>
                </Link>
            </Stack>
            <div className={styles.wallets}>{connected ? <Wallet /> : <ConnectWallet />}</div>
        </Stack>
    );
};
