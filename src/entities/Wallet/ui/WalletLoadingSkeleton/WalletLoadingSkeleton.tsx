import { Skeleton, Stack } from '@mui/material';

export const WalletLoadingSkeleton = () => {
    return (
        <Stack spacing={2} padding={2} sx={{ background: 'var(--bg-color)' }}>
            <Skeleton variant="rectangular" width={210} height={40} />
            <Stack spacing={2} padding={2} sx={{ background: 'var(--secondary-bg-color)' }}>
                <Stack direction={'row'} spacing={2} justifyContent={'space-between'} alignItems={'center'}>
                    <Stack direction={'row'} spacing={2} alignItems={'center'}>
                        <Skeleton variant="circular" width={60} height={50} />
                        <Skeleton variant="rectangular" width={150} height={30} />
                    </Stack>
                    <Skeleton variant="rectangular" width={60} height={20} />
                </Stack>
                <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
                    <Skeleton variant="rectangular" width={100} height={30} />
                    <Skeleton variant="rectangular" width={150} height={30} />
                </Stack>
                <Stack spacing={1}>
                    <Skeleton variant={'text'} width={100} height={50} />
                    <Skeleton variant="rectangular" width={'100%'} height={80} />
                </Stack>
                <Stack spacing={1}>
                    <Skeleton variant={'text'} width={200} height={50} />
                    <Skeleton variant="rectangular" width={'100%'} height={60} />
                </Stack>
                <Stack spacing={1}>
                    <Skeleton variant={'text'} width={200} height={50} />
                    <Skeleton variant="rectangular" width={'100%'} height={60} />
                </Stack>
                <Skeleton variant={'rectangular'} height={40} />
            </Stack>
        </Stack>
    );
};
