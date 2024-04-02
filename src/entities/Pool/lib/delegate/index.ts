import { BrowserWallet, Transaction } from '@meshsdk/core';

export const delegate = async (poolId: string, wallet: { walletName: string; stakeAddress: string }) => {
    try {
        const { walletName, stakeAddress } = wallet;
        const walletExt = await BrowserWallet.enable(walletName);

        const tx = new Transaction({ initiator: walletExt });
        tx.delegateStake(stakeAddress, poolId);
        const unsignedTx = await tx.build();
        return await walletExt.signTx(unsignedTx);
    } catch (e: any) {
        console.log(`Failure: ${e.toString()}`);
    }
};
