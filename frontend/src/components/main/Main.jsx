import { Box, Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Container, IconButton, Stack, ToggleButton, ToggleButtonGroup, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import Rating from '@mui/material/Rating';
import Dialog from '@mui/material/Dialog';
import { Close } from "@mui/icons-material";
import { useGetProductByNameQuery } from "../../Redux/product";
import ProductDetails from "./ProductDetails";
import { AnimatePresence, motion } from "framer-motion";



export default function Main() {
    const theme = useTheme()

    const [open, setOpen] = useState(false);

    const allProducts = 'products?populate=*'
    const menProducts = 'products?populate=*&filters[productCategory][$eq]=men'
    const womenProducts = 'products?populate=*&filters[productCategory][$eq]=women'

    const [productType, setProductType] = useState(allProducts);
    const [clickedProduct, setClickedProduct] = useState({});

    const { data, error, isLoading } = useGetProductByNameQuery(productType)

    // Handler to update selected alignment/category
    const handleCategoryChange = (event, newCategory) => {
        if (newCategory == null) {
            // لا تفعل شيئًا
        } else {
            setProductType(newCategory);
        }
    }

    const handleClickOpen = () => {
        document.activeElement.blur();
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    if (isLoading) {
        return (
            <Box sx={{ py: 11, textAlign: "center" }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Container sx={{ py: 11, textAlign: "center" }}>
                <Typography variant="h6">
                    {error.error}
                </Typography>

                <Typography variant="h6">Please try again later</Typography>
            </Container>
        );
    }

    // Main UI After Data Is Loaded
    return (
        <Container sx={{ py: 10 }}>

            <Stack direction={'row'} alignItems={'center'} sx={{ justifyContent: { xs: 'center', sm: 'center', md: 'space-between' } }} flexWrap={'wrap'} gap={3}>
                <Box>
                    <Typography sx={{
                        fontWeight: 'bold',
                        fontSize: 19,
                        mb: 0.2
                    }}>Selected Products</Typography>
                    <Typography sx={{ color: theme.palette.text.secondary }}>
                        All our new arrivals in a exclusive brand selection
                    </Typography>
                </Box>

                {/* Category Filter Buttons */}
                <ToggleButtonGroup
                    color="error"
                    value={productType}
                    exclusive
                    onChange={handleCategoryChange}
                    aria-label="text alignment"
                    sx={{
                        '.Mui-selected': {
                            border: '1px solid rgb(233,69,96,0.5) !important',
                            color: '#e94560',

                        }
                    }}
                >
                    <ToggleButton className="my-btn" value={allProducts} aria-label="left aligned"
                        sx={{
                            color: theme.palette.text.primary
                        }}
                    >
                        All Products
                    </ToggleButton>
                    <ToggleButton sx={{ mx: '16px !important', color: theme.palette.text.primary }} className="my-btn" value={menProducts} aria-label="centered">
                        MEN Category
                    </ToggleButton>
                    <ToggleButton className="my-btn" value={womenProducts} aria-label="right aligned"
                        sx={{
                            color: theme.palette.text.primary
                        }}
                    >
                        Women Category
                    </ToggleButton>

                </ToggleButtonGroup>
            </Stack>

            {/* Product Cards List */}
            <Stack direction={'row'} flexWrap={'wrap'} sx={{ justifyContent: { xs: 'center', sm: 'center', md: 'space-between' } }}>

                <AnimatePresence>
                    {data.data.map((product) => {
                        return (
                            <Card component={motion.section}
                                layout
                                initial={{ transform: 'scale(0)' }}
                                animate={{ transform: 'scale(1)' }}
                                transition={{ duration: 1.4, type: "spring", ease: "linear" }}
                                key={product.id} sx={{
                                    maxWidth: 345, mt: 6, ":hover .MuiCardMedia-root": { scale: '1.1', rotate: '1deg' },
                                    '.MuiCardMedia-root': { transition: 'all 0.3s' }
                                }}>
                                <CardMedia
                                    sx={{ height: 320 }}
                                    image={`${import.meta.env.VITE_BASE_URL}${product.productImg[0].formats.small.url}`}

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
                                            {product.productTitle}
                                        </Typography>

                                        <Typography sx={{ color: theme.palette.text.secondary, fontWeight: 'bold' }}>
                                            {`$ ${product.productPrice}`}
                                        </Typography>

                                    </Stack>

                                    <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
                                        {product.productDescription}
                                    </Typography>
                                </CardContent>

                                <CardActions sx={{ justifyContent: 'space-between', mb: 1 }}>

                                    <Button
                                        onClick={() => {
                                            handleClickOpen()
                                            setClickedProduct(product)
                                        }}
                                        sx={{ fontWeight: 'bold' }} size="small"
                                    >
                                        <AddShoppingCartOutlinedIcon />
                                        Add To Cart
                                    </Button>

                                    <Rating name="read-only" value={product.productRating} precision={0.5} readOnly />

                                </CardActions>

                            </Card>
                        )
                    })}
                </AnimatePresence>


            </Stack>

            {/* Dialog For Product Details */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{ '.MuiPaper-root': { minWidth: { xs: '100%', md: 800 } } }}
            >

                <IconButton
                    sx={{ ':hover': { color: 'red', rotate: '360deg' }, transition: '0.3s', mr: 1, position: 'absolute', top: '0px', right: "0px" }}
                    onClick={handleClose}
                >
                    <Close />
                </IconButton>

                {/* Product Detail Content */}
                <ProductDetails clickedProduct={clickedProduct} />

            </Dialog>

        </ Container >
    )

}
