import ClassInterface from "@/app/interfaces/ClassInterface";
import ProjectInterface from "@/app/interfaces/ProjectInterface";
import { Paper, Typography } from "@mui/material";

interface ProjectPreviewProps {
    project: ProjectInterface | ProjectInterface | ClassInterface;
    opacity?: number;
}

const ItemPreview = ({ 
    project, 
    opacity = 1
}: ProjectPreviewProps) => {
    return (
        <Paper
            sx={{
                opacity: opacity,
                transition: 'opacity 0.5s', width: '100%', height: '100%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative',
            }}
        >
            <Typography color= 'primary.main' variant="h5">{project.name}</Typography>
            <div style={{position: 'absolute', bottom: 5, display: 'flex', justifyContent: 'space-around', width: "100%", alignItems: 'center'}}>
                <div style={{display: 'flex', gap: '5px'}}>
                    {project.tools?.map((tool, index) => (
                        <Typography key={index} variant="caption" color="primary.light">
                            {tool}
                        </Typography>
                    ))}
                </div>
            </div>
        </Paper>
    )
}

export default ItemPreview;