"use client";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import PopoverList from "./components/PopoverList/PopoverList";
import classes from "@/app/constants/classes";

export default function Education() {
    return(
        <div style={{maxWidth: "900px", gap: '10px'}} id = "Education" className="section">
            <motion.div
                initial={{opacity: 0, y: 25}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{ once: true }}
                transition={{duration: 1}}
            >
                <Typography variant="h2" className="sectionHeader sectionText" sx={{fontWeight: 'bold',}}>Education</Typography>
            </motion.div>
            <motion.div
                initial={{opacity: 0, y: 25}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{ once: true }}
                transition={{duration: 1, delay: 0.5}}
            >
                <Typography variant="h3" sx={{marginBottom: "10px"}} className="sectionText" >Poznań University of Technology</Typography>
                <Typography variant="body1" className="sectionText">Bachelor of Science in Artificial Intelligence</Typography>
                <Typography variant="body1" className="sectionText">Expected Graduation: 2025</Typography>
                <Typography variant="body1" className="sectionText">Actual semester: 5</Typography>
            </motion.div>
            <PopoverList items={classes}/>
        </div>
    )
}