"use client";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ProjectDescription from "./components/ProjectDescription";
import projects from "@/app/constants/projects";
import PopoverList from "./components/PopoverList/PopoverList";

const Portfolio = () => {
    return (
        <div style={{alignItems: 'center'}} id = "Portfolio" className="section">
            <div style={{maxWidth: "900px", width: '100%'}}>
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{ once: true }}
                    transition={{duration: 1}}
                    style={{marginBottom: "20px"}}
                >
                    <Typography variant="h2" sx={{color: "primary.main", fontWeight: 'bold'}}>Portfolio</Typography>
                </motion.div>
            </div>
            <Box sx={{display: {xs: "none", md:'flex'}, flexDirection: 'column', gap: '20px', width: '100%'}}>
                {projects.map((project, index) => (
                    <ProjectDescription
                        key={index}
                        name={project.name}
                        description={project.description}
                        tools={project.tools}
                        github={project.github}
                        fromLeft={index % 2 === 0 ? "true" : "false"}
                        image={project.image}
                    />
                ))}
            </Box>
            <Box sx={{display: {xs: "grid", md: "none"}}}>
                <PopoverList items={projects}/>
            </Box>
        </div>
    );
}

export default Portfolio;