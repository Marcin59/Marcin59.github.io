"use client";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function About() {
    return(
        <div style={{maxWidth: "900px", padding: '20px'}} id="About" className="section">
            <motion.div
                initial={{opacity: 0, y: 25}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{ once: true }}
                transition={{duration: 1}}
            >
                <Typography variant="h5" className="sectionText" sx={{color: "primary.main", fontWeight: 'bold', marginBottom: '20px'}}>Hi, my name is</Typography>
            </motion.div>
            <motion.div
                initial={{opacity: 0, y: 25}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{ once: true }}
                transition={{duration: 1, delay: 0.5}}
            >
                <Typography variant="h1" className="sectionText" sx={{marginBottom: "10px", fontSize: { xs: '2.5rem', md: '5rem' }}}>Marcin Kapiszewski</Typography>
                <Typography variant="h3" className="sectionText" sx={{marginBottom: "30px", fontSize: { xs: '1.5rem', md: '3rem' }}}>AI Developer</Typography>
            </motion.div>
            <motion.div
                initial={{opacity: 0, y: 25}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{ once: true }}
                transition={{duration: 1, delay: 1}}
            >
                <Typography className="sectionText" sx={{lineHeight: '40px', fontSize: { xs: '1rem', md: '1.25rem' }}}>I am an Artificial Intelligence student at Poznan University of Technology with a strong foundation in AI principles. I consider myself a fast learner and open to new challenges. I am eager to apply my knowledge to real-world projects and continue developing my skills in this rapidly evolving field.</Typography>
            </motion.div>
        </div>
    )
}