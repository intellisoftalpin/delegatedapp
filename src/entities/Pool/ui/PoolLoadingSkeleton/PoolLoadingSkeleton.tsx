import { Skeleton, Stack } from '@mui/material';

export const PoolLoadingSkeleton = () => {
    return (
        <Stack spacing={3} padding={2} width={'100%'} maxWidth={800} sx={{ background: 'var(--secondary-bg-color)' }}>
            <Stack direction={'row'} alignItems={'center'} spacing={2} padding={1}>
                <Skeleton variant="circular" width={50} height={50} />
                <Stack>
                    <Skeleton variant={'text'} width={200} height={40} />
                    <Skeleton variant={'text'} width={300} height={30} />
                </Stack>
            </Stack>
            <Skeleton variant={'rectangular'} height={60}></Skeleton>
            <Stack padding={2} spacing={1} sx={{ background: 'var(--bg-color)' }}>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Skeleton variant={'text'} width={100} />
                    <Skeleton variant={'text'} width={100} />
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Skeleton variant={'text'} width={100} />
                    <Skeleton variant={'text'} width={100} />
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Skeleton variant={'text'} width={100} />
                    <Skeleton variant={'text'} width={100} />
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Skeleton variant={'text'} width={100} />
                    <Skeleton variant={'text'} width={100} />
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Skeleton variant={'text'} width={100} />
                    <Skeleton variant={'text'} width={100} />
                </Stack>
            </Stack>
            <Skeleton variant={'rectangular'} height={40} width={'100%'} />
        </Stack>
    );
};
