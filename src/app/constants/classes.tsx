import ClassInterface from "../interfaces/ClassInterface";
import technologyLogos from "./technologyLogos";

const classes: ClassInterface[] = [
    {
        name: "Data Mining",
        description: "Data Mining is the process of discovering patterns in large data sets involving methods at the intersection of machine learning, statistics, and database systems.",
        tools: [
            technologyLogos.python,
            technologyLogos.scikitLearn,
            technologyLogos.django,
            technologyLogos.numpy,
        ],
        semester: 4,
    },
    {
        name: "Problem Classes",
        description: "Machine Learning is the study of computer algorithms that improve automatically through experience and by the use of data.",
        semester: 5,
        tools: [
            technologyLogos.python,
            technologyLogos.scikitLearn,
            technologyLogos.django,
            technologyLogos.numpy,
            technologyLogos.pytorch,
        ]
    },
    {
        name: "Software Engineering",
        description: "Software Engineering is the systematic application of engineering approaches to the development of software.",
        semester: 4,
        tools: [
            technologyLogos.java,
            technologyLogos.JUnit,
        ]
    },
    {
        name: "Deep Learning",
        description: "Deep Learning is a subset of machine learning where artificial neural networks, algorithms inspired by the human brain, learn from large amounts of data.",
        semester: 5,
        tools: [
            technologyLogos.python,
            technologyLogos.scikitLearn,
            technologyLogos.django,
            technologyLogos.numpy,
            technologyLogos.tensorFlow
        ]
    },
    {
        name: "Computer Vision",
        description: "Computer Vision is an interdisciplinary scientific field that deals with how computers can gain high-level understanding from digital images or videos.",
        semester: 5,
        tools: [
            technologyLogos.python,
            technologyLogos.django,
            technologyLogos.numpy,
            technologyLogos.tensorFlow
        ]
    },
    {
        name: "Database Systems",
        description: "Database Systems are an organized collection of data, generally stored and accessed electronically from a computer system.",
        semester: 4,
        tools: [
            technologyLogos.mongoDB,
        ]
    },
]

export default classes;