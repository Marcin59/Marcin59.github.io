import ClassInterface from "@/app/interfaces/ClassInterface";
import ProjectInterface from "@/app/interfaces/ProjectInterface";
import { Box, Typography } from "@mui/material";

interface ClassDescriptionProps {
    itemData: ClassInterface | ProjectInterface | undefined; // Replace 'any' with the appropriate type
}

import { useMediaQuery, useTheme } from "@mui/material";

const ItemDescription = ({ itemData }: ClassDescriptionProps) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <div style={{ width: "100%", height: "100%", display: 'flex', flexDirection: 'column'}}>
            <Box
                sx={{
                    margin: isSmallScreen ? "10px 10px 0 10px" : "20px 30px 0 30px",
                    display: "flex",
                    flexDirection: "column",
                    gap: isSmallScreen ? "10px" : "20px",
                }}
            >
                <Typography variant={isSmallScreen ? "h5" : "h4"} color="primary.main">
                    {itemData?.name}
                </Typography>
                <Typography variant="body1">{itemData?.description}</Typography>
            </Box>
            <div
                style={{
                    padding: isSmallScreen ? "0 15px 0 15px" : "0 30px 0 30px",
                    marginTop: "auto",
                    display: "flex",
                    bottom: 0,
                    flexDirection: isSmallScreen ? "column" : "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    height: isSmallScreen ? "auto" : "50px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        gap: "5px",
                        alignItems: "center",
                        flexWrap: isSmallScreen ? "wrap" : "nowrap",
                    }}
                >
                    <Typography variant="caption">Technologies: </Typography>
                    {itemData?.tools?.map((tool, index) => (
                        <Typography key={index} variant="caption" color="primary.light">
                            {tool}
                        </Typography>
                    ))}
                </div>
                <div>
                    <Typography variant="caption">
                        {itemData && 'semester' in itemData && (
                            <>Semester: {itemData.semester}</>
                        )}
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default ItemDescription;