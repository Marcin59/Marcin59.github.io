import ClassInterface from "../interfaces/ClassInterface";
import technologyLogos from "./technologyLogos";

const classes: ClassInterface[] = [
    {
        name: "Computer Vision",
        description: `During my Computer Vision course, I worked in two-member teams on three projects: detecting moving objects in DAS recordings by analyzing fiber optic data, tracking board game (Splendor) pieces and player actions from video, and training deep learning models for semantic segmentation on the LIP dataset. These projects strengthened my skills in image processing, deep learning, and object tracking.`,
        semester: 5,
        tools: [
            technologyLogos.tensorFlow,
            technologyLogos.openCV
        ]
    },
    {
        name: "Deep Learning",
        description: "During my Deep Learning course, I worked in two-member teams on three projects: designing a lightweight model to approximate a complex probabilistic function, developing a CNN for crack detection in wall images, and identifying patterns in time-series sensor data from a production line. These projects enhanced my skills in neural network optimization, computer vision, and time-series analysis.",
        semester: 5,
        tools: [
            technologyLogos.tensorFlow
        ]
    },
    {
        name: "Problem Classes",
        description: "Throughout the semester, we work in 5-member teams. My team's project focus on identifying common elements in inspiration photos and the final projects of artists. We work with domain experts in that field to identify the most similar features of the images.",
        semester: 5,
        tools: [
            technologyLogos.pytorch,
            technologyLogos.openCV
        ]
    },
    {
        name: "Data Mining",
        description: "In Data Mining, we delve into association rules, clustering, data annotation and augmentation, and data preprocessing. As part of our project, we developed a movie recommendation system based on clustering and performed data preprocessing for a selected regression dataset.",
        tools: [
            technologyLogos.scikitLearn,
            technologyLogos.django,
            technologyLogos.numpy,
        ],
        semester: 4,
    },
    {
        name: "Software Engineering",
        description: "In Software Engineering, we explored the lifecycle of software development, emphasizing teamwork and collaboration. Our primary focus was on creating products using best practices and methodologies to ensure high-quality software solutions.",
        semester: 4,
        tools: [
            technologyLogos.java,
            technologyLogos.JUnit,
        ]
    },
    {
        name: "Database Systems",
        description: "In Database Systems, we learned the basics of databases using MongoDB, focusing on data modeling, querying, and performance optimization. We also explored the practical applications of databases in real-world scenarios.",
        semester: 4,
        tools: [
            technologyLogos.mongoDB,
        ]
    },
]

export default classes;