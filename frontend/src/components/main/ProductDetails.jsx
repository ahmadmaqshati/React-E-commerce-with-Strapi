import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import { useState } from "react";

export default function ProductDetails({ clickedProduct }) {

    const theme = useTheme()


    const [selectedImg, setSelectedImg] = useState(0)



    const [alignment, setAlignment] = useState('left');

    const handleAlignment = (event, newAlignment) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };


    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexDirection: { xs: 'column', sm: "row" }, textAlign: { xs: 'center', sm: 'left' } }}>


            <Box sx={{ display: 'flex', height: '370px' }}>
                {clickedProduct.productImg && (
                    <img width={300} height={'100%'} src={`${import.meta.env.VITE_BASE_URL}${clickedProduct.productImg[selectedImg].url}`} alt="" />
                )}
            </Box>

            <Box sx={{ py: 2 }}>
                <Typography
                    sx={{ fontSize: '22px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 2 }}
                >
                    {clickedProduct.productTitle}
                </Typography>

                <Typography sx={{ fontWeight: 'bold', fontSize: 20 }} color="#ed143dd9">
                    {`$ ${clickedProduct.productPrice}`}
                </Typography>

                <Typography sx={{ color: theme.palette.text.secondary, mb: 2, mt: 0.5 }}>
                    {clickedProduct.productDescription}
                </Typography>

                <Stack direction={'row'} gap={1} sx={{ justifyContent: { xs: 'center', sm: 'left' } }}>


                    <ToggleButtonGroup
                        value={selectedImg}
                        exclusive
                        aria-label="text alignment"
                        sx={{
                            ".Mui-selected": {
                                border: "1px solid royalblue !important",
                                borderRadius: "5px !important",
                                opacity: "1",
                                backgroundColor: "initial",
                            },
                        }}
                    >
                        {clickedProduct.productImg && clickedProduct.productImg.map((item, index) => (

                            <ToggleButton

                                sx={{ width: '110px', height: '110px', p: 0, mr: 0.5, opacity: '0.5' }} key={item.id} value={index} aria-label="left aligned">
                                <img
                                    onClick={() => {
                                        setSelectedImg(index)
                                    }}
                                    style={{ borderRadius: 3 }}
                                    height={'100%'}
                                    width={'100%'}

                                    src={`${import.meta.env.VITE_BASE_URL}${item.url}`}
                                    alt=""
                                />
                            </ToggleButton>

                        ))}

                    </ToggleButtonGroup>



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
    )
}
