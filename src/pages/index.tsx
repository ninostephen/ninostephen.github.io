import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useTrail, animated, useSpring } from "react-spring";
import { Typography, Grid, Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { TestimonialSection } from '@site/src/components/HomepageFeatures';
import Experience from "../components/HomepageFeatures/Experience";
import Projects from "../components/HomepageFeatures/Projects";


import styles from './index.module.css';

// function HomepageHeader() {
export default function Home(): JSX.Element {
  const context = useDocusaurusContext();
  const { siteConfig } = useDocusaurusContext();

  const animatedHero = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(8em)" },
    config: { mass: 2, tension: 260, friction: 30 },
    delay: 600,
  });
  const animatedTexts = useTrail(5, {
    from: { opacity: 0, transform: "translateY(3em)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: {
      mass: 3,
      friction: 45,
      tension: 460,
    },
    delay: 200,
  });

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Weird Machines are cool! <head />"
    >
      <Grid container style={{ padding: "5%" }} className="hero">
        {/*Personal Intro */}
        <Grid item xs={12} lg={6} className="homeIntro">
          <animated.div style={animatedTexts[0]}>
            <Typography variant="h2" gutterBottom>
              Hello! I am
              <span className="intro__name"> {siteConfig.title}</span>
              {/* <Typography variant="body2">
                <span>{siteConfig.tagline}</span>
              </Typography> */}
            </Typography>
          </animated.div>
          <animated.div style={animatedTexts[1]}>
            <Typography variant="body1">

              <strong>I empower millions through Code, Linux, and Security Expertise!</strong>
              <br />
              <br />
              Greetings! I'm an aspiring technologist on a mission to revolutionize lives at scale.
              <br />
              <br />

              Join me on this electrifying journey as we reimagine what's possible.
              <br />
              <br />

              Are you ready to make a profound impact? Let's dive in!
              {" "}
            </Typography>
          </animated.div>
          &nbsp;
          <animated.div style={animatedTexts[2]}>
            <Typography variant="h6" gutterBottom>
              My Skills:
            </Typography>
            <Typography variant="body1" gutterBottom>
              Golang, Linux, Docker, Kubernetes, Homelabbing and More!
            </Typography>
          </animated.div>
          &nbsp;
          {/* <animated.p style={animatedTexts[3]}>
            <Button
              style={{ textTransform: "none" }}
              color="primary"
              variant="outlined"
              size="small"
              href={resume}
            >
              My Resume
            </Button>
          </animated.p> */}
          <SocialLinks animatedProps={animatedTexts[4]} />
        </Grid>

        <Grid item xs={12} lg={6} className="homeImg">
          <animated.img
            src={useBaseUrl('img/logos/png/hacker.png')}
            style={animatedHero}
          />
        </Grid>
      </Grid>
      {/* Experiences section */}
      <Grid>
        <Experience />
      </Grid>
      {/* Projects section */}
      <Grid>
        <Projects />
      </Grid>
      {/* <TestimonialSection /> */}
      {/* <Grid> */}
      {/* <Contact /> */}
      {/* </Grid> */}
    </Layout>

  );
}

function SocialLinks({ animatedProps, ...props }) {
  return (
    <animated.div className="social__links" style={animatedProps}>
      <Grid container spacing={2}>
        <Grid item>
          <Typography display={"inline"} gutterBottom>
            Social Media:
          </Typography>
        </Grid>
        <Grid item>
          <a href="https://www.linkedin.com/in/ninostephen/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </Grid>
        <Grid item>
          <a href="https://github.com/ninostephen">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </Grid>
      </Grid>
    </animated.div>
  );
}


// export default function Home(): JSX.Element {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={`Temp`}
//       description="</head>">
//       <HomepageHeader />
//       <main>
//         {/* <HomepageFeatures /> */}
//         <TestimonialSection /> 
//       </main>
//     </Layout>
//   );
// }
