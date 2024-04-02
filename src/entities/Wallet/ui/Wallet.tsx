import { useAddress, useLovelace, useNetwork, useRewardAddress, useWallet, useWalletList } from '@meshsdk/react';
import { Button, Stack, Typography } from '@mui/material';
import { useCallback } from 'react';

export const Wallet = () => {
    const { name, disconnect } = useWallet();
    const wallets = useWalletList();
    const address = useAddress(0);
    const balance = useLovelace();
    const network = useNetwork();
    const stakeAddress = useRewardAddress(0);

    const getWalletIcon = useCallback(() => {
        if (wallets.length > 0) {
            const wallet = wallets.find((wallet) => wallet.name === name);
            return wallet && wallet.icon;
        }
    }, [name, wallets]);

    const disconnectWallet = useCallback(() => {
        localStorage.removeItem('wallet');
        disconnect();
    }, [disconnect]);

    return (
        <Stack padding={3} sx={{ background: 'var(--bg-color)', borderRadius: 'var(--border-radius)' }} spacing={2}>
            <Typography variant={'h6'}>Active wallet</Typography>
            <Stack sx={{ background: 'var(--secondary-bg-color)' }} padding={2} spacing={2}>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} paddingBottom={1}>
                    <Stack direction={'row'} alignItems={'center'} spacing={2}>
                        <img src={getWalletIcon()} alt="sda" width={36} height={36} />
                        <Typography>{name}</Typography>
                    </Stack>
                    <Typography sx={{ color: 'var(--green-color)' }} variant={'body2'}>
                        {network && network ? 'mainnet' : 'testnet'}
                    </Typography>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Typography>Balance:</Typography>
                    <Typography variant={'body2'}>₳ {balance && +balance / 1000000}</Typography>
                </Stack>
                <Stack spacing={1}>
                    <Typography>Address:</Typography>
                    <Stack padding={2} sx={{ background: 'var(--bg-color)', borderRadius: 'var(--border-radius)' }}>
                        <Typography sx={{ wordWrap: 'break-word' }} variant={'body2'}>
                            {address}
                        </Typography>
                    </Stack>
                </Stack>
                <Stack spacing={1}>
                    <Typography>Stake Address:</Typography>
                    <Stack padding={2} sx={{ background: 'var(--bg-color)', borderRadius: 'var(--border-radius)' }}>
                        <Typography sx={{ wordWrap: 'break-word' }} variant={'body2'}>
                            {stakeAddress}
                        </Typography>
                    </Stack>
                </Stack>
                <Stack paddingTop={2}>
                    <Button variant={'contained'} color={'error'} fullWidth onClick={disconnectWallet}>
                        Disconnect wallet
                    </Button>
                </Stack>
            </Stack>
            {/*<Typography variant={'h6'}>Tokens</Typography>*/}
        </Stack>
    );
};
