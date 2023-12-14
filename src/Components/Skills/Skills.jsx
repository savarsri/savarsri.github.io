import styles from "./Skills.module.css";
import { styled as st } from "@mui/material/styles";
import Button from "@mui/material/Button";
import styled from "styled-components";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const Section = styled.div`
  height: 100vh;
  background-image: url("/src/assets/bg3.jpg");
  background-size: cover;
  scroll-snap-align: center;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const BorderLinearProgress = st(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 600 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#004bae" : "#308fe8",
  },
}));

function SkillElement(props) {
  return (
    <div className={styles.skill}>
      <div className={styles.skillRow}>
        <div>{props.text}</div>
        <div>{props.percent}%</div>
      </div>
      <BorderLinearProgress variant="determinate" value={props.percent} />
    </div>
  );
}

function Skills() {
  return (
    <Section>
      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.textDiv}>My Skills</div>
          <hr className={styles.hr} />
          <div className={styles.skillsContent}>
            <div className={styles.skillSection}>
              <SkillElement text="C/C++" percent={80} />
              <SkillElement text="Java" percent={90} />
              <SkillElement text="Python" percent={65} />

              <SkillElement text="Full Stack Development" percent={85} />
              <SkillElement text="Flutter/Dart" percent={80} />
            </div>
            <div className={styles.skillSection}>
              <SkillElement text="Backend Development/APIs" percent={90} />
              <SkillElement text="JavaScript" percent={85} />
              <SkillElement text="Databases- MySQL, MongoDB" percent={85} />
              <SkillElement text="PHP" percent={65} />
              <SkillElement
                text="Mobile Application Development"
                percent={75}
              />
            </div>
          </div>
          <hr className={styles.hr} />
          <div className={styles.textDiv2}>
            Some other technologies I work with
          </div>
          <div>
            <Button
              variant="contained"
              sx={{
                margin: "10px",
                color: "white",
                bgcolor: "#006DFF40",
                ":hover": {
                  bgcolor: "#009DFF40",
                  color: "white",
                },
              }}
            >
              Git/Github
            </Button>
            <Button
              variant="contained"
              sx={{
                margin: "10px",
                color: "white",
                bgcolor: "#006DFF40",
                ":hover": {
                  bgcolor: "#009DFF40",
                  color: "white",
                },
              }}
            >
              NginX
            </Button>
            <Button
              variant="contained"
              sx={{
                margin: "10px",
                color: "white",
                bgcolor: "#006DFF40",
                ":hover": {
                  bgcolor: "#009DFF40",
                  color: "white",
                },
              }}
            >
              Spring Boot
            </Button>
            <Button
              variant="contained"
              sx={{
                margin: "10px",
                color: "white",
                bgcolor: "#006DFF40",
                ":hover": {
                  bgcolor: "#009DFF40",
                  color: "white",
                },
              }}
            >
              Bootstrap
            </Button>
            <Button
              variant="contained"
              sx={{
                margin: "10px",
                color: "white",
                bgcolor: "#006DFF40",
                ":hover": {
                  bgcolor: "#009DFF40",
                  color: "white",
                },
              }}
            >
              Flask
            </Button>
            <Button
              variant="contained"
              sx={{
                margin: "10px",
                color: "white",
                bgcolor: "#006DFF40",
                ":hover": {
                  bgcolor: "#009DFF40",
                  color: "white",
                },
              }}
            >
              Azure
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Skills;
