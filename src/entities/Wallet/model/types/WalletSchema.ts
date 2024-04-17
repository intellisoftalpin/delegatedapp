export interface AccountInfo {
    hash: string;
    bech32: string;
    balance: string;
    token: number;
    total_reward_amount: string;
    first_tx_hash: string;
    first_tx_time: number;
    last_tx_hash: string;
    last_tx_time: number;
    tx: number;
    pool_hash: string;
    pool_bech32: string;
    pool_name: string;
    pool_ticker: string;
    reward_balance: string;
    active_stake: string;
    snapshot_stake: string;
    catalyst_id: string;
    address: number;
    registered_stake_key: boolean;
    stake_history: boolean;
    key_history: boolean;
    active_pool_hash: string;
    active_pool_bech32: string;
    active_pool_name: string;
    active_pool_ticker: string;
    snapshot_pool_hash: string;
    snapshot_pool_bech32: string;
    snapshot_pool_name: string;
    snapshot_pool_ticker: string;
    first_reward_epoch: number;
    last_reward_epoch: number;
    total_member: number;
    total_leader: number;
    total_refund: number;
    total_treasury: number;
    total_reserves: number;
    total_refund_amount: any;
    pool_reward_address: PoolRewardAddress;
    pool_owner: PoolOwner;
}
interface PoolOwner {
    rows: Row2[];
}
interface PoolRewardAddress {
    rows: Row[];
}

interface Row {
    pool_hash: string;
    pool_bech32: string;
    pool_name: string;
    pool_ticker: string;
}

interface Row2 {
    pool_hash: string;
    pool_bech32: string;
    pool_name: string;
    pool_ticker: string;
}
