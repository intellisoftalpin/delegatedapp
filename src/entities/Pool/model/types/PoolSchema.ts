export interface SpecificPool {
    hash: string;
    bech32: string;
    name: string;
    ticker: string;
    valid_meta: boolean;
    itn: boolean;
    impersonator: boolean;
    active_stake: string;
    live_stake: string;
    owner_stake: string;
    delegator: number;
    block_epoch: number;
    total_block: number;
    block: number;
    margin: string;
    fixed_cost: string;
    pledge: string;
    reward_amount: string;
    pool_fee: string;
    reg_time: number;
    retiring_epoch: any;
    description: string;
    homepage: string;
    extended_data: ExtendedData;
    update_time: number;
    reg_tx_hash: string;
    update_tx_hash: string;
    announced_margin: string;
    announced_fixed_cost: string;
    announced_pledge: string;
    live_saturation: string;
    active_saturation: string;
    orphan_block: boolean;
}

export interface ExtendedData {
    itn: Itn;
    info: Info;
    'my-pool-ids': MyPoolIds;
    'telegram-admin-handle': TelegramAdminHandle;
    'when-satured-then-recommend': WhenSaturedThenRecommend;
}

export interface Itn {
    owner: string;
    witness: string;
}

export interface Info {
    social: Social;
    location: string;
    url_png_logo: string;
    url_png_icon_64x64: string;
}

export interface Social {
    twitch_handle: string;
    discord_handle: string;
    twitter_handle: string;
    youtube_handle: string;
    facebook_handle: string;
    telegram_handle: string;
}

export interface MyPoolIds {
    '0': string;
}

export interface TelegramAdminHandle {
    '0': string;
}

export interface WhenSaturedThenRecommend {
    '0': string;
    '1': string;
}
