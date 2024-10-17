import ImageInterface from "./ImageInterface";

interface ProjectInterface{
    name: string;
    description: string;
    tools?: JSX.Element[];
    github?: string;
    image?: ImageInterface;
}

export default ProjectInterface;