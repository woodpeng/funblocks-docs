import React, { useMemo, useState } from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import styles from './index.module.css';
import { useMediaQuery } from 'react-responsive';
import Heading from '@theme/Heading';

function IntroSection({ page, feature, pointNos, imageElement, imageToRight, style }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const points = useMemo(() => pointNos.map(i => ({
    title: `${page}.${feature}.point${i}.name`,
    description: `${page}.${feature}.point${i}.description`,
  })), [page, feature, pointNos])

  return (
      <section className={styles.featureSection} style={style}>
          <div className="container">
              <Heading as="h2" className={styles.sectionTitle}>
                  <Translate id={`${page}.${feature}.title`}>Beyond ChatGPT</Translate>
              </Heading>

              <p className={styles.sectionDescription}>
                  <Translate id={`${page}.${feature}.description`}>Discover innovative ways to engage with AI beyond text. Visualize your thoughts and AI outputs in formats that enhance your cognitive process.</Translate>
              </p>

              <div className={styles.featureGrid} style={{
                  display: isMobile ? undefined : 'flex',
                  flexDirection: imageToRight ? 'row-reverse' : 'row'
              }}>
                  {imageElement}
                  <div className={styles.featureContent} style={{ flex: 2 }}>
                      {points.map((point, index) => (
                          <div key={index} className={styles.benefitItem}>
                              {/* <div className={styles.benefitIcon}>{point.icon}</div> */}
                              <div>
                                  <Heading as="h3">
                                      <Translate id={point.title}>{point.title}</Translate>
                                  </Heading>
                                  <p>
                                      <Translate id={point.description}>{point.description}</Translate>
                                  </p>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </section>
  );
}

export default IntroSection;