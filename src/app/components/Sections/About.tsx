"use client";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function About() {
    return(
        <div style={{minHeight: '100%', maxWidth: "900px", display: 'flex', flexDirection: 'column', justifyContent: 'center'}} id = "About">
            <motion.div
                initial={{opacity: 0, y: 25}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{ once: true }}
                transition={{duration: 1}}
            >
                <Typography variant="h5" sx={{color: "primary.main", fontWeight: 'bold', marginBottom: '20px'}}>Hi, my name is</Typography>
            </motion.div>
            <motion.div
                initial={{opacity: 0, y: 25}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{ once: true }}
                transition={{duration: 1, delay: 0.5}}
            >
                <Typography variant="h1" sx={{marginBottom: "10px"}}>Marcin Kapiszewski</Typography>
                <Typography variant="h3" sx={{marginBottom: "30px"}}>AI Developer</Typography>
            </motion.div>
            <motion.div
                initial={{opacity: 0, y: 25}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{ once: true }}
                transition={{duration: 1, delay: 1}}
            >
                <Typography sx={{lineHeight: '40px'}}>I am a Artificial Intelligence student at Poznan University of Technology with a strong foundation in AIprinciples. I consider myself a fast learner and open to new challenges. I am eager to apply myknowledge to real-world projects and continue developing my skills in this rapidly evolving field.</Typography>
            </motion.div>
        </div>

    )
}