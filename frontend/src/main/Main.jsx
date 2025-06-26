import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, IconButton, Stack, ToggleButton, ToggleButtonGroup, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import Rating from '@mui/material/Rating';
import Dialog from '@mui/material/Dialog';
import { AddShoppingCartOutlined, Close } from "@mui/icons-material";

export default function Main() {
    const theme = useTheme()

    // State for selected category filter
    const [alignment, setAlignment] = useState('left');

    // Handler to update selected alignment/category
    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    }

    // Rating value for the products
    const [value] = useState(4);

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        document.activeElement.blur();
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <Container sx={{ py: 10 }}>

            <Stack direction={'row'} alignItems={'center'} sx={{ justifyContent: { xs: 'center', sm: 'center', md: 'space-between' } }} flexWrap={'wrap'} gap={3}>
                <Box>
                    <Typography sx={{
                        fontWeight: 'bold',
                        fontSize: 19,
                        mb: 0.2
                    }}>Selected Products</Typography>
                    <Typography sx={{ color: theme.palette.text.secondary }}>All our new arrivals in a exclusive brand selection</Typography>
                </Box>

                <ToggleButtonGroup
                    color="error"
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                    sx={{
                        '.Mui-selected': {
                            border: '1px solid rgb(233,69,96,0.5) !important',
                            color: '#e94560',
                        }
                    }}
                >
                    <ToggleButton className="my-btn" value="left" aria-label="left aligned"
                        sx={{
                            color: theme.palette.text.primary
                        }}
                    >
                        All Products
                    </ToggleButton>
                    <ToggleButton sx={{ mx: '16px !important', color: theme.palette.text.primary }} className="my-btn" value="center" aria-label="centered">
                        MEN Category
                    </ToggleButton>
                    <ToggleButton className="my-btn" value="right" aria-label="right aligned"
                        sx={{
                            color: theme.palette.text.primary
                        }}
                    >
                        Women Category
                    </ToggleButton>

                </ToggleButtonGroup>
            </Stack>

            <Stack direction={'row'} flexWrap={'wrap'} sx={{ justifyContent: { xs: 'center', sm: 'center', md: 'space-between' } }}>
                {['a', 'b', 'c', 'x', 'z', 'w'].map((x) => {
                    return (
                        <Card key={x} sx={{
                            maxWidth: 345, mt: 6, ":hover .MuiCardMedia-root": { scale: '1.1', rotate: '1deg' },
                            '.MuiCardMedia-root': { transition: 'all 0.3s' }
                        }}>
                            <CardMedia
                                sx={{ height: 260 }}
                                image="/images/banner-15.jpg"
                                title="green iguana"
                            />

                            <CardContent>

                                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} mt={1}>
                                    <Typography sx={{
                                        color: theme.palette.text.secondary,
                                        fontWeight: 'bold'
                                    }}
                                        gutterBottom variant="h5" component="div"
                                    >
                                        Blue Jeans
                                    </Typography>

                                    <Typography sx={{ color: theme.palette.text.secondary, fontWeight: 'bold' }}>$12.99</Typography>

                                </Stack>


                                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'space-between', mb: 1 }}>

                                <Button onClick={handleClickOpen} sx={{ fontWeight: 'bold' }} size="small">
                                    <AddShoppingCartOutlinedIcon />
                                    Add To Cart
                                </Button>

                                <Rating name="read-only" value={value} readOnly />

                            </CardActions>
                        </Card>
                    )
                })}
            </Stack>

            {/* dialog */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"/* 850 */

                /*   sx={{ '.MuiPaper-root': { minWidth: 850 } }} */
                /*    sx={{ '.MuiPaper-root': { minWidth: { xs: '98%', sm: '90%', md: '70%', lg: '50%' } } }} */
                sx={{ '.MuiPaper-root': { minWidth: { xs: '100%', md: 800 } } }}
            >


                {/*     <Box sx={{ display: 'flex', alignItems: 'center', height: { xs: 420, sm: 'auto' }, gap: 4 }}> */}
                <IconButton
                    sx={{ ':hover': { color: 'red', rotate: '360deg' }, transition: '0.3s', mr: 1, position: 'absolute', top: '0px', right: "0px" }}
                    onClick={handleClose}
                >
                    <Close />
                </IconButton>



                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexDirection: { xs: 'column', sm: "row" }, textAlign: { xs: 'center', sm: 'left' } }}>

                    <Box sx={{ display: 'flex' }}>
                        {/* <img width={300} src="public/images/1 (6).jpg" alt="" /> */}
                        <img width={300} src="/images/1 (6).jpg" alt="" />

                    </Box>


                    <Box>
                        <Typography
                            sx={{ fontSize: '22px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 2 }}
                        >
                            Blue JEANS
                        </Typography>
                        <Typography sx={{ fontWeight: 'bold', fontSize: 20 }} color="#ed143dd9">$13.99</Typography>
                        <Typography sx={{ color: theme.palette.text.secondary, mb: 2, mt: 0.5 }}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                        </Typography>

                        <Stack direction={'row'} gap={1} sx={{ justifyContent: { xs: 'center', sm: 'left' } }}>
                            {['/images/1.jpg', '/images/1.jpg'].map((item) => {
                                return (
                                    <img key={item} style={{ borderRadius: 3 }} height={100} width={90}/* style={{ width: '75px', height: '85px' }} */ src={item} alt="" />
                                )
                            })}
                        </Stack>

                        <Button
                            sx={{ mb: { xs: 1, sm: 0 }, mt: 1.5, px: 1, textTransform: "capitalize", fontWeight: 'bold' }}
                            variant="contained"
                        >
                            <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
                            Buy now
                        </Button>

                    </Box>


                </Box>




                {/* <Box sx={{ width: { sm: 1200, md: 1200 }, display: 'flex' }}>
                        <img style={{ width: '100%' }} src="public/images/1 (6).jpg" alt="" />
                    </Box>

                    <Box>
                        <Typography
                            sx={{ fontSize: '22px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 2 }}
                        >
                            Blue JEANS
                        </Typography>
                        <Typography sx={{ color: '#BF575F', fontWeight: 'bold', fontSize: 20 }}>$13.99</Typography>
                        <Typography sx={{ color: theme.palette.text.secondary, mb: 2, mt: 0.5 }}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                        </Typography>


                        <Stack direction={'row'} alignItems={'center'} gap={0.5}>
                            <Box><img style={{ width: '75px', height: '85px' }} src="public/images/1.jpg" alt="" /></Box>
                            <Box><img style={{ width: '75px', height: '85px' }} src="public/images/1.jpg" alt="" /></Box>

                        </Stack>

                        <Button
                            sx={{ mb: { xs: 1, sm: 0 }, mt: 1.5, px: 1, textTransform: "capitalize", fontWeight: 'bold' }}
                            variant="contained"
                        >
                            <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
                            Buy now
                        </Button>


                    </Box> */}

                {/*   </Box>
 */}


            </Dialog>


        </ Container >
    )
}
