/* import { ColorModeContext } from "../../theme"; */
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';


import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { DarkModeOutlined, ExpandMore, LightModeOutlined } from "@mui/icons-material";
import { ColorModeContext } from '../../theme';

import { useContext, useState } from "react";



const options = [
    'EN',
    'AR',
]

export default function header1() {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);

    const [selectedIndex, setSelectedIndex] = useState(1);
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

    return (
        <Box sx={{ bgcolor: "#2B3445", py: '4px', borderBottomRightRadius: '4px', borderBottomLeftRadius: '4px' }}>

            <Container>

                <Stack direction={'row'} alignItems={"center"}>
                    <Typography sx={{
                        mr: 2,
                        p: '3px 10px',
                        bgcolor: '#D23F57',
                        borderRadius: "12px",
                        fontSize: "13px",
                        fontWeight: "bold",
                        color: "#FFF"
                    }}>
                        Hot
                    </Typography>
                    <Typography sx={{
                        fontSize: "12px",
                        fontWeight: 300,
                        color: "#fff"

                    }}>
                        Free Express shipping
                    </Typography>

                    <Box flexGrow={1} />
                    {/* Icon */}
                    <div>
                        <IconButton
                            onClick={() => {
                                localStorage.setItem(
                                    "mode",
                                    theme.palette.mode === "dark" ? "light" : "dark"
                                );
                                colorMode.toggleColorMode();
                            }}
                            sx={{ color: "#fff", pr: 2 }}
                        >
                            {theme.palette.mode === "light" ? (
                                <LightModeOutlined sx={{ fontSize: '18px' }} />
                            ) : (
                                <DarkModeOutlined sx={{ fontSize: '18px' }} />
                            )}
                        </IconButton>
                    </div>

                    <List
                        component="nav"
                        aria-label="Device settings"
                        sx={{ '.MuiButtonBase-root': { p: 0, m: 0 }, pr: 0.5 }}
                    >
                        <ListItem
                            id="lock-button"
                            aria-haspopup="listbox"
                            aria-controls="lock-menu"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClickListItem}

                        >
                            <ListItemText
                                secondary={options[selectedIndex]}
                                sx={{ ".MuiTypography-root": { color: "#fff", fontSize: '11px' } }}

                            />
                            <ExpandMore sx={{ color: "#fff", fontSize: '16px' }} />

                        </ListItem>
                    </List>

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
                                /*  disabled={index === 0} */
                                selected={index === selectedIndex}
                                onClick={(event) => handleMenuItemClick(event, index)}
                                sx={{ fontSize: "11px", p: "5px 12px", /* minHeight: "10px" */ }}
                            >
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>

                    <TwitterIcon sx={{ color: "#fff", fontSize: '16px', mr: 1 }} />
                    <FacebookIcon sx={{ color: "#fff", fontSize: '16px', mr: 1 }} />
                    <InstagramIcon sx={{ color: "#fff", fontSize: '16px' }} />




                </Stack>
            </Container>

        </Box>



    )
}
