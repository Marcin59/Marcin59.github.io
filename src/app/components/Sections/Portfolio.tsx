"use client";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import ProjectDescription from "./components/ProjectDescription";
import projects from "@/app/constants/projects";

const Portfolio = () => {
    return (
        <div style={{width: "100%", display: 'flex', justifyContent: 'center', minHeight: '100% !important', flexDirection: 'column', alignItems: 'center'}} id = "Portfolio">
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
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px', width: '100%'}}>
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
            </div>
        </div>
    );
}

export default Portfolio;