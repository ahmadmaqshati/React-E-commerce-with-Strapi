import { ExpandMore } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemText, Paper, Typography } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useTheme } from "@emotion/react";

export default function Links({ title }) {
    const theme = useTheme();

    const listItemTextStyle = {
        '.MuiTypography-root': {
            fontSize: '14px',
            color: theme.palette.text.secondary,
        }
    }
    return (

        <Box sx={{
            ":hover .show-when-hover": { display: 'block' },
            ":hover": { cursor: "pointer" },
            display: 'flex',
            alignItems: 'center',
            position: 'relative'
        }}
        >
            <Typography style={{ color: theme.palette.text.secondary, fontWeight: 'bold' }} variant="body1">{title}</Typography>
            <ExpandMore sx={{ fontSize: 16, ml: 1 }} />

            <Box className='show-when-hover' sx={{
                display: 'none',
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translate(-50%)',
                minWidth: '170px',
                zIndex: '2'
            }}>
                <Paper sx={{ mt: 1.5 }}>
                    <nav aria-label="secondary mailbox folders">
                        <List>
                            <ListItem disablePadding sx={{ pt: 0 }}>
                                <ListItemButton sx={{ pt: 0 }} >
                                    <ListItemText sx={listItemTextStyle} primary="Dashboard" />
                                </ListItemButton>
                            </ListItem>

                            <ListItem sx={{ position: 'relative', ':hover .sub-link': { display: 'block' } }} disablePadding>
                                <ListItemButton component="a" href="#simple-list">
                                    <ListItemText sx={listItemTextStyle} primary="Products" />
                                    <NavigateNextIcon />
                                </ListItemButton>
                                <Box className='sub-link' sx={{ position: 'absolute', top: 0, left: '100%', minWidth: 170, display: 'none' }}>
                                    <Paper sx={{ ml: 1.2 }}>
                                        <nav aria-label="secondary mailbox folders">
                                            <ListItem disablePadding>
                                                <ListItemButton component="a" href="#simple-list">
                                                    <ListItemText sx={listItemTextStyle} primary="Add Product" />
                                                </ListItemButton>
                                            </ListItem>

                                            <ListItem disablePadding>
                                                <ListItemButton component="a" href="#simple-list">
                                                    <ListItemText sx={listItemTextStyle} primary="Edit Product" />
                                                </ListItemButton>
                                            </ListItem>
                                        </nav>
                                    </Paper>
                                </Box>


                            </ListItem>

                            <ListItem disablePadding>
                                <ListItemButton component="a" href="#simple-list">
                                    <ListItemText sx={listItemTextStyle} primary="Orders" />
                                </ListItemButton>
                            </ListItem>

                            <ListItem disablePadding>
                                <ListItemButton component="a" href="#simple-list">
                                    <ListItemText sx={listItemTextStyle} primary="Profile" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </nav >
                </Paper>
            </Box>

        </Box>



    )
}
