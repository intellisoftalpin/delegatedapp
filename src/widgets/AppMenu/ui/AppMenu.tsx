import { useWallet } from '@meshsdk/react';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { Divider, IconButton, Link, Stack, Typography } from '@mui/material';
import { useState } from 'react';

import { Wallet } from 'entities/Wallet';

import { ConnectWallet } from 'features/wallet/connect-wallet';

import styles from './AppMenu.module.scss';
import { MiniAppMenu } from './MiniAppMenu/MiniAppMenu.tsx';

export const AppMenu = () => {
    const { connected } = useWallet();
    const [openedMiniMenu, setOpenMiniMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMiniMenu((opened) => !opened);
    };

    if (openedMiniMenu) return <MiniAppMenu toggleMenu={toggleMenu} opened={openedMiniMenu} />;

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
            <Stack component={'header'} direction={'row'} justifyContent={'space-between'}>
                <Link href={'https://blackrocket.space/'} target={'_blank'} rel="noopener noreferrer">
                    <Stack direction={'row'} alignItems={'center'} gap={2}>
                        <img src="black-rocket-logo.png" alt="logo" width={40} height={40} />
                        <Typography variant="h5">Black Rocket Space</Typography>
                    </Stack>
                </Link>
                <IconButton onClick={toggleMenu}>
                    <ArrowBackIosNewOutlinedIcon />
                </IconButton>
            </Stack>
            <Divider />
            <div className={styles.wallets}>{connected ? <Wallet /> : <ConnectWallet />}</div>
        </Stack>
    );
};
