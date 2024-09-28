"use client";
import { motion } from "framer-motion";
import ExperienceTimeline from "./components/ExperienceTimeline";
import { Typography } from "@mui/material";

export default function Experience() {
    return(
        <div style={{minHeight: '100%', width: "min(80%, 900px)", display: 'flex', flexDirection: 'column', justifyContent: 'center', scrollBehavior: "smooth"}} id = "Experience">
            <motion.div
                initial={{opacity: 0,}}
                whileInView={{opacity: 1}}
                viewport={{ once: true }}
                transition={{duration: 1}}
            >
                <Typography variant="h2" sx={{color: "primary.main", fontWeight: 'bold'}}>Experience</Typography>
            </motion.div>
            <div>
                <ExperienceTimeline/>
            </div>
        </div>
    )
}