import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import socialMedia from "../constants/socialMedia";
import Image from 'next/image';
import styles from './Introduce.module.css';

export default function Introduce() {
    return(
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: "10px", height: "100%", position: "relative" }}>
            <Box sx = {{width: "85%", margin: "25px 0 75px 0"}}>
                <Typography variant="h4" sx={{margin: "0 0 5px 0"}}>
                    Marcin Kapiszewski
                </Typography>
                <Typography variant="body2" sx={{margin: "0 0 15px 0"}}>
                    Entry-level artificial intelligence developer
                </Typography>
            </Box>
            <Image src={`/Marcin_Kapiszewski.jpg`} alt="Marcin Kapiszewski" width={200} height={200} className={styles.portret_img}/>
            <Box sx={{ gap: '20px', display: 'flex', height: '60px'}}>
                {socialMedia.map((elem) => (
                    <IconButton href={elem.link} target="_blank" key={elem.name} sx={{width: 60}} color="primary">
                        <elem.icon/>
                    </IconButton>
                ))}
            </Box>
            <Typography variant="body1" sx={{margin: "20px 0 0 0", width: "90%", textAlign: 'center'}}>
                I am a Artificial Intelligence student at Poznan University of Technology with a strong foundation in AI principles.
                I consider myself a fast learner and open to new challenges.
            </Typography>
            <Box sx={{ bottom: 0, position: 'absolute', width: '100%' }}>
                <Divider variant="middle"/>
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Button size="large" sx={{ width: '100%', height: '60px' }}>
                        Download CV
                    </Button>
                    <Divider orientation="vertical" flexItem sx={{ height: '40px' }}/>
                    <Button  size="large" sx={{ width: '100%', height: '60px' }}>
                        Contact Me
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}