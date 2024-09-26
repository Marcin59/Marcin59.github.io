import { Box } from '@mui/material';
import styles from './Background.module.css';


export default function Background(){
    return (   
        <Box className={styles.lines} sx = {{backgroundColor: "background.default", width: '100%'}}>
            <div className={styles.line}/>
            <div className={styles.line}/>
            <div className={styles.line}/>
            <div className={styles.line}/>
            <div className={styles.line}/>
            <div className={styles.line}/>
            <div className={styles.line}/>
        </Box>
    )
}