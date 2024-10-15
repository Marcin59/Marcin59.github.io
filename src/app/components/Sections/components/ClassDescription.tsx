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
                <Typography variant="h3" color="primary.main">{selectedClass?.name}</Typography>
                <Typography variant="body1">{selectedClass?.description}</Typography>
            </Box>
        </div>
    );
}

export default ClassDescription;