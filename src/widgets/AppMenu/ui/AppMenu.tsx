import { useWallet } from '@meshsdk/react';
import { Typography } from '@mui/material';

import { Wallet } from 'entities/Wallet';

import { ConnectWallet } from 'features/wallet/connect-wallet';

import styles from './AppMenu.module.scss';

export const AppMenu = () => {
    const { connected } = useWallet();

    return (
        <aside className={styles.AppMenu}>
            <header className={styles.header}>
                <img src="vite.svg" alt="logo" width={24} height={24} />
                <Typography variant="h5" className={styles.text}>
                    Black Rocket Space
                </Typography>
            </header>
            <div className={styles.wallets}>{connected ? <Wallet /> : <ConnectWallet />}</div>
        </aside>
    );
};
