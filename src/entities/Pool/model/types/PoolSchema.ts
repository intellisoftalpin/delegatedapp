export interface SpecificPool {
    pool_id: string;
    hex: string;
    vrf_key: string;
    blocks_minted: number;
    blocks_epoch: number;
    live_stake: string;
    live_size: number;
    live_saturation: number;
    live_delegators: number;
    active_stake: string;
    active_size: number;
    declared_pledge: string;
    live_pledge: string;
    margin_cost: number;
    fixed_cost: string;
    reward_account: string;
    owners: string[];
    registration: string[];
    retirement: string[];
}

export interface StakePoolMetadata {
    pool_id: string;
    hex: string;
    url: string;
    hash: string;
    ticker: string;
    name: string;
    description: string;
    homepage: string;
}

export interface PoolAdditionalInfo {
    name: string;
    ticker: string;
    description: string;
    homepage: string;
    nonce: number;
    extended: string;
}

export interface PoolExtendedMetadata {
    info: {
        url_png_icon_64x64: string;
        url_png_logo: string;
        location: string;
        social: {
            twitter_handle: string;
            telegram_handle: string;
            facebook_handle: string;
            youtube_handle: string;
            twitch_handle: string;
            discord_handle: string;
            github_handle: string;
        };
        company: {
            name: string;
            addr: string;
            city: string;
            country: string;
            company_id: string;
            vat_id: string;
        };
        about: {
            me: string;
            server: string;
            company: string;
        };
    };
}

export interface PoolSchema {
    specific?: SpecificPool;
    metadata?: StakePoolMetadata;
    additional?: PoolAdditionalInfo;
    extended?: PoolExtendedMetadata;
}
