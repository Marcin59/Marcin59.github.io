import ClassInterface from "@/app/interfaces/ClassInterface";
import { Box, Typography } from "@mui/material";

interface ClassDescriptionProps {
  classes: ClassInterface[]; // Replace 'any' with the appropriate type
  selectedId: string; // Replace 'string' with the appropriate type if needed
}

const ClassDescription = ({classes, selectedId}: ClassDescriptionProps) => {
    const selectedClass = classes.find((item) => item.name === selectedId);

    return (
        <div style={{width: '100%', height: '100%'}}>
            <Box sx={{position: 'absolute', margin: "20px 30px 0 30px", display: 'flex', flexDirection: 'column', gap: "20px"}}>
                <Typography variant="h4" color="primary.main">{selectedClass?.name}</Typography>
                <Typography variant="body1">{selectedClass?.description}</Typography>
            </Box>
            <div style={{padding: "0 30px 0 30px", position: 'absolute', bottom: 5, display: 'flex', justifyContent: 'space-between', width: "100%", alignItems: 'center', height: '50px'}}>
                <div style={{display: 'flex', gap: '5px', alignItems: 'center'}}>
                    <Typography variant="caption">Technologies: </Typography>
                    {selectedClass?.tools?.map((tool, index) => (
                        <Typography key={index} variant="caption" color="primary.light">
                            {tool}
                        </Typography>
                    ))}
                </div>
                <div>
                    <Typography variant="caption">Semester: {selectedClass?.semester}</Typography>
                </div>
            </div>
        </div>
    );
}

export default ClassDescription;