import {Box, Paper} from "@mui/material";
import Introduce from "./components/Introduce";
import Menu from "./components/Menu";
import About from "./components/Sections/About";
import Experience from "./components/Sections/Experience";
import Education from "./components/Sections/Education";

export default function Home() {
  return (
    <div>
      <main style = {{display: "grid", gridTemplateColumns: "450px 1fr", height: '100vh', alignItems: "center"}}>
        <div style=  {{width: '90%', height: '85%', justifySelf: "right", position: "relative"}}>
          <Paper sx={{width: '100%', height: '100%', overflow: 'hidden', position: "relative", borderRadius: "50px"}}>
            <Introduce/>
          </Paper>
          <div style={{position: "absolute", right: '-25px', top: '100px'}}>
            <Menu/>
          </div>
        </div>
        <Box sx={{width: '90%', height: '90%', padding: '20px 50px 0px 50px', position: 'relative', color: 'text.primary', display: 'flex', justifyContent: 'center', overflow: 'auto', flexWrap: 'wrap', scrollBehavior: 'smooth'}} >
          <About />
          <Experience />
          <Education />
        </Box>
      </main>
      <footer>
      </footer>
    </div>
  );
}
