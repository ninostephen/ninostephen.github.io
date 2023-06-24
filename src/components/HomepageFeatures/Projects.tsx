import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const projects = [
    {
        description: "A Homelabbing Expedition Into The Hidden World Of Machines (project.novlandia.xyz)",
        projectName: "Project Novlandia",
        stack: "Stack: Linux, OSS and everything nice :) ",
        desc: {
            1: "Project Novlandia is a homelabbing initiative in the fictional Republic of Novlandia, focused on improving citizens' lives by establishing a range of essential services.From efficient healthcare systems to advanced education platforms, the project aims to empower Novlandian citizens with accessible and transformative solutions tailored to their needs",
            2: "Transformed the online experience for citizens by implementing PiHole and Internal DNS, resulting in a remarkable reduction in intrusive ads and trackers, while also significantly accelerating website loading times, establishing a secure and privacy-focused browsing environment.",
            3: "Optimized government web services by orchestrating the deployment of a Highly Available Web Server and Galera Cluster using LXC/LXD , resulting in a remarkable reduction in response times, increased stability, and enhanced reliability, ensuring citizens seamless access to essential online services.",
            4: "Revolutionized government communication by developing lightweight, secure, and user-friendly Government Sites using Docusaurus 2, resulting in an increase in citizens' ease of navigation, information accessibility, and overall transparency.",
        },
    },
    {
        description: "A Word Mutation CLI Tool Written in Go (github.com/ninostephen/munge)",
        projectName: "Munge",
        stack: "Stack: Golang, Viper & Cobra and a couple of days of smacking my head on the table trying to fix a concurrency issue.",
        desc: {
            1: "Designed to mutate words, offering users the ability to generate variations and permutations based on specified mutation levels. It provides an efficient and customizable approach to word manipulation tasks.",
            2: "Empowers users to effortlessly input words or word lists, apply customizable mutation levels, and effortlessly generate output to the terminal or a file, exponentially increasing the efficiency of the security assessment.",
            3: "Accelerated password cracking and dictionary-based attacks during security assessments by facilitating the creation of diverse and realistic word lists, resulting in significantly improved attack success rates.",
        },
    },
    {
        description: "CLI Tool Enabling Cloudflare DNS as a DDNS Service (github.com/ninostephen/cf-ddns)",
        projectName: "CF-DDNS",
        stack: "Stack: Golang, Viper & Cobra and me questioning my sanity for rewriting a 20 line bash script into this monstrosity",
        desc: {
            1: "cf-ddns is a CLI tool built using Go, empowering users to easily manage and update their Cloudflare DNS entries for seamless personal DDNS setup.",
            2: "Simplified Dynamic DNS (DDNS) Setup: Streamlined the process of setting up a personal DDNS service by automatically updating the DNS (A) record of a subdomain, allowing users to access their home network's services without the need for a fixed IP address.",
            3: "Beneficial for security testers and homelabbing enthusiasts: Provides flexible access to self-hosted services, enhancing testing capabilities and enabling seamless management of personalized homelab setups in internal networks.",
        },
    },
    {
        description: "A JWT Testing CLI Tool (github.com/ninostephen/jwttool [private repository, under development])",
        projectName: "Jwttool",
        stack: "Stack: Golang, Viper & Cobra",
        desc: {
            1: "Developed jwttool as a powerful CLI tool using Go for enabling security testers and bug bounty hunters to efficiently identify and mitigate JSON Web Token- related vulnerabilities.",
            2: "Automated the identification of JWT security vulnerabilities by automating key aspects of the testing process, resulting in a reduction in time required for vulnerability assessment and enabling security professionals to swiftly pinpoint potential weaknesses in authentication systems.",
            3: "Empowered security testers and bug bounty hunters with a comprehensive feature set and tailored functionalities, resulting in increased effectiveness and productivity of security assessments.",
        },
    },
];
function Projects() {
    const [value, setValue] = useState(0);
    const { description, projectName, stack, desc } = projects[value];

    return (
        <section className="projects">
            <h2 className="experience-title">
                Projects
            </h2>
            <div className="underline"></div>
            <div className="experiences-center">
                <div className="btn-container">
                    {projects.map((item, index) => {
                        return (
                            <button
                                key={index}
                                onClick={() => setValue(index)}
                                className={`experience-btn ${index === value && "active-btn"}`}
                            >
                                {item.projectName}
                            </button>
                        );
                    })}
                </div>
                <article className="experience-info">
                    <h3>{projectName}</h3>
                    <h4>{description}</h4>
                    <p className="experience-date">{stack}</p>
                    {Object.keys(desc).map((key, index) => {
                        return (
                            <div key={index} className="experience-desc">
                                <FontAwesomeIcon
                                    icon={faAngleDoubleRight}
                                    className="experience-icon"
                                ></FontAwesomeIcon>
                                <p>{desc[key]}</p>
                            </div>
                        );
                    })}
                </article>
            </div>
        </section>
    );
}

export default Projects;
