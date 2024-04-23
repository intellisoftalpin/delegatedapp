import './styles/index.scss';
import 'react-toastify/dist/ReactToastify.css';
import { MeshProvider } from '@meshsdk/react';
import { Stack, ThemeProvider } from '@mui/material';
import { Bounce, ToastContainer } from 'react-toastify';
import { ToastContainerProps } from 'react-toastify/dist/types';

import { AppMenu } from 'widgets/AppMenu';

import { Delegate } from 'pages/delegate';

import { StoreProvider } from 'app/providers/StoreProvider';

import { theme } from './styles/themes/theme.ts';

const toastProvider: ToastContainerProps = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: true,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    theme: 'dark',
    transition: Bounce,
};
export const App = () => {
    return (
        <StoreProvider>
            <MeshProvider>
                <ThemeProvider theme={theme}>
                    <ToastContainer {...toastProvider} />
                    <Stack direction="row" className={'dark'}>
                        <AppMenu />
                        <Delegate />
                    </Stack>
                </ThemeProvider>
            </MeshProvider>
        </StoreProvider>
    );
};
