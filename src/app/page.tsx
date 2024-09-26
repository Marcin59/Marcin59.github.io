import {Paper} from "@mui/material";
import Introduce from "./components/Introduce";
import Menu from "./components/Menu";

export default function Home() {
  return (
    <div>
      <main style = {{display: "grid", gridTemplateColumns: "400px 1fr", height: '100vh', alignItems: "center"}}>
        <div style=  {{width: '90%', height: '85%', justifySelf: "right", position: "relative"}}>
          <Paper sx={{width: '100%', height: '100%', overflow: 'hidden', position: "relative"}}>
            <Introduce/>
          </Paper>
          <div style={{position: "absolute", right: '-25px', top: '100px'}}>
              <Menu/>
            </div>
        </div>
        {/* <Paper sx={{width: '90%', height: '80%'}} >
          <p>
            Get started by editing <code>pages/index.tsx</code>
          </p>
        </Paper> */}
      </main>
      <footer>
      </footer>
    </div>
  );
}
