import React, { useMemo, useState } from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import styles from './index.module.css';

import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

function TestimonialsSection({ page, avatars }) {
  const testimonials = useMemo(() => avatars.map((avatar, index) => {
    return {
      avatar,
      nameId: `${page}.testimonials.user${index + 1}.name`,
      roleId: `${page}.testimonials.user${index + 1}.role`,
      textId: `${page}.testimonials.user${index + 1}.text`
    }
  }), [page, avatars]);

  return (
    <section id="testimonials" className={styles.testimonialsSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          <Translate id="homepage.testimonials.title">What Our Users Say</Translate>
        </Heading>
        <p className={styles.sectionDescription}>
          <Translate id="homepage.testimonials.description">
            Discover how FunBlocks AI is transforming the way professionals, students,
            and teams work, learn, and create.
          </Translate>
        </p>

        <div className={styles.benefitsContainer}>
          {testimonials?.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.testimonialHeader}>
                <div className={styles.testimonialAvatar}>
                  <span>{testimonial.avatar}</span>
                </div>
                <div className={styles.testimonialInfo}>
                  <h4><Translate id={testimonial.nameId}>{testimonial.nameId}</Translate></h4>
                  <p><Translate id={testimonial.roleId}>{testimonial.roleId}</Translate></p>
                </div>
              </div>
              <p>
                <Translate id={testimonial.textId}>{testimonial.textId}</Translate>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

  export default TestimonialsSection