import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { Box, Container, Stack, Typography, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useState } from 'react';
import { ExpandMore } from '@mui/icons-material';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
        padding: '0 4px',
        background: "#5959cd"
    },
}));

const Search = styled('div')(({ theme }) => ({
    flexGrow: 0.4,
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: "1px solid #777",
    '&:hover': {
        border: "1px solid #333",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    minWidth: '300px',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },

}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#777'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const options = ['All Categories', 'CAR', 'Clothes', 'Electronics']
export default function header2() {

    const [anchorEl, setAnchorEl] = useState(null);

    const [selectedIndex, setSelectedIndex] = useState(0);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };


    const handleClose = () => {
        setAnchorEl(null);
    };

    const theme = useTheme()

    return (

        <Box sx={{ marginTop: '25px' }}>
            <Container>
                <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent='space-between' alignItems={'center'} gap={{ xs: 1.5, sm: 0 }}>


                    <div style={{ textAlign: 'center' }}>
                        <ShoppingCartOutlinedIcon />
                        <Typography sx={{ fontSize: 14 }}>E-commerce</Typography>
                    </div>


                    <Search sx={{
                        display: 'flex', borderRadius: "22px", justifyContent: 'space-between'
                    }}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'transparent'
                                },
                                /*  width: '466px' */
                            }}
                        />

                        <div style={{ display: "flex", alignItems: "center" }}>
                            <List
                                component="nav"
                                aria-label="Device settings"
                                sx={{ bgcolor: theme.palette.mycolor.main, borderTopRightRadius: 22, borderBottomRightRadius: 22, p: 0 }}
                            >
                                <ListItem
                                    id="lock-button"
                                    aria-haspopup="listbox"
                                    aria-controls="lock-menu"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClickListItem}
                                    sx={{
                                        '&:hover': {
                                            backgroundColor: 'transparent'
                                        }
                                    }}
                                >
                                    <ListItemText
                                        secondary={options[selectedIndex]}
                                        sx={{ width: 100, textAlign: 'center' }}
                                    />
                                    <ExpandMore />

                                </ListItem>

                            </List>
                        </div>

                        <Menu
                            id="lock-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            slotProps={{
                                list: {
                                    'aria-labelledby': 'lock-button',
                                    role: 'listbox',
                                },
                            }}

                        >
                            {options.map((option, index) => (
                                <MenuItem
                                    key={option}
                                    /*    disabled={index === 0} */
                                    selected={index === selectedIndex}
                                    onClick={(event) => handleMenuItemClick(event, index)}
                                    sx={{ fontSize: 13 }}
                                >
                                    {option}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Search>


                    <div>
                        <IconButton aria-label="cart">
                            <StyledBadge badgeContent={4} color="secondary">
                                <ShoppingCartIcon />
                            </StyledBadge>
                        </IconButton>
                        <IconButton><PersonOutlinedIcon /></IconButton>
                    </div>

                </Stack>
            </Container>


        </Box >









    )
}
