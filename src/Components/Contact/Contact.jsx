import EmailIcon from "@mui/icons-material/Email";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import styles from "./Contact.module.css";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  background-image: url("/images/bg1.jpg");
  background-size: cover;
  scroll-snap-align: center;
`;

function Contact() {
  return (
    <Section>
      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.textDiv}>
            Contact Me
            <br />
            <p>I'd Love To Connect With You.</p>
          </div>
          <div className={styles.connectItem}>
            <div className={styles.linkedin}>
              <LinkedInIcon sx={{ fontSize: 80 }} />
              <br />
              Let's Connect!
              <br />
              <a href="https://www.linkedin.com/in/savarsri" target="_blank">
                Profile
              </a>
            </div>
            <div className={styles.hr} />
            <div className={styles.email}>
              <EmailOutlinedIcon sx={{ fontSize: 80 }} />
              <br />
              <div className={styles.emailMeAtDiv}>Email me at</div>
              <a href="mailto:savarsri@gmail.com">savarsri@gmail.com</a>
              <br />
              <a href="mailto:savar.srivastava.btech2021@sitpune.edu.in">
                savar.srivastava.btech2021
                <br />
                @sitpune.edu.in
              </a>
            </div>
            <div className={styles.hr} />
            <div className={styles.location}>
              <LocationOnOutlinedIcon sx={{ fontSize: 80 }} />
              <div className={styles.locationText}>Find me at</div>
              <div className={styles.locationValue}>
                Pune, Maharashtra,
                <br /> India
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
