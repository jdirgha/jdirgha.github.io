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

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
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
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    MachineAstro: {
      jobTitle: "AI/ML Software Development Intern @",
      duration: "Oct 2023 – May 2024",
      desc: [
        "Designed, trained, and deployed a real-time defect detection system using YOLO, Python, and OpenCV for Colgate's manufacturing line, achieving 92% detection accuracy and reducing manual QA workload by 40% through automated defect flagging, anomaly logging, and reporting workflows.",
        "Integrated a YOLO-based anomaly detection feature into the chatbot platform, enabling automatic responses to sensor video uploads and improving user experience.",
        "Developed and deployed a chatbot (RAG + LLM + SQL) within the client dashboard to streamline asset-related queries and reduce support latency.",
      ],
    },
    "Tusker AI": {
      jobTitle: "Data Science Intern @",
      duration: "June 2023 – July 2023",
      desc: [
        "Built and optimized a distributed data pipeline using Apache Spark (Databricks) to process cybersecurity and financial telemetry, accelerating feature engineering and model experimentation.",
        "Trained and validated a malicious packet detection model achieving 94% accuracy for Connected Autonomous Vehicles, improving threat response and system reliability.",
        "Developed LSTM-based stock forecasting models, achieving 12% RMSE reduction, and delivered insights via Tableau and Matplotlib dashboards to support financial planning decisions.",
      ],
    },
    "Identiq Infotech": {
      jobTitle: "SDE Intern @",
      duration: "June 2022 – July 2022",
      desc: [
        "Designed and implemented a real-time log processing pipeline using Apache Kafka and Flask microservices to ingest, enrich, and route logs into an Elasticsearch + Kibana stack for centralized search, monitoring, and visualization.",
        "Deployed LSTM and Isolation Forest models for anomaly detection on system logs, packaging inference into FastAPI services and monitoring performance across log types to support proactive incident response.",
        "Built scalable ETL workflows to load structured log data into a central analytics warehouse, and created Tableau dashboards to visualize anomaly patterns, performance trends, and operational KPIs for engineering stakeholders.",
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
    Publications: {
      jobTitle: "Research",
      duration: "2023-2024",
      desc: [
        "Blockchain and Quantum-based Collaborative Communication Framework for Telehealth - ",
        "ML based Secure Communication Framework for Connected Autonomous Vehicles (September 2024) - ",
      ],
      links: [
        "https://ieeexplore.ieee.org/document/10880726",
        "https://ieeexplore.ieee.org/document/10465158",
      ],
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>
                    {descItem}
                    {experienceItems[key]["links"] && experienceItems[key]["links"][i] && (
                      <a 
                        href={experienceItems[key]["links"][i]} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: '#64ffda', textDecoration: 'none' }}
                      >
                        View Paper
                      </a>
                    )}
                  </li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;