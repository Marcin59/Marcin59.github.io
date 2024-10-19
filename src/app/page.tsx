import {Box, Paper} from "@mui/material";
import Introduce from "./components/Introduce";
import Menu from "./components/Menu";
import About from "./components/Sections/About";
import Experience from "./components/Sections/Experience";
import Education from "./components/Sections/Education";
import styles from "./page.module.css";
import Portfolio from "./components/Sections/Portfolio";

export default function Home() {
  return (
    <div>
      <main className={styles.mainPage}>
        <div style=  {{width: '90%', height: '85%', position: "relative", justifySelf: 'right'}}>
          <Paper className={styles.bigIntroduction}>
            <Introduce/>
          </Paper>
          <div className={styles.bigMenu}>
            <Menu/>
          </div>
        </div>
        <Box sx={{
          width: '100%', height: '90%', padding: {xs: "0", md: '0 20px 0px 20px'},
          position: 'relative', color: 'text.primary', display: 'flex',
          justifyContent: 'center', overflow: 'auto', flexWrap: 'wrap',
          scrollBehavior: 'smooth', gap: '10px'
        }} >
          <About />
          <Experience />
          <Education />
          <Portfolio />
        </Box>
      </main>
      <footer>
      </footer>
    </div>
  );
}
