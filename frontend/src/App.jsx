import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import Header3 from "./components/header/Header3";
import Main from "./components/main/Main";
import { Box, Container, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scroll/ScrollToTop";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">

          {/*   <motion.div className="border"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 5 }}
          >
            AHmad Khaled
          </motion.div> */}




          <Header1 />
          <Header2 />
          <Header3 />

          <Box sx={{ bgcolor: theme.palette.herobackground.main }}>
            <Hero />
            <Main />
          </Box>

          <Footer />

          <ScrollToTop />

        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;


