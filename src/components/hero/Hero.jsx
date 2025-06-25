import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination } from 'swiper/modules';
import IconSection from "./IconSection";

export default function Hero() {
    const theme = useTheme();

    const x = [
        { text: 'MEN', img: '/images/banner-15.jpg' },
        { text: 'WOMEN', img: '/images/banner-25.jpg' }
    ]

    return (
        /*      <Box sx={{ height: '100vh', paddingTop: '1px', mt: 2.3 }}> */
        <Container>
            <Box sx={{ pt: 3, mt: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
                <Swiper
                    loop={true}
                    pagination={{
                        dynamicBullets: true

                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    style={{
                        width: '80%',
                        height: '500px',  // يمكنك ضبط الارتفاع المطلوب هنا 
                    }}
                >

                    {x.map((item) => {
                        return (
                            <SwiperSlide key={item.text} style={{ position: 'relative' }}>
                                <img
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover' // للحفاظ على نسبة الصورة
                                    }}
                                    src={item.img}
                                    alt=""
                                />

                                <Box sx={{
                                    position: 'absolute', left: '5%', textAlign: 'left',
                                    [theme.breakpoints.down('sm')]: {
                                        position: 'static',
                                        textAlign: 'center'
                                    },

                                }}    >
                                    <Typography
                                        sx={{
                                            color: "#5D5859", fontSize: {
                                                xs: '25px',
                                                sm: '30px',  // شاشة متوسطة
                                                md: '24px'   // شاشة كبيرة */
                                            },

                                        }}

                                    >
                                        LIFESTYLE COLLECTION
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: "#222", fontWeight: 'bold', my: 1, fontSize: {
                                                xs: '40px',
                                                md: '48px'   // شاشة كبيرة */
                                            },
                                        }}
                                    >
                                        {item.text}
                                    </Typography>

                                    <Stack
                                        sx={{
                                            justifyContent: { xs: "center", sm: "left" },
                                        }}
                                        direction={"row"}
                                        alignItems={"center"}
                                    >
                                        <Typography color={"#333"} mr={1} variant="h4"
                                            sx={{
                                                fontSize: {
                                                    xs: '25px',
                                                    md: '34px'   // شاشة كبيرة */
                                                }
                                            }}
                                        >
                                            SALE UP TO
                                        </Typography>
                                        <Typography color={"#D23F57"}
                                            sx={{
                                                fontSize: {
                                                    xs: '25px',
                                                    md: '34px'   // شاشة كبيرة */
                                                },
                                            }}
                                        >
                                            30% OFF
                                        </Typography>
                                    </Stack>
                                    <Typography
                                        sx={{ color: '#56708b', fontWeight: 300, my: 1 }}
                                        variant="body1"
                                    >
                                        Get Free Shipping on orders over $99.00
                                    </Typography>

                                    <Button
                                        sx={{
                                            px: 5, py: 1, mt: 2, backgroundColor: "#222", color: "#fff", borderRadius: "1px",
                                            boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                                            "&:hover": {
                                                bgcolor: "#151515",
                                                boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                                            }
                                        }}
                                        variant="contained"
                                    >
                                        shop now
                                    </Button>
                                </Box>
                            </SwiperSlide>
                        )
                    })}

                </Swiper>

                <Box className='imges' sx={{
                    display: { xs: 'none', md: 'flex' }, // changed to flex
                    gap: 1.5,
                    width: '36%',
                    flexDirection: 'column',
                    height: '500px' // نفس ارتفاع السلايدر  
                    /* [theme.breakpoints.down('sm')]: {
                        height: '300px'
                    },
                    [theme.breakpoints.up('sm')]: {
                        height: '427px'
                    } */
                }}>
                    <Box sx={{
                        position: 'relative',
                        flex: 1, // لتأخذ نصف الارتفاع
                        overflow: 'hidden'   // لإخفاء أي جزء زائد من الصورة 
                    }}>
                        <img
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                            src="/images/banner-17.jpg"
                            alt=""
                        />

                    </Box>

                    <Box sx={{
                        position: 'relative',
                        flex: 1, // لتأخذ نصف الارتفاع
                        overflow: 'hidden'
                    }}>
                        <img
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                            src="/images/banner-16.jpg"
                            alt=""
                        />
                    </Box>
                </Box>
            </Box>

            <Box sx={{ mt: 2.5 }}><IconSection /></Box>

        </Container>

        /*   </Box> */
    )
}
