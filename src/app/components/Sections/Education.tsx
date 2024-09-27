"use client";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function Education() {
    return(
        <div style={{height: '100%', maxWidth: "900px", display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px'}} id = "Education">
            <motion.div
                initial={{opacity: 0, y: 25}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 1}}
            >
                <Typography variant="h2" sx={{color: "primary.main", fontWeight: 'bold'}}>Education</Typography>
            </motion.div>
            <motion.div
                initial={{opacity: 0, y: 25}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 1, delay: 0.5}}
            >
                <Typography variant="h3" sx={{marginBottom: "10px"}}>Poznań University of Technology</Typography>
                <Typography variant="body1">Bachelor of Science in Artificial Intelligence</Typography>
                <Typography variant="body1">Expected Graduation: 2025</Typography>
            </motion.div>
            <motion.div
                initial={{opacity: 0, y: 25}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 1, delay: 1}}
            >
                <Typography variant="h4" sx={{lineHeight: '40px', marginTop: "20px"}}>Key Coursework:</Typography>
            </motion.div>
        </div>
    )
}