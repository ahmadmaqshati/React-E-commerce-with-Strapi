import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material";

export default function ProductDetails({ clickedProduct }) {

    const theme = useTheme()

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexDirection: { xs: 'column', sm: "row" }, textAlign: { xs: 'center', sm: 'left' } }}>


            <Box sx={{ display: 'flex' }}>
                {clickedProduct.productImg && (
                    <img width={300} src={`http://localhost:1337${clickedProduct.productImg[0].url}`} alt="" />
                )}
            </Box>

            <Box>
                <Typography
                    sx={{ fontSize: '22px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 2 }}
                >
                    {clickedProduct.productTitle}
                </Typography>

                <Typography sx={{ fontWeight: 'bold', fontSize: 20 }} color="#ed143dd9">{`$ ${clickedProduct.productPrice}`}</Typography>

                <Typography sx={{ color: theme.palette.text.secondary, mb: 2, mt: 0.5 }}>
                    {clickedProduct.productDescription}
                </Typography>

                <Stack direction={'row'} gap={1} sx={{ justifyContent: { xs: 'center', sm: 'left' } }}>
                    {clickedProduct.productImg && clickedProduct.productImg.map((item) => (
                        <img
                            key={item}
                            style={{ borderRadius: 3 }}
                            height={100}
                            width={90}
                            src={`http://localhost:1337${item.url}`}
                            alt=""
                        />
                    ))}
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
