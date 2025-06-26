import { Box, Button, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box
            sx={{
                bgcolor: "#2B3445",
                py: 1.3,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
            }}
        >
            <Typography
                justifyContent={"center"}
                display={"flex"}
                alignItems={"center"}
                /* color={"HighlightText"} */
                color="#F8FCFF"
                variant="h6"
                sx={{ fontSize: { xs: 14, sm: 18 } }}
            >
                Designed and developed by
                <Button
                    sx={{
                        mx: 0.5,
                        fontSize: { xs: 16, sm: 18 },
                        textTransform: "capitalize",
                        color: "#ff7790",
                    }}
                    variant="text"
                    color="primary"
                >
                    Ahmad Khaled
                </Button>
                ©2023
            </Typography>
        </Box>
    )
}
