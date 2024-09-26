import { Typography } from "@mui/material";

export default function About() {
    return(
        <div style={{height: '100%', maxWidth: "900px", display: 'flex', flexDirection: 'column', justifyContent: 'center', scrollBehavior: "smooth"}}>
            <Typography variant="h5" sx={{color: "primary.main", fontWeight: 'bold', marginBottom: '20px'}}>Hi, my name is</Typography>
            <Typography variant="h1" sx={{marginBottom: "10px"}}>Marcin Kapiszewski</Typography>
            <Typography variant="h3" sx={{marginBottom: "30px"}}>AI Developer</Typography>
            <Typography sx={{lineHeight: '40px'}}>I am a Artificial Intelligence student at Poznan University of Technology with a strong foundation in AIprinciples. I consider myself a fast learner and open to new challenges. I am eager to apply myknowledge to real-world projects and continue developing my skills in this rapidly evolving field.</Typography>
        </div>

    )
}