import { useWallet } from '@meshsdk/react';
import { Button, Link, Stack, Typography } from '@mui/material';
import { memo } from 'react';

import { convertToAda } from '../../../shared/lib/convertToAda';
import { makeRegionalNumberFormat } from '../../../shared/lib/makeRegionalNumberFormat';
import { usePool } from '../lib/hooks';

import styles from './Pool.module.scss';
import { PoolLoadingSkeleton } from './PoolLoadingSkeleton/PoolLoadingSkeleton.tsx';

interface PoolProps {
    poolId: string;
    delegated: boolean;
}
export const Pool = memo((props: PoolProps) => {
    const { connected } = useWallet();
    const { data: pool, loading, delegatePool } = usePool(props.poolId);

    if (loading) return <PoolLoadingSkeleton />;

    return (
        <Stack className={styles.Pool} spacing={3}>
            <Stack direction="row" spacing={5} padding={2} borderBottom={'1px solid'}>
                <Stack justifyContent="center">
                    <img src={pool?.extended_data.info.url_png_icon_64x64} alt="pool" height="50" width="50" />
                </Stack>
                <Stack width="100%" spacing={1}>
                    <Stack direction="row" justifyContent={'space-between'} alignItems={'center'}>
                        <Link variant={'h6'} href={pool?.homepage} target={'_blank'} rel="noopener noreferrer">
                            [{pool?.ticker}] {pool?.name}
                        </Link>
                    </Stack>
                    <Link
                        href={`https://adastat.net/pools/${props.poolId}`}
                        target={'_blank'}
                        rel="noopener noreferrer"
                        display={'block'}
                        sx={{ overflowWrap: 'anywhere' }}
                    >
                        {props.poolId}
                    </Link>
                </Stack>
            </Stack>
            <Typography variant={'body2'} textAlign={'center'}>
                {pool?.description}
            </Typography>
            <Stack className={styles.PoolAdditionalInfo} padding={2} spacing={1}>
                <Stack direction="row" justifyContent={'space-between'}>
                    <Typography>Saturation</Typography>
                    <Typography>
                        ₳ {pool?.active_stake && makeRegionalNumberFormat(convertToAda(+pool.active_stake))}
                    </Typography>
                </Stack>
                <Stack direction="row" justifyContent={'space-between'}>
                    <Typography>Pledge</Typography>
                    <Typography>₳ {pool?.pledge && makeRegionalNumberFormat(convertToAda(+pool?.pledge))}</Typography>
                </Stack>
                <Stack direction="row" justifyContent={'space-between'}>
                    <Typography>Fees</Typography>
                    <Typography>
                        {pool?.margin}% (₳{' '}
                        {pool?.fixed_cost && makeRegionalNumberFormat(convertToAda(+pool.fixed_cost))})
                    </Typography>
                </Stack>
                <Stack direction="row" justifyContent={'space-between'}>
                    <Typography>Saturation</Typography>
                    <Typography>{pool?.active_saturation}</Typography>
                </Stack>
                <Stack direction="row" justifyContent={'space-between'}>
                    <Typography>Delegators</Typography>
                    <Typography>{pool?.delegator}</Typography>
                </Stack>
            </Stack>
            {connected ? (
                <>
                    {props.delegated ? (
                        <Typography
                            sx={{ color: 'var(--green-color)', background: 'var(--bg-color)' }}
                            padding={1}
                            textAlign={'center'}
                        >
                            You are already delegated to this pool
                        </Typography>
                    ) : (
                        <Button variant="contained" size="large" onClick={delegatePool}>
                            Delegate to pool
                        </Button>
                    )}
                </>
            ) : (
                <Button variant="contained" size="large" disabled>
                    You must connect your wallet
                </Button>
            )}
        </Stack>
    );
});
