import { KeyboardArrowUp } from '@mui/icons-material';
import { Box, useScrollTrigger, Zoom } from '@mui/material';
import Fab from '@mui/material/Fab';


export default function ScrollToTop() {

    const trigger = useScrollTrigger({
        threshold: 100
    })

    return (
        <Zoom in={trigger}>
            <Box>
                <Fab
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }}
                    sx={{ position: 'fixed', bottom: 77, right: 22 }} variant="extended" color="primary" aria-label="add">

                    <KeyboardArrowUp fontSize="medium" />

                </Fab>
            </Box>
        </Zoom>
    )
}
