import styles from "./Home.module.css";
import React from "react";
import Typed from "typed.js";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  background-image: url("/images/bg2.jpg");
  background-size: cover;
  scroll-snap-align: center;
`;

function Home() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Software Developer", "Web Developer", "Backend Engineer"],
      typeSpeed: 150,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Section>
      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.textDiv}>
            Hi There,
            <br /> I'm <b>Savar Srivastava </b>
            <br />
            <br />
            <div className={styles.autoType}>
              I'm a <span ref={el} />
            </div>
            <div className={styles.buttonDiv}>
              <a href="#about">
                <Button variant="outlined" startIcon={<PersonIcon />}>
                  About Me
                </Button>
              </a>
            </div>
          </div>
          <div className={styles.pic}>
            <img src="/images/blob.png" alt="" />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Home;
