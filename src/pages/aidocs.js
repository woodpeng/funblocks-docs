import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import Footer from '../components/Footer';
import FAQSection from '../components/FAQSection';
import { useMediaQuery } from 'react-responsive';
import ImageModal from '../components/ImageModal';
import GoogleAccountAnalytics from '../components/GoogleAccountAnalytics';
import TestimonialsSection from '../components/TestimonialsSection';
import IntroSection from '../components/IntroSection';
import CTASection from '../components/CTASection';

function AiDocsHeader({ toApp }) {
  return (
    <section className={clsx(styles.hero, styles.pageSection)} style={{ backgroundColor: '#f0f7ff' }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Heading as="h1" className={styles.slidesTitle}>
          <Translate id="aidocs.masthead.title">Write Smarter, Think Deeper</Translate>
        </Heading>
        <h2 className={styles.slidesSubtitle}>
          <Translate id="aidocs.masthead.subtitle">Elevate your writing with AI-powered document editor and critical thinking assistance</Translate>
        </h2>
        <div className={styles.heroButtons}>
          <Link
            className={clsx('button', styles.btn)}
            to="#"
            onClick={() => toApp()}
          >
            <Translate id="aidocs.masthead.cta">Try for Free</Translate>
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection({ setShowImageSrc }) {
  const features = [
    {
      name: "aidocs.features.item1.name",
      description: "aidocs.features.item1.description",
      image: "/img/portfolio/thumbnails/ai_writer_block_editor.png",
      alt: "Block-based document editor similar to Notion"
    },
    {
      name: "aidocs.features.item2.name",
      description: "aidocs.features.item2.description",
      image: "/img/portfolio/thumbnails/ai_writer_editing_assistant.png",
      alt: "AI writing assistant for content creation"
    },
    {
      name: "aidocs.features.item3.name",
      description: "aidocs.features.item3.description",
      image: "/img/portfolio/thumbnails/ai_writer_infographic_assistant.png",
      alt: "Critical thinking enhancement features"
    },
    {
      name: "aidocs.features.item4.name",
      description: "aidocs.features.item4.description",
      image: "/img/portfolio/thumbnails/ai_writer_critical_thinking_assistant.png",
      alt: "Document organization and linking capabilities"
    },
    {
      name: "aidocs.features.item5.name",
      description: "aidocs.features.item5.description",
      image: "/img/portfolio/thumbnails/ai_writer_workspace.png",
      alt: "Document organization and linking capabilities"
    }
  ];

  return (
    <section id="features" className={styles.slidesFeatureSection}>
      <div className={styles.slidesContainer}>
        <Heading as="h2" className={styles.sectionTitle}>
          <Translate id="aidocs.features.title">Key Features</Translate>
        </Heading>
        <div>
          {features.map((feature, index) => (
            <div key={index} className={styles.slidesRow}>
              <div className={clsx(styles.slidesCol8, { [styles.order2]: index % 2 === 0 })}>
                <img
                  className={styles.docsFeatureImage}
                  src={feature.image}
                  alt={feature.alt}
                  onClick={() => setShowImageSrc(feature.image.replace('thumbnails', 'fullsize'))}
                />
              </div>
              <div className={clsx(styles.slidesCol4, { [styles.order1]: index % 2 === 0 })}
                style={{
                  justifyContent: 'center',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Heading as="h3" className={styles.cardTitle}>
                  <Translate id={feature.name}>{feature.name}</Translate>
                </Heading>
                <p>
                  <Translate id={feature.description}>{feature.description}</Translate>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AIAssistantSection({ setShowImageSrc }) {
  return (
    <section id="ai-assistant" className={styles.featureSection} style={{ backgroundColor: 'aliceblue' }}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          <Translate id="aidocs.ai-assistant.title">
            AI Writing Assistant: Your Thinking Partner
          </Translate>
        </Heading>
        <p className={styles.sectionDescription}>
          <Translate id="aidocs.ai-assistant.subtitle">
            More than just a writing tool - an AI that enhances your critical thinking
          </Translate>
        </p>

        <div className={styles.featureGrid}>
          <div className={styles.featureContent} style={{
            flex: 2,
          }}>
            <Heading as="h3">
              <Translate id="aidocs.ai-assistant.critical-thinking.title">Enhance Critical Thinking</Translate>
            </Heading>
            <p>
              <Translate id="aidocs.ai-assistant.critical-thinking.description">
                FunBlocks AI Docs goes beyond grammar fixes and style improvements to help you think more clearly and write more persuasively.
              </Translate>
            </p>
            <ul className={styles.featureList}>
              <li>
                <Translate id="aidocs.ai-assistant.critical-thinking.point1">
                  Identify cognitive biases in your writing
                </Translate>
              </li>
              <li>
                <Translate id="aidocs.ai-assistant.critical-thinking.point2">
                  Highlight logical fallacies and suggest improvements
                </Translate>
              </li>
              <li>
                <Translate id="aidocs.ai-assistant.critical-thinking.point3">
                  Strengthen arguments by addressing counterpoints
                </Translate>
              </li>
              <li>
                <Translate id="aidocs.ai-assistant.critical-thinking.point4">
                  Analyze the clarity and coherence of your reasoning
                </Translate>
              </li>
            </ul>
          </div>

          <div style={{ cursor: 'pointer', flex: 3 }}>
            <img
              className={styles.docsFeatureImage}
              onClick={() => setShowImageSrc("/img/portfolio/fullsize/ai_writer_critical_thinking_assistant.png")}
              id="aidocs-critical-thinking"
              alt="AI-powered critical thinking enhancement features"
              src="/img/portfolio/thumbnails/ai_writer_critical_thinking_assistant.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function WritingAssistantSection({ setShowImageSrc }) {
  return (
    <section id="writing-assistant" className={styles.featureSection}>
      <div className="container">
        <div className={styles.featureGrid}>
          <div style={{ cursor: 'pointer', flex: 3 }}>
            <img
              className={styles.docsFeatureImage}
              onClick={() => setShowImageSrc("/img/portfolio/fullsize/ai_writer_editing_assistant.png")}
              id="aidocs-writing-assistant"
              alt="AI-powered writing assistance features"
              src="/img/portfolio/thumbnails/ai_writer_editing_assistant.png"
            />
          </div>
          
          <div className={styles.featureContent} style={{
            flex: 2
          }}>
            <Heading as="h3">
              <Translate id="aidocs.writing-assistant.title">Smart Writing Tools</Translate>
            </Heading>
            <p>
              <Translate id="aidocs.writing-assistant.description">
                Create high-quality content efficiently with powerful AI-powered writing tools.
              </Translate>
            </p>
            <ul className={styles.featureList}>
              <li>
                <Translate id="aidocs.writing-assistant.point1">
                  Generate complete documents from a simple topic or outline
                </Translate>
              </li>
              <li>
                <Translate id="aidocs.writing-assistant.point2">
                  Rewrite and refine selected text with targeted instructions
                </Translate>
              </li>
              <li>
                <Translate id="aidocs.writing-assistant.point3">
                  Intelligent continuation suggestions based on your writing style
                </Translate>
              </li>
              <li>
                <Translate id="aidocs.writing-assistant.point4">
                  Grammar and style correction with detailed explanations
                </Translate>
              </li>
              <li>
                <Translate id="aidocs.writing-assistant.point5">
                  Grammar and style correction with detailed explanations
                </Translate>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function EcosystemIntegrationSection({ setShowImageSrc }) {
  return (
    <section id="ecosystem-integration" className={styles.featureSection} style={{ backgroundColor: 'cornsilk' }}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          <Translate id="aidocs.ecosystem.title">
            Seamless FunBlocks Ecosystem Integration
          </Translate>
        </Heading>
        <p className={styles.sectionDescription}>
          <Translate id="aidocs.ecosystem.subtitle">
            Part of a powerful AI workspace that enhances your entire workflow
          </Translate>
        </p>

        <div className={styles.featureGrid}>
          <div className={styles.featureContent} style={{
            flex: 2,
          }}>
            <Heading as="h3">
              <Translate id="aidocs.ecosystem.workflow.title">Complete Workflow Integration</Translate>
            </Heading>
            <ul className={styles.featureList}>
              <li>
                <Translate id="aidocs.ecosystem.workflow.point1">
                  Convert AIFlow mind maps directly into structured documents with one click
                </Translate>
              </li>
              <li>
                <Translate id="aidocs.ecosystem.workflow.point2">
                  Transform any document into professional slides for presentations
                </Translate>
              </li>
              <li>
                <Translate id="aidocs.ecosystem.workflow.point3">
                  Turn document content into visual mind maps for deeper exploration
                </Translate>
              </li>
              <li>
                <Translate id="aidocs.ecosystem.workflow.point4">
                  Create a comprehensive workspace by linking documents, mind maps and presentations
                </Translate>
              </li>
              <li>
                <Translate id="aidocs.ecosystem.workflow.point5">
                  Create a comprehensive workspace by linking documents, mind maps and presentations
                </Translate>
              </li>
            </ul>
          </div>

          <div style={{ cursor: 'pointer', flex: 3 }}>
            <img
              className={styles.featureImage}
              onClick={() => setShowImageSrc("/img/portfolio/fullsize/ai_workspace.png")}
              id="aidocs-ecosystem"
              alt="FunBlocks ecosystem integration features"
              src="/img/portfolio/thumbnails/ai_workspace.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  const useCases = [
    {
      icon: '📚',
      titleId: 'aidocs.use-cases.case1.title',
      descriptionId: 'aidocs.use-cases.case1.description',
    },
    {
      icon: '📝',
      titleId: 'aidocs.use-cases.case2.title',
      descriptionId: 'aidocs.use-cases.case2.description',
    },
    {
      icon: '🎓',
      titleId: 'aidocs.use-cases.case3.title',
      descriptionId: 'aidocs.use-cases.case3.description',
    },
    {
      icon: '💼',
      titleId: 'aidocs.use-cases.case4.title',
      descriptionId: 'aidocs.use-cases.case4.description',
    },
    {
      icon: '📊',
      titleId: 'aidocs.use-cases.case5.title',
      descriptionId: 'aidocs.use-cases.case5.description',
    },
    {
      icon: '💡',
      titleId: 'aidocs.use-cases.case6.title',
      descriptionId: 'aidocs.use-cases.case6.description',
    },
  ];

  return (
    <section id="use-cases" className={styles.useCases}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          <Translate id="aidocs.use-cases.title">Use Cases</Translate>
        </Heading>
        <p className={styles.sectionDescription}>
          <Translate id="aidocs.use-cases.description">FunBlocks AI Docs adapts to diverse content creation scenarios, enhancing both productivity and quality</Translate>
        </p>

        <div className={styles.twoColumnGrid}>
          {useCases.map((useCase, index) => (
            <div key={index} className={styles.useCaseCard}>
              <div className={styles.cardTitle}>
                <div className={styles.useCaseIcon}>{useCase.icon}</div>
                <span>
                  <Translate id={useCase.titleId}>Case Title</Translate>
                </span>
              </div>
              <p>
                <Translate id={useCase.descriptionId}>Case description</Translate>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AIDocs() {
  const { siteConfig, i18n } = useDocusaurusContext();
  const [showImageSrc, setShowImageSrc] = useState(null);

  function getDomain() {
    if (!window.location.hostname.includes('funblocks')) {
      return 'funblocks.net';
    }
    return window.location.hostname.replace('www.', '');
  }

  function openUrl(url) {
    let newTab = window.open();
    newTab.location.href = url;
  }

  function toApp() {
    let url = `https://app.${getDomain()}/#/login?source=aidocs`;
    openUrl(url);
  }

  const testimonials_avatars = ["👩‍🎓", "👨‍💼", "👩‍💻", "👨‍🎓", "👩‍🏫", "👨‍🏫"];

  return (
    <Layout
      title={translate({
        id: 'aidocs.head.title',
        message: 'FunBlocks AI Docs: AI-powered Block Editor & Critical Thinking Assistant'
      })}
      description={translate({
        id: 'aidocs.head.description',
        message: 'FunBlocks AI Docs combines Notion-like editing with AI assistance to enhance your writing, critical thinking, and productivity. Create better content faster.'
      })}
    >
      <AiDocsHeader toApp={toApp} />
      <main>
        <IntroSection
          page="aidocs"
          feature={'intro'}
          pointNos={[1, 2, 3, 4, 5]}
          style={{backgroundColor: 'lightcyan'}}
          imageElement={<div style={{ flex: 4, cursor: 'pointer' }}>
            <img
              className={styles.featureImage}
              src="/img/portfolio/thumbnails/ai_writer_editor.png"
              alt="FunBlocks AI Docs: Notion-style block editor with AI assistant"
              onClick={() => setShowImageSrc("/img/portfolio/fullsize/ai_writer_editor.png")}
            />
          </div>} 
        />
        <FeaturesSection setShowImageSrc={setShowImageSrc} />
        <AIAssistantSection setShowImageSrc={setShowImageSrc} />
        <WritingAssistantSection setShowImageSrc={setShowImageSrc} />
        <EcosystemIntegrationSection setShowImageSrc={setShowImageSrc} />
        {/* <OrganizationSection setShowImageSrc={setShowImageSrc} /> */}
        <IntroSection
          page="aidocs"
          feature={'organization'}
          pointNos={[1, 2, 3, 4]}
          style={{backgroundColor: 'lavender'}}
          imageElement={<div style={{ flex: 4, cursor: 'pointer' }}>
            <img
              className={styles.docsFeatureImage}
              src="/img/portfolio/thumbnails/ai_writer_workspace.png"
              alt="FunBlocks AI Docs: Notion-style block editor with AI assistant"
              onClick={() => setShowImageSrc("/img/portfolio/fullsize/ai_writer_workspace.png")}
            />
          </div>} 
        />
        <UseCasesSection />
        <TestimonialsSection avatars={testimonials_avatars} page={'aidocs'} />
        <CTASection toApp={toApp} page={'aidocs'} />
        <FAQSection
          page={'aidocs'}
          faqIds={[
            'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8',
            'q9', 'q10', 'q11', 'q12'
          ]}
        />
      </main>
      <Footer />

      {showImageSrc && <ImageModal imageSrc={showImageSrc} setImageSrc={setShowImageSrc} />}
      <GoogleAccountAnalytics page={'aidocs'} />
    </Layout>
  );
} 