import { ThemeProvider } from "styled-components"
import GlobalStyle from "./globalStyles"
import { lightTheme, darkTheme } from "./components/Themes"
/* import { Router } from "react-router-dom" */
import { Routes, Route, useLocation } from 'react-router-dom';


//Components
import Main from "./components/Main"
import AboutPage from "./components/AboutPage"
import BlogPage from "./components/BlogPage"
import WorkPage from "./components/WorkPage"
import MySkillsPage from "./components/MySkillsPage"
import { AnimatePresence } from "framer-motion";

function App() {

  const location = useLocation();

  return <>

  <GlobalStyle />

  <ThemeProvider theme={lightTheme}>

<AnimatePresence mode='await'>

  <Routes location={location} key={location.pathname}>
    <Route exact path='/' element={<Main/>} />
    <Route exact path='/about' element={<AboutPage/>} />
    <Route exact path='/blog' element={<BlogPage/>} />
    <Route exact path='/work' element={<WorkPage/>} />
    <Route exact path='/skills' element={<MySkillsPage/>} />
  </Routes>

</AnimatePresence>


  </ThemeProvider>

    </>
    
}

export default App

