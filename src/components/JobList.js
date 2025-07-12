import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={isHorizontal ? `full-width-tabpanel-${index}` : `vertical-tabpanel-${index}`}
            aria-labelledby={isHorizontal ? `full-width-tab-${index}` : `vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: isHorizontal ? `full-width-tab-${index}` : `vertical-tab-${index}`,
        "aria-controls": isHorizontal ? `full-width-tabpanel-${index}` : undefined,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: "flex",
        height: 300,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

const JobList = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const experienceItems = {
        MachineAtro: {
            jobTitle: "AI/ML Software Development Intern @",
            duration: "Oct 2023 – May 2024",
            desc: [
                "Designed and deployed a YOLO-based real-time defect detection system (Python, OpenCV) for Colgate's manufacturing line, achieving 92% accuracy and reducing manual QA effort by 40% through automated defect flagging, anomaly logging, and reporting.",
                "Created a YOLO-driven anomaly classification feature within the company's chatbot, enabling automatic client responses upon sensor video uploads and enhancing user experience.",
            ],
        },
        "Tusker AI": {
            jobTitle: "Data Science Intern @",
            duration: "June 2023 – July 2023",
            desc: [
                "Built a high-accuracy (94%) machine learning model to detect malicious data packets in Connected Autonomous Vehicles, enhancing threat detection, system resilience, and AI safety.",
                "Created SQL scripts to query and organize historical telemetry and financial data for budget and operational trend analysis.",
                "Created a stock trend forecasting model using LSTM on Yahoo Finance data; reduced RMSE by 12% and visualized insights through interactive dashboards using Tableau and Matplotlib.",
            ],
        },
        "Identiq Infotech": {
            jobTitle: "SDE Intern @",
            duration: "June 2022 – July 2022",
            desc: [
                "Designed a log processing pipeline using Apache Kafka and Flask-based microservices to buffer and forward enriched logs into an Elasticsearch + Kibana stack for data exploration and visualization.",
                "Built and deployed LSTM and Isolation Forest models in Python to detect anomalies in system logs, exposing results via FastAPI and monitoring performance across log types.",
                "Built ETL pipelines to load structured log data into a centralized database and used Tableau to visualize anomalies and performance trends for stakeholders.",
            ],
        },
        "Boston University": {
            jobTitle: "Graduate Teaching Assistant @",
            duration: "May 2025 – August 2025",
            desc: [
                "METCS669/METCS469 - Database Design and Implementation for Business.",
            ],
        },
        IEEE: {
            jobTitle: "Reviewer @",
            duration: "Nov 2022 – Feb 2024",
            desc: [
                "Evaluated scholarly manuscripts for journals such as Access, IoT, and Transactions on Artificial Intelligence.",
                "Assessed manuscripts covering advanced topics, including deep learning, machine learning, AI, blockchain, and reinforcement learning.",
            ],
        },
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation={!isHorizontal ? "vertical" : undefined}
                variant={isHorizontal ? "fullWidth" : "scrollable"}
                value={value}
                onChange={handleChange}
                className={classes.tabs}
            >
                {Object.keys(experienceItems).map((key, i) => (
                    <Tab key={i} label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
                ))}
            </Tabs>
            {Object.keys(experienceItems).map((key, i) => (
                <TabPanel key={i} value={value} index={i}>
                    <span className="joblist-job-title">
                        {experienceItems[key].jobTitle}{" "}
                    </span>
                    <span className="joblist-job-company">{key}</span>
                    <div className="joblist-duration">{experienceItems[key].duration}</div>
                    <ul className="job-description">
                        {experienceItems[key].desc.map((descItem, j) => (
                            <FadeInSection key={j} delay={`${j + 1}00ms`}>
                                <li>{descItem}</li>
                            </FadeInSection>
                        ))}
                    </ul>
                </TabPanel>
            ))}
        </div>
    );
};

export default JobList;