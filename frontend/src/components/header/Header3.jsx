import { Accordion, AccordionSummary, Box, Button, Container, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, MenuList, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import WindowIcon from '@mui/icons-material/Window';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { Close, PedalBike } from "@mui/icons-material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Drawer from '@mui/material/Drawer';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Links from "./Links";

export default function Header3() {
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [isTopDrawerOpen, setIsTopDrawerOpen] = useState(false);

    const toggleTopDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsTopDrawerOpen(open);
    };

    return (
        <Container sx={{ display: "flex", alignItems: "center", justifyContent: 'space-between', mt: 6 }}>

            <Button
                id="basic-button"
                aria-controls={openMenu ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openMenu ? 'true' : undefined}
                onClick={handleClick}
                sx={{ bgcolor: theme.palette.mycolor.main, width: 222, position: 'relative' }}
            >
                <WindowIcon sx={{ color: theme.palette.text.secondary }} />
                <Typography sx={{ mx: 1, color: theme.palette.text.secondary }}>Categories</Typography>
                <Box flexGrow={1} />
                <ArrowForwardIosIcon sx={{ fontSize: "13px", color: theme.palette.text.secondary }} />
            </Button>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                slotProps={{
                    list: {
                        'aria-labelledby': 'basic-button',
                    },
                }}
                sx={{
                    '.MuiPaper-root': {
                        mt: 0.1,
                        width: 222,
                        bgcolor: theme.palette.mycolor.main
                    }
                }}
            >
                <MenuList>
                    {[
                        { label: 'Bikes', icon: <PedalBike fontSize="small" /> },
                        { label: 'Electronics', icon: <LaptopChromebookIcon fontSize="small" /> },
                        { label: 'Books', icon: <MenuBookIcon fontSize="small" /> },
                        { label: 'Games', icon: <SportsEsportsIcon fontSize="small" /> },
                    ].map((item) => (
                        <MenuItem key={item.label} onClick={handleClose}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText>{item.label}</ListItemText>
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
            {useMediaQuery('(min-width:1200px)') &&
                <Stack direction={'row'} alignItems={'center'} gap={4} >
                    <Links title={'Home'} />
                    <Links title={'Mega Menu'} />
                    <Links title={'Full Screen Menu'} />
                    <Links title={'Pages'} />
                    <Links title={'User Account'} />
                    <Links title={'Vendor Account'} />
                </Stack>
            }

            {useMediaQuery('(max-width:1199px)') &&
                < IconButton onClick={toggleTopDrawer(true)}>
                    <MenuIcon />
                </IconButton>
            }

            <Drawer
                anchor="right"
                open={isTopDrawerOpen}
                onClose={toggleTopDrawer(false)}
                sx={{
                    '.MuiDrawer-paper': { minHeight: '45%' }
                }}

            >
                <Box sx={{ width: { xs: 300, sm: 600 }, mx: 'auto', mt: 6, position: 'relative', pt: 7 }}>
                    <IconButton
                        sx={{ ':hover': { color: 'red', rotate: '360deg' }, transition: '0.3s', mr: 1, position: 'absolute', top: '0px', right: "0px" }}
                        onClick={toggleTopDrawer(false)}
                    >
                        <Close />
                    </IconButton>

                    {['Home', 'Mega menue', 'full screen menu', 'pages', 'user account', 'vendor account'].map((item) => (
                        <Accordion key={item} elevation={0} sx={{ bgcolor: 'initial' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography component="span">{item}</Typography>
                            </AccordionSummary>
                            <List sx={{ py: 0, my: 0 }}>
                                <ListItem><ListItemButton><ListItemText primary="Link 1" /></ListItemButton></ListItem>
                                <ListItem><ListItemButton><ListItemText primary="Link 2" /></ListItemButton></ListItem>
                                <ListItem><ListItemButton><ListItemText primary="Link 3" /></ListItemButton></ListItem>
                            </List>
                        </Accordion>
                    ))}
                </Box>
            </Drawer>

        </Container >
    );
}