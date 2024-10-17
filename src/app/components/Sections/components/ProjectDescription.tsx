import { motion } from 'framer-motion';
import styles from './ProjectDescription.module.css';
import { Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import ImageInterface from '@/app/interfaces/ImageInterface';

interface ProjectDescriptionProps {
  name: string;
  description: string;
  tools?: JSX.Element[];
  github?: string;
  fromLeft?: "true" | "false";
  image?: ImageInterface;
}

const ProjectDescription = ({
  name,
  description,
  tools,
  github,
  fromLeft = "true",
  image
}: ProjectDescriptionProps) => {
  return (
    <motion.div 
      className={`${styles.projectContainer} ${fromLeft === "true" ? styles.fromLeft : styles.fromRight}`} 
      initial={{opacity: 0, x: fromLeft === "true" ? -50 : 50}}
      whileInView={{opacity: 1, x: 0}}
      viewport={{ once: true }}
      transition={{duration: 2}}
    >
        <div style={{textAlign: fromLeft === "false" ? 'right' : 'left'}}>
          <Typography variant='h4' color='primary.main'>{name}</Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexGrow: 1 }}>
          {fromLeft === "false" && image && (
            <Image src={image.path} alt={`${name} project`} width={image.width} height={image.height} />
          )}
          <Typography>{description}</Typography>
          {fromLeft === "true" && image && (
            <Image src={image.path} alt={`${name} project`} width={image.width} height={image.height} />
          )}
        </div>
        <div style={{position: 'absolute', bottom: 5, display: 'flex', justifyContent: 'space-between', width: "calc(85% - 30px)", alignItems: 'center', height: '50px'}}>
              <div style={{display: 'flex', gap: '5px', alignItems: 'center'}}>
                  <Typography variant="body1">Technologies: </Typography>
                  {tools?.map((tool, index) => (
                      <Typography key={index} variant="caption" color="primary.light">
                          {tool}
                      </Typography>
                  ))}
              </div>
              <div>
                {github && (
                  <IconButton
                    component="a"
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                  >
                    <GitHubIcon />
                  </IconButton>
                )}
              </div>
          </div>
    </motion.div>
  );
}
export default ProjectDescription;