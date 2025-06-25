import { Box, Divider, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";

export default function IconSection() {
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Stack /* divider={<Divider orientation={isSmallScreen ? 'horizontal' : 'vertical'} flexItem />} */ justifyContent={'center'} sx={{
            flexWrap: {
                xs: 'wrap',
                sm: 'wrap',
                md: 'nowrap',
            },
            flexDirection: {
                xs: 'column',
                sm: 'row',
                md: 'row'
            }, gap: 0.3
        }}  >

            <Mybox title='Fast Delivery' subTitle='Start from $10' icon={<ElectricBoltIcon sx={{ fontSize: 35 }} />} />
            <Mybox title='Money Guarantee' subTitle='7 Days Back' icon={<WorkspacePremiumOutlinedIcon sx={{ fontSize: 35 }} />} />
            <Mybox title='365 Days' subTitle='For free return' icon={<AccessAlarmOutlinedIcon sx={{ fontSize: 35 }} />} />
            <Mybox title='Payment' subTitle='Secure system' icon={<CreditScoreOutlinedIcon sx={{ fontSize: 35 }} />} />

        </Stack>
    )
}

export function Mybox({ title, subTitle, icon }) {
    const theme = useTheme()
    return (
        <Box sx={{
            bgcolor: theme.palette.iconsection.main, py: 1.5, display: 'flex', alignItems: 'center', justifyContent: { sm: 'center', md: 'center' }, gap: 2, width: {
                xs: '100%',
                sm: '25%',
                md: '25%%'
            }
        }}>
            {icon}
            <Box>
                <Typography sx={{ color: theme.palette.text.primary }}>{title}</Typography>
                <Typography sx={{ color: theme.palette.text.disabled }}>{subTitle} </Typography>
            </Box>
        </Box>
    )

} 
