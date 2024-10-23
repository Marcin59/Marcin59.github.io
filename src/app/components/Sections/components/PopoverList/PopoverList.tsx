"use client";
import { useClickOutside } from "@/app/hooks/useClickOutside";
import { IconButton, Paper, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react"
import CloseIcon from '@mui/icons-material/Close';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ItemDescription from "./components/ItemDescription";
import useMediaQuery from '@mui/material/useMediaQuery';
import ItemPreview from "./components/ItemPreview";
import ClassInterface from "@/app/interfaces/ClassInterface";
import ProjectInterface from "@/app/interfaces/ProjectInterface";

interface PopoverListProps {
    items: ClassInterface[] | ProjectInterface[];
}

export default function PopoverList({items}: PopoverListProps) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [selectedId, setSelectedId] = useState<string | null>(null)
    const presenceRef = useRef(null);

    const closePresence = () => {
        setSelectedId(null)
    }

    const isSmall = useMediaQuery('(max-width:600px)');

    useEffect(() => {
        console.log(selectedId)
    },[selectedId])

    useClickOutside(presenceRef, () => closePresence())

    return(
        <div style= {{
            display: 'flex', justifyContent: 'center',
            flexWrap: 'wrap', columnGap: '30px', rowGap: '10px',
        }}>
            {items.map((item, index) => (
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
                            x: {duration: 1, delay: isSmall ? 0.5 : (index+1.5) * 0.5},
                            opacity: {duration: 1, delay: isSmall ? 0.5 : (index+1.5) * 0.5},
                        }}
                        style={{
                            width: '250px', height: '150px', margin: '10px'
                        }}
                        whileHover={{scale: 1.1, cursor: 'pointer'}}
                    >
                        <ItemPreview project={item} opacity={selectedId === null ? 1 : 0.2}/>
                    </motion.div>
                </motion.div>
            ))}
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 0.5}}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5, delay: 0,
                        opacity: {duration: 1, delay: items.length * 0.5 + 1},
                    }}
                    style= {{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                >
                    <QuestionMarkIcon/>
                    <Typography variant="body1" sx={{textAlign: 'center', margin: '0 0 0 10px'}}>
                        Click at the item to see more details
                    </Typography>
                </motion.div>

            <div style= {{
                display: 'grid', position: 'absolute',
                width: '100%', opacity: "1",
                alignContent: 'center', justifyContent: 'center'
            }}>
                <AnimatePresence>
                    {selectedId && (
                        <motion.div 
                            ref={presenceRef}
                            layoutId={selectedId}
                            style={{
                                width: isSmall ? "90vw" : '550px', minHeight: isSmall ? "50vh" : '350px',
                                position: isSmall ? "fixed" : "relative", top: 0, left: 0,
                                margin: isSmall ? '15vh 5vw auto 5vw' : '0px', zIndex: 100,
                            }}
                        >
                            <Paper sx={{width: '100%', height: '100%',}}>
                                {/* <motion.h5>{item.subtitle}</motion.h5>
                                <motion.h2>{item.title}</motion.h2> */}
                                <div style={{position: 'absolute', right: '10px', top: '10px', zIndex:'10'}}>
                                    <IconButton onClick={() => closePresence()}>
                                        <CloseIcon/>
                                    </IconButton>
                                </div>
                                <ItemDescription
                                    itemData={items.find((item) => item.name === selectedId)}
                                />
                            </Paper>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}