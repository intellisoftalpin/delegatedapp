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

    const { specific, metadata, additional, extended, loading, delegatePool } = usePool(props.poolId);

    if (loading) return <PoolLoadingSkeleton />;

    return (
        <Stack className={styles.Pool} minWidth={800} maxWidth={800} spacing={3}>
            <Stack direction="row" spacing={5} padding={2} borderBottom={'1px solid'}>
                <Stack justifyContent="center">
                    <img src={extended?.info.url_png_icon_64x64} alt="pool" height="50" width="50" />
                </Stack>
                <Stack width="100%" spacing={1}>
                    <Stack direction="row" justifyContent={'space-between'} alignItems={'center'}>
                        <Link
                            variant={'h6'}
                            href={metadata?.homepage || additional?.homepage}
                            target={'_blank'}
                            rel="noopener noreferrer"
                        >
                            [{metadata?.ticker || additional?.ticker}] {metadata?.name || additional?.name}
                        </Link>
                    </Stack>
                    <Link
                        href={`https://adastat.net/pools/${metadata?.pool_id}`}
                        target={'_blank'}
                        rel="noopener noreferrer"
                    >
                        {metadata?.pool_id}
                    </Link>
                </Stack>
            </Stack>
            <Typography variant={'body2'} textAlign={'center'}>
                {metadata?.description || additional?.description}
            </Typography>
            <Stack className={styles.PoolAdditionalInfo} padding={2} spacing={1}>
                <Stack direction="row" justifyContent={'space-between'}>
                    <Typography>Saturation</Typography>
                    <Typography>
                        ₳ {specific?.active_stake && makeRegionalNumberFormat(convertToAda(+specific.active_stake))}
                    </Typography>
                </Stack>
                <Stack direction="row" justifyContent={'space-between'}>
                    <Typography>Pledge</Typography>
                    <Typography>
                        ₳{' '}
                        {specific?.declared_pledge &&
                            makeRegionalNumberFormat(convertToAda(+specific?.declared_pledge))}
                    </Typography>
                </Stack>
                <Stack direction="row" justifyContent={'space-between'}>
                    <Typography>Fees</Typography>
                    <Typography>
                        {specific?.margin_cost}% (₳{' '}
                        {specific?.fixed_cost && makeRegionalNumberFormat(convertToAda(+specific.fixed_cost))})
                    </Typography>
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
