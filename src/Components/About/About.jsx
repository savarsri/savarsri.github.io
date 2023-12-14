import styles from "./About.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import Button from "@mui/material/Button";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  background-image: url("/src/assets/bg5.jpg");
  background-size: cover;
  scroll-snap-align: center;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/src/assets/scene.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={0.0413} />
    </>
  );
};

function About() {
  return (
    <Section>
      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.threeModel}>
            <div className={styles.spinMe}>
              Spin Me <RotateRightIcon />
            </div>
            <Canvas
              className={styles.model}
              camera={{ fov: 15, position: [-10, 10, 25] }}
            >
              <Suspense fallback={null}>
                <Model />
                <OrbitControls enableZoom={false} rotateSpeed={0.5} />
                <Environment preset="apartment" />
              </Suspense>
            </Canvas>
          </div>
          <div className={styles.aboutDiv}>
            <div className={styles.aboutText}>About Me</div>
            <hr className={styles.hr} />
            <div className={styles.textDiv}>
              👋 Hello! I'm a pre-final year student pursuing B.Tech in Computer
              Science and Engineering at{" "}
              <b>Symbiosis Institute of Technology, Pune. </b>
              My journey is fueled by a deep passion for learning and a knack
              for problem-solving.
              <br />
              <br />
              💻 As a dedicated learner, I am on a quest to explore and master
              the intricacies of software engineering, backend development, and
              application design.
              <br />
              <br />
              🚀 Currently seeking opportunities to apply and enhance my skills,
              I am eager to contribute to cutting-edge projects and gain
              valuable industry experience. Let's connect and explore the
              exciting realms of technology together!
            </div>
            <div className={styles.socials}>
              <a href="https://www.linkedin.com/in/savarsri" target="_blank">
                <LinkedInIcon
                  sx={{
                    fontSize: "36px",
                    ":hover": {
                      fontSize: "44px",
                    },
                  }}
                />
              </a>
              <a href="https://github.com/savarsri" target="_blank">
                <GitHubIcon
                  sx={{
                    fontSize: "36px",
                    ":hover": {
                      fontSize: "44px",
                    },
                  }}
                />
              </a>
              <a href="mailto:savarsri@gmail.com">
                <EmailIcon
                  sx={{
                    fontSize: "36px",
                    ":hover": {
                      fontSize: "44px",
                    },
                  }}
                />
              </a>
            </div>
            <hr className={styles.hr} />
            <a href="/src/assets/Savar's Resume.pdf" download>
              <Button variant="outlined" endIcon={<PictureAsPdfIcon />}>
                Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
