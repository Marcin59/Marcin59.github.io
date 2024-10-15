"use client";
import classes from "@/app/constants/classes";
import { useClickOutside } from "@/app/hooks/useClickOutside";
import { IconButton, Paper, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react"
import CloseIcon from '@mui/icons-material/Close';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ClassDescription from "./ClassDescription";

export default function Classes() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [selectedId, setSelectedId] = useState<string | null>(null)
    const presenceRef = useRef(null);

    const closePresence = () => {
        setSelectedId(null)
    }

    useEffect(() => {
        console.log(selectedId)
    },[selectedId])

    useClickOutside(presenceRef, () => closePresence())

    return(
        <div style= {{
            position: 'relative', display: 'flex', justifyContent: 'center',
            flexWrap: 'wrap', columnGap: '30px', rowGap: '10px',
        }}>
            {classes.map((item, index) => (
                <motion.div 
                    key={item.name} layoutId={item.name}
                >
                    <motion.div
                        onClick={() => selectedId === null ? setSelectedId(item.name): () => {}} 
                        initial={{opacity: 0, x: 25}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.2, delay: 0,
                            x: {duration: 1, delay: (index+1.5) * 0.5},
                            opacity: {duration: 1, delay: (index+1.5) * 0.5},
                        }}
                        style={{
                            width: '250px', height: '150px', margin: '10px'
                        }}
                        whileHover={{scale: 1.1, cursor: 'pointer'}}
                    >
                        <Paper
                            sx={{
                                opacity: selectedId === null ? 1 : 0.2,
                                transition: 'opacity 0.5s', width: '100%', height: '100%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                position: 'relative',
                            }}
                        >
                            <Typography color= 'primary.main' variant="h5">{item.name}</Typography>
                            <div style={{position: 'absolute', bottom: 5, display: 'flex', justifyContent: 'space-around', width: "100%", alignItems: 'center'}}>
                                <div style={{display: 'flex', gap: '5px'}}>
                                    {item.tools?.map((tool, index) => (
                                        <Typography key={index} variant="caption" color="primary.light">
                                            {tool}
                                        </Typography>
                                    ))}
                                </div>
                            </div>
                        </Paper>
                    </motion.div>
                </motion.div>
            ))}
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 0.5}}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5, delay: 0,
                        opacity: {duration: 1, delay: classes.length * 0.5 + 1},
                    }}
                    style= {{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                >
                    <QuestionMarkIcon/>
                    <Typography variant="body1" sx={{textAlign: 'center', margin: '0 0 0 10px'}}>
                        Click at the class to see more details
                    </Typography>
                </motion.div>

            <div style= {{
                display: 'grid', position: 'absolute',
                width: '100%', opacity: "1",
                alignContent: 'center', justifyContent: 'center',
            }}>
                <AnimatePresence>
                    {selectedId && (
                        <motion.div 
                            ref={presenceRef}
                            layoutId={selectedId}
                            style={{
                                width: '550px', height: '350px',
                                marginTop: '0px', position:"relative"
                            }}
                        >
                            <Paper sx={{width: '100%', height: '100%'}}>
                                {/* <motion.h5>{item.subtitle}</motion.h5>
                                <motion.h2>{item.title}</motion.h2> */}
                                <div style={{position: 'absolute', right: '10px', top: '10px', zIndex:'10'}}>
                                    <IconButton onClick={() => closePresence()}>
                                        <CloseIcon/>
                                    </IconButton>
                                </div>
                                <ClassDescription
                                    classes={classes}
                                    selectedId={selectedId}
                                />
                            </Paper>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}