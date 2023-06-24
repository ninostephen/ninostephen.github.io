import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import successStories from './successStories';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

function Testimonial({ url, department, rank, content, avatar, domain }) {
  return (
    <div className={clsx('card', styles.testimonial)}>
      <div className="card__header">
        <div className="avatar">
          <img alt={rank} className="avatar__photo" src={avatar} />
          <div className="avatar__intro">
            <div className={styles.testimonial}>
              <strong>{rank}</strong>{' '}
              <span className={styles.testimonialMeta}>
                @{department} &middot;{' '}
                <a className={styles.testimonialMeta} href={url} rel="noopener">
                  {domain}
                </a>
              </span>
            </div>
            <div className={styles.redacted}>{content}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const columns = divideTestimonialInColumns(successStories)
function TestimonialSection() {
  return (
    <div className={clsx('padding-vert--xl', styles.sectionAlt)}>
      <div className="container">
        <h2
          className={clsx(
            'margin-bottom--lg',
            'text--center',
            styles.sectionTitle,
          )}
        >
          Listen to what the people I have worked with have to say about me! 🥳
        </h2>
        <div className={clsx('row', styles.testimonialsSection)}>
          <div className="col col--4">
            {columns[0].map((testimonial) => (
              <Testimonial
                key={testimonial.key}
                url={testimonial.url}
                department={testimonial.department}
                rank={testimonial.rank}
                domain={testimonial.domain}
                avatar={testimonial.avatar}
                content={testimonial.content}
              />
            ))}
          </div>
          <div className="col col--4">
            {columns[1].map((testimonial) => (
              <Testimonial
                key={testimonial.key}
                url={testimonial.url}
                department={testimonial.department}
                rank={testimonial.rank}
                domain={testimonial.domain}
                avatar={testimonial.avatar}
                content={testimonial.content}
              />
            ))}
          </div>
          <div className="col col--4">
            {columns[2].map((testimonial) => (
              <Testimonial
                key={testimonial.key}
                url={testimonial.url}
                department={testimonial.department}
                rank={testimonial.rank}
                domain={testimonial.domain}
                avatar={testimonial.avatar}
                content={testimonial.content}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="margin-vert--lg text--center smaller">
        <em>* Despite having no prior experience with the aforementioned tasks, I quickly acquired the necessary skills and performed to the best of my ability. <br />
          I simply need an opportunity to showcase my capabilities. <br />
          Give me a chance, and you won't be disappointed!</em>
      </p>
    </div>
  );
}

function divideTestimonialInColumns(testimonials) {
  const columns = [[], [], []]
  testimonials.forEach((testimonial, index) => {
    columns[index % 3].push(testimonial)
  })
  return columns;
}

export { Testimonial, TestimonialSection };