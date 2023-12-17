import styles from "./Projects.module.css";
import BarChartIcon from "@mui/icons-material/BarChart";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import SchoolIcon from "@mui/icons-material/School";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button } from "@mui/material";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  background-image: url("/images/bg4.jpg");
  background-size: cover;
  scroll-snap-align: center;

  @media only screen and (max-width: 768px) {
    height: 190vh;
  }
`;

function Projects() {
  return (
    <Section>
      <div className={styles.content}>
        <div className={styles.mainDiv}>
          <div className={styles.card}>
            <h1>My Projects</h1>
            <hr className={styles.hr} />
            {/* <h5>Checkout My Top Creations</h5> */}
          </div>
          <div className={styles.projects}>
            <div className={styles.projectCard}>
              <SchoolIcon sx={{ fontSize: "72px" }} />
              <div className={styles.projectTitle}>CollabSphere</div>
              <div>
                A robust alternative collaborating software similar to Microsoft
                Teams and Google Classroom for organizations of all sizes.
                <br />
                <br />
                <b>Tech Stack: </b>SvelteKit/React.js, Node.js, Express.js,
                MongoDB, NginX, Socket.io
                <br />
                <br />
                <a
                  href="https://github.com/savarsri/CollabSphere"
                  target="_blank"
                >
                  <GitHubIcon />
                </a>
              </div>
            </div>
            <div className={styles.projectCard}>
              <AccountBalanceIcon sx={{ fontSize: "71px" }} />
              <div className={styles.projectTitle}>
                Budget Management System
              </div>
              <div>
                Robust and User friendly budget management application for
                tracking and maintaining the cash flow through the organization.
                <br />
                <br />
                <b>Tech Stack: </b>Java, MySQL, JDBC, SwingGUI
                <br />
                <br />
                <a
                  href="https://github.com/savarsri/Java-Mini-Project-Budget-Management-System"
                  target="_blank"
                >
                  <GitHubIcon />
                </a>
              </div>
            </div>
            <div className={styles.projectCard}>
              <RecordVoiceOverIcon sx={{ fontSize: "72px" }} />
              <div className={styles.projectTitle}>
                Speech Emotion Recognition
              </div>
              <div>
                Speech emotion recognition and classification using TensorFlow
                and deep learning. Achieved an accuracy of 92.18% with CNN.
                <br />
                <br />
                <b>Tech Stack: </b>Python, Tensorflow, CNN, keras, numpy
                <br />
                <br />
                <a
                  href="https://github.com/savarsri/speech-emotion-recognition"
                  target="_blank"
                >
                  <GitHubIcon />
                </a>
              </div>
            </div>
            <div className={styles.projectCard}>
              <BarChartIcon sx={{ fontSize: "72px" }} />
              <div className={styles.projectTitle}>Chart Generator</div>
              <div>
                Fast and User friendly web application for generating variety of
                charts and graphs like Bar-chart, Pie-chart, Histogram, etc.
                <br />
                <br />
                <b>Tech Stack: </b>Svelte, chart.js, SPA-Router, Vite
                <br />
                <br />
                <a
                  href="https://github.com/savarsri/chart-generator"
                  target="_blank"
                >
                  <GitHubIcon />
                </a>
              </div>
            </div>
          </div>
          <hr className={styles.hr} />
          <div className={styles.card}>
            <h3>Checkout My Other Projects</h3>
          </div>
          <a href="https://github.com/savarsri" target="_blank">
            <Button
              variant="contained"
              sx={{
                margin: "10px",
                color: "white",
                bgcolor: "#004bae",
                ":hover": {
                  bgcolor: "#009DFF40",
                  color: "white",
                },
              }}
              endIcon={<GitHubIcon />}
            >
              GitHub
            </Button>
          </a>
        </div>
      </div>
    </Section>
  );
}

export default Projects;
