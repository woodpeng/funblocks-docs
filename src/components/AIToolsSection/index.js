import React, { useState } from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import styles from './index.module.css';

import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

function AIToolsSection() {
    return (
      <section id="tools" className={styles.toolsSection}>
        <div className="container">
          <Heading as="h2" className={styles.sectionTitle} style={{ marginBottom: '1rem' }}>
            <Translate id="homepage.tools.title">Quick Access AI Tools</Translate>
          </Heading>
          <p className={styles.sectionDescription}>
            <Translate id="homepage.tools.description">
              FunBlocks AIFlow is a comprehensive creativity and productivity platform with
              specialized tools designed for specific cognitive challenges.
            </Translate>
          </p>
  
          <img
            id="aitools"
            alt="FunBlocks AI Tools"
            className={styles.fullWidthImage}
            src="/img/portfolio/fullsize/ai_tools.png"
          />
  
          <div className={styles.toolsList}>
            <div className={styles.toolItem}>
              <div className={styles.toolTitle}>
                <span><Translate id="homepage.tools.tool1.title">AI Mind Map Generator</Translate></span>
              </div>
              <p className={styles.toolDescription}>
                <Translate id="homepage.tools.tool1.description">
                  Easily convert documents, books, and movies into mind maps to help
                  you clarify complex ideas quickly.
                </Translate>
              </p>
            </div>
  
            <div className={styles.toolItem}>
              <div className={styles.toolTitle}>
                <span><Translate id="homepage.tools.tool2.title">AI Brainstorming</Translate></span>
              </div>
              <p className={styles.toolDescription}>
                <Translate id="homepage.tools.tool2.description">
                  Combine AI with classic thinking models to brainstorm on specific topics
                  or problems, sparking creativity and innovative solutions.
                </Translate>
              </p>
            </div>
  
            <div className={styles.toolItem}>
              <div className={styles.toolTitle}>
                <span><Translate id="homepage.tools.tool3.title">AI Critical Thinking</Translate></span>
              </div>
              <p className={styles.toolDescription}>
                <Translate id="homepage.tools.tool3.description">
                  Enhance your critical thinking skills, gaining insights from multiple
                  perspectives through questioning, analysis, and reflection.
                </Translate>
              </p>
            </div>
  
            <div className={styles.toolItem}>
              <div className={styles.toolTitle}>
                <span><Translate id="homepage.tools.tool4.title">AI Slides Generator</Translate></span>
              </div>
              <p className={styles.toolDescription}>
                <Translate id="homepage.tools.tool4.description">
                  Quickly create professional slides and presentations on any topic,
                  making it easy to prepare for your presentations.
                </Translate>
              </p>
            </div>
  
            <div className={styles.toolItem}>
              <div className={styles.toolTitle}>
                <span><Translate id="homepage.tools.tool5.title">AI Infographics Generator</Translate></span>
              </div>
              <p className={styles.toolDescription}>
                <Translate id="homepage.tools.tool5.description">
                  Automatically generate infographics and knowledge cards from input text,
                  helping you convey information visually.
                </Translate>
              </p>
            </div>
  
            <div className={styles.toolItem}>
              <div className={styles.toolTitle}>
                <span><Translate id="homepage.tools.tool6.title">AI Art Insight</Translate></span>
              </div>
              <p className={styles.toolDescription}>
                <Translate id="homepage.tools.tool6.description">
                  Gain deeper artistic analysis and appreciation by taking photos during
                  your travels and museum visits.
                </Translate>
              </p>
            </div>
  
            <div className={styles.toolItem}>
              <div className={styles.toolTitle}>
                <span><Translate id="homepage.tools.tool7.title">AI Education Tool</Translate></span>
              </div>
              <p className={styles.toolDescription}>
                <Translate id="homepage.tools.tool7.description">
                  Break down topics into progressive cognitive levels based on Bloom's
                  educational theories to enhance learning efficiency and teaching effectiveness.
                </Translate>
              </p>
            </div>
  
            <div className={styles.toolItem}>
              <div className={styles.toolTitle}>
                <span><Translate id="homepage.tools.tool8.title">AI Psychological Insights</Translate></span>
              </div>
              <p className={styles.toolDescription}>
                <Translate id="homepage.tools.tool8.description">
                  Receive psychological counseling and dream interpretation services anytime,
                  helping you better understand your inner world.
                </Translate>
              </p>
            </div>
  
            <div className={styles.toolItem}>
              <div className={styles.toolTitle}>
                <span><Translate id="homepage.tools.tool9.title">AI Image Generator</Translate></span>
              </div>
              <p className={styles.toolDescription}>
                <Translate id="homepage.tools.tool9.description">
                  Generate personalized avatars and images in your desired style with a single click.
                </Translate>
              </p>
            </div>
          </div>
  
          <div className={styles.ctaButtons}>
            <Link
              className={clsx('button', styles.btnSecondary, styles.btnSm)}
              to="https://funblocks.net/aitools"
              target="_blank"
            >
              <Translate id="homepage.tools.tools_list">AI Tools</Translate>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  export default AIToolsSection