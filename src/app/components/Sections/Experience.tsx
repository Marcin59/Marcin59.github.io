"use client";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import ExperienceTimeline from "./components/ExperienceTimeline";

export default function Experience() {
    return(
        <div style={{height: '100%', width: "min(80%, 900px)", display: 'flex', flexDirection: 'column', justifyContent: 'center', scrollBehavior: "smooth"}} id = "Experience">
            <motion.div
                initial={{opacity: 0, y: 25}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 1}}
            >
                <Typography variant="h5" sx={{color: "primary.main", fontWeight: 'bold', marginBottom: '20px'}}>Experience</Typography>
            </motion.div>
            <div>
                <ExperienceTimeline/>
            </div>
        </div>
    )
}