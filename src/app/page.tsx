import {Paper} from "@mui/material";
import Introduce from "./components/Introduce";

export default function Home() {
  return (
    <div>
      <main style = {{display: "grid", gridTemplateColumns: "450px 1fr", height: '100vh', alignItems: "center"}}>
        <Paper sx={{width: '90%', height: '70%', justifySelf: "right", overflow: 'hidden'}}>
          <Introduce/>
        </Paper>
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
