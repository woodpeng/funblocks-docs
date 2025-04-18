import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function ThinkingMattersSection({ page = 'homepage' }) {
  return (
    <section id="thinking-matters" className={clsx(styles.thinkingMattersSection)}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          <Translate id={`${page}.thinking_matters.title`}>
            Your Thinking Matters in the Age of AI
          </Translate>
        </Heading>
        <p className={styles.sectionDescription}>
          <Translate id={`${page}.thinking_matters.description`}>
            In today's fast-paced world filled with AI tools, effective thinking skills are more valuable than ever. 
            FunBlocks empowers you to enhance your cognitive abilities through structured thinking methods and visualization.
          </Translate>
        </p>

        <div className={styles.thinkingGridContainer}>
          <div className={styles.thinkingCard}>
            <div className={styles.cardTitle}>
              <div className={styles.thinkingIcon}>🧭</div>
              <Heading as="h4">
                <Translate id={`${page}.thinking_matters.master.title`}>
                  Master Your Mind
                </Translate>
              </Heading>
            </div>
            <p>
              <Translate id={`${page}.thinking_matters.master.description`}>
                In today's information-rich world, effective thinking methods are essential. FunBlocks AIF helps you cut through noise, gain clarity, and boost efficiency by integrating proven cognitive techniques with intuitive technology.
              </Translate>
            </p>
          </div>

          <div className={styles.thinkingCard}>
            <div className={styles.cardTitle}>
              <div className={styles.thinkingIcon}>🧩</div>
              <Heading as="h4">
                <Translate id={`${page}.thinking_matters.concepts.title`}>
                  Core Thinking Concepts
                </Translate>
              </Heading>
            </div>
            <p>
              <Translate id={`${page}.thinking_matters.concepts.description`}>
                Our platform is built on fundamental thinking methodologies: Brainstorming for idea generation, Mind Mapping for organization, Critical Thinking for analysis, Creative Thinking for innovation, and Mental Models for understanding.
              </Translate>
            </p>
          </div>

          <div className={styles.thinkingCard}>
            <div className={styles.cardTitle}>
              <div className={styles.thinkingIcon}>🌟</div>
              <Heading as="h4">
                <Translate id={`${page}.thinking_matters.empowerment.title`}>
                  AI-Enhanced Thinking
                </Translate>
              </Heading>
            </div>
            <p>
              <Translate id={`${page}.thinking_matters.empowerment.description`}>
                FunBlocks AIFlow enhances your thinking with a unified workspace, visualization tools, AI assistance, and seamless collaboration features—all designed to help you think more deeply and effectively.
              </Translate>
            </p>
          </div>
        </div>

        <div className={styles.learnMoreContainer}>
          <Link
            className={clsx('button', styles.learnMoreButton)}
            to="/thinking-matters/behind-aiflow"
          >
            <Translate id={`${page}.thinking_matters.learn_more`}>
              Learn More About Our Thinking Toolkit
            </Translate>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ThinkingMattersSection; 