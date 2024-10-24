import ProjectInterface from "../interfaces/ProjectInterface";
import technologyLogos from "./technologyLogos";

const projects: ProjectInterface[] = [
    {
        name: "Recommendation System",
        description: "This project involved building a movie recommendation system using the K-means clustering algorithm to group users based on their movie ratings and predict future preferences. We implemented the solution using Python and scikit-learn, focusing on data preprocessing, clustering, and model evaluation through Mean Squared Error (MSE). The work was done collaboratively, and we prepared a comprehensive report detailing each step of the process.",
        tools: [technologyLogos.python, technologyLogos.scikitLearn],
        github: "https://github.com/Marcin59/Movie_Recommendation_System",
        image: {
            path: "/projects/movie_poster.png",
            alt: "Poster",
            width: 400,
            height: 300
        }
    },
    {
        name: "House Pricing dataset",
        description: "This project focused on improving the general classification result (MSE) of a regression model by applying pre-processing algorithms from various fields, including feature normalization and standardization, feature selection, and feature extraction. We worked in groups and prepared a comprehensive report detailing the entire pipeline created in sklearn library.",
        tools: [technologyLogos.python, technologyLogos.scikitLearn],
        github: "https://github.com/Marcin59/Data_Mining_Project",
        image: {
            path: "/projects/house_pricing.png",
            alt: "Pipeline",
            width: 350,
            height: 250
        }
    },
    {
        name: "R Shiny Dashboard",
        description: "A project for Data Vizualization classes, where we created a dashboard in R Shiny with data from the Global Electrics Retailer, which is a fictional company. The dashboard shows the sales of the company in different countries and regions.",
        tools: [technologyLogos.r, technologyLogos.shiny],
        github: "https://github.com/Marcin59/DV_Dashboard",
        image: {
            path: "/projects/dashboard.png",
            alt: "Pipeline",
            width: 500,
            height: 250
        }
    },
    {
        name: "Text Transformer",
        description: "A collaborative project for Software Engineering class, emphasizing teamwork, best practices in GitHub collaboration, task division, and the complete software development lifecycle. We created a API in Java with JUnit tests that transforms text into different formats.",
        tools: [technologyLogos.java, technologyLogos.JUnit],
        github: "https://github.com/Marcin59/Text_Transformer"
    },
]

export default projects;