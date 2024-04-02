import { Link, Stack, Typography } from '@mui/material';

import styles from './SupportedWallets.module.scss';

interface SupportedWallet {
    name: string;
    icon: string;
    link: string;
}

const supportedWallets: SupportedWallet[] = [
    { name: 'Typhon Wallet', icon: 'wallets/typhon.png', link: 'https://typhonwallet.io/#/download' },
    { name: 'Flint Wallet', icon: 'wallets/flint.png', link: 'https://flint-wallet.com/' },
    { name: 'Nami Wallet', icon: 'wallets/nami.png', link: 'https://namiwallet.io/' },
    { name: 'Iternl Wallet', icon: 'wallets/iternl.png', link: 'https://eternl.io/' },
    { name: 'Lace Wallet', icon: 'wallets/lace.png', link: 'https://lace.io/' },
    { name: 'Gero Wallet', icon: 'wallets/gero.jpg', link: 'https://gerowallet.io/' },
];
export const SupportedWallets = () => {
    return (
        <Stack alignItems={'center'} spacing={2} className={styles.SupportedWallets} padding={2}>
            <Typography variant={'body1'}>Supported wallets</Typography>
            <Stack spacing={2} width="100%" alignItems={'center'}>
                {supportedWallets.map((wallet) => (
                    <Link
                        href={wallet.link}
                        display={'flex'}
                        gap={1}
                        alignItems={'center'}
                        key={wallet.name}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={wallet.icon} alt="link" width={26} height={26} />
                        <Typography variant={'h6'}>{wallet.name}</Typography>
                    </Link>
                ))}
            </Stack>
        </Stack>
    );
};
