import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const experience = [
    {
        company: "EY GDS India LLP",
        position: "Security Consultant 3",
        date: "October 2022 - Present ",
        desc: {
            1: "Managed end-to-end Dynamic Application Security Testing (DAST) for client production applications.",
            2: "Developed automation scripts, reducing weekly repetitive and error-prone work.",
            3: "Streamlined data collection, transformation, and presentation for the Executive Board by developing numerous interactive Power BI report.",
        },
    },
    {
        company: "EY GDS India LLP",
        position: "Security Analyst 2",
        date: "February 2022 - September 2022 ",
        desc: {
            1: "Performed penetration testing on client web applications.",
            2: "Improved team vulnerability identification through thorough postmortem reports. Enriched remediation effectiveness and efficiency.",
            3: "Got promoted again in 6 months!",
        },
    },
    {
        company: "EY GDS India LLP",
        position: "Security Analyst 1",
        date: "November 2020 - January 2022 ",
        desc: {
            1: "Improved VM patch prioritization of client applications by developing custom reports.",
            2: "Identified, prioritized, reported and communicated security vulnerabilities to the IT teams responsible for remediation.",
        },
    },
    {
        company: "Bobcares",
        position: "Server Administrator",
        date: "Nov 2019 - Nov 2020 ",
        desc: {
            1: "Completed over 50 server and service setups for customers ensuring timely delivery within allocated resources.",
            2: "Implemented effective incident response procedures and successfully mitigated account and website compromises,",
            3: "Managed backup and recovery operations, guaranteeing zero data loss and minimal downtime during recovery;",
            4: "Orchestrated seamless server and service migrations, meeting client requirements on time and within budget. Successfully migrated more than 20 servers and 100 websites with minimal disruption; Was put in charge of performing all migrations requests.",
            5: "Identified and resolved reported issues, resulting in a significant decrease in incident recurrence rates.",
            6: "Strengthened overall infrastructure efficiency and stability through various server administration tasks. Increased system uptime by implementing active maintenance, patch management, and security checks, significantly reducing vulnerabilities and improving system performance.",
        },
    },
];
function Experience() {
    const [value, setValue] = useState(0);
    const { company, position, date, desc } = experience[value];

    return (
        <section className="experience">
            <h2 className="experience-title">
                Experience
            </h2>
            <div className="underline"></div>
            <div className="experiences-center">
                <div className="btn-container">
                    {experience.map((item, index) => {
                        return (
                            <button
                                key={index}
                                onClick={() => setValue(index)}
                                className={`experience-btn ${index === value && "active-btn"}`}
                            >
                                {item.position}
                            </button>
                        );
                    })}
                </div>
                <article className="experience-info">
                    <h3>{position}</h3>
                    <h4>{company}</h4>
                    <p className="experience-date">{date}</p>
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

export default Experience;
