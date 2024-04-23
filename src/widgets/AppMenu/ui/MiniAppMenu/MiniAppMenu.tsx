import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { IconButton, Stack } from '@mui/material';

interface MiniAppMenuProps {
    toggleMenu: () => void;
}
export const MiniAppMenu = ({ toggleMenu }: MiniAppMenuProps) => {
    return (
        <Stack
            sx={{
                background: 'var(--secondary-bg-color)',
                color: 'var(--inverted-bg-color)',
                display: { md: 'flex', xs: 'none' },
            }}
            alignItems={'center'}
            padding={2}
        >
            <IconButton onClick={toggleMenu}>
                <ArrowForwardIosOutlinedIcon sx={{ color: 'var(--inverted-bg-color)' }} fontSize="medium" />
            </IconButton>
        </Stack>
    );
};
