import { MeshProvider } from '@meshsdk/react';
import { Stack, ThemeProvider } from '@mui/material';

import './styles/index.scss';
import { AppMenu } from 'widgets/AppMenu';

import { Delegate } from 'pages/delegate';

import { StoreProvider } from 'app/providers/StoreProvider';

import { theme } from './styles/themes/theme.ts';

export const App = () => {
    return (
        <StoreProvider>
            <MeshProvider>
                <ThemeProvider theme={theme}>
                    <Stack direction="row" spacing={5} className={'dark'}>
                        <AppMenu />
                        <Delegate />
                    </Stack>
                </ThemeProvider>
            </MeshProvider>
        </StoreProvider>
    );
};
