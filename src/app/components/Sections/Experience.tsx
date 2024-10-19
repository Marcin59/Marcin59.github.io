"use client";
import { motion } from "framer-motion";
import ExperienceTimeline from "./components/ExperienceTimeline";
import { Typography } from "@mui/material";

export default function Experience() {
    return(
        <div style={{display: 'grid', scrollBehavior: "smooth"}} id = "Experience" className="section">
            <motion.div
                initial={{opacity: 0,}}
                whileInView={{opacity: 1}}
                viewport={{ once: true }}
                transition={{duration: 1}}
                style={{height: "auto", display: 'flex', alignItems: 'flex-end', marginBottom: '20px'}}
            >
                <Typography 
                    variant="h2"
                    className="sectionHeader sectionText"
                    sx = {{fontWeight: 'bold'}}
                >
                    Experience
                </Typography>
            </motion.div>
            <div style={{width: '100%'}}>
                <ExperienceTimeline/>
            </div>
        </div>
    )
}