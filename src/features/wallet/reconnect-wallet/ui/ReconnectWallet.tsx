import { useWallet, useWalletList } from '@meshsdk/react';
import { ReactNode, useCallback, useEffect } from 'react';

interface ReconnectWalletProps {
    children: ReactNode;
}
export const ReconnectWallet = ({ children }: ReconnectWalletProps) => {
    const { connect, connected } = useWallet();
    const wallets = useWalletList();

    const reconnectWallet = useCallback(async () => {
        try {
            if (wallets.length > 0) {
                const walletName = localStorage.getItem('wallet');
                const hasWallet = wallets.find((item) => item.name === walletName);
                if (hasWallet && !connected) {
                    await connect(hasWallet.name);
                } else {
                    localStorage.removeItem('wallet');
                }
            }
        } catch (e) {
            console.log(e);
        }
    }, [connect, connected, wallets]);

    useEffect(() => {
        void reconnectWallet();
    }, [reconnectWallet]);

    return <>{children}</>;
};
