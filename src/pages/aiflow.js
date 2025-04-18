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
import AIToolsSection from '../components/AIToolsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ImageModal from '../components/ImageModal';
import GoogleAccountAnalytics from '../components/GoogleAccountAnalytics';
import IntroSection from '../components/IntroSection';
import CTASection from '../components/CTASection';
import ThinkingMattersSection from '../components/ThinkingMattersSection';

function AIFlowHeader({ setShowImageSrc, toApp }) {
  return (
    <section id="hero" className={clsx(styles.hero, styles.pageSection)} style={{
      backgroundColor: '#f8f8f8',
      backgroundImage: 'radial-gradient(#ccc 1px, transparent 1px)',
      backgroundSize: '20px 20px',
      padding: '20px'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Heading as="h1">
          <Translate id="aiflow.masthead.title_2">
            Think, Create, and Explore with AI
          </Translate>
        </Heading>
        <p className={styles.heroSubtitle}>
          <Translate id="aiflow.masthead.subtitle">
            Ignite Your Creativity with Whiteboard, Mind Mapping, and Cutting-Edge AI
          </Translate>
        </p>
        <div className={styles.heroButtons}>
          <Link
            className={clsx('button', styles.btn)}
            to="#"
            onClick={() => toApp()}
          >
            <Translate id="aiflow.masthead.cta">Free Trial Now</Translate>
          </Link>
        </div>
        <p style={{ marginTop: '20px', fontStyle: 'italic' }}>
          <Translate id="homepage.thinking_matters.title">Your Thinking Matters in the Age of AI</Translate>
        </p>
      </div>
    </section>
  );
}

function FeaturesSection({ setShowImageSrc }) {
  const features = [
    {
      // icon: '🧩',
      nameId: 'aiflow.features.item1.name',
      descriptionId: 'aiflow.features.item1.description',
      listItems: [
        { id: 'aiflow.features.item1.li1', text: 'Break complex problems into manageable parts' },
        { id: 'aiflow.features.item1.li2', text: 'Rapidly identify key elements and potential challenges' },
        { id: 'aiflow.features.item1.li3', text: 'Simplify the research process through a divide-and-conquer approach' },
      ],
      imageSrc: "/img/portfolio/thumbnails/aiflow_breakdown.png",
      imageAlt: "Illustration of AI-powered problem breakdown process",
    },
    {
      // icon: '💡',
      nameId: 'aiflow.features.item2.name',
      descriptionId: 'aiflow.features.item2.description',
      listItems: [
        { id: 'aiflow.features.item2.li1', text: 'Generate multiple perspectives on any topic' },
        { id: 'aiflow.features.item2.li2', text: 'Discover connections and insights you might have missed' },
        { id: 'aiflow.features.item2.li3', text: 'Let AI suggest unexpected angles and approaches' },
        { id: 'aiflow.features.item2.li4', text: 'Let AI suggest unexpected angles and approaches' },
      ],
      imageSrc: "/img/portfolio/thumbnails/aiflow_expansion.png",
      imageAlt: "Visualization of AI-assisted thought expansion and idea generation",
    },
    {
      nameId: 'aiflow.features.item3.name',
      descriptionId: 'aiflow.features.item3.description',
      listItems: [
        { id: 'aiflow.features.item3.li1', text: 'Image: AI analysis of visuals, from art to whiteboards' },
        { id: 'aiflow.features.item3.li2', text: 'Note: Quick idea capture with AI-powered expansion' },
        { id: 'aiflow.features.item3.li3', text: 'Task list: AI-enhanced task management and prioritization' },
      ],
      imageSrc: "/img/portfolio/thumbnails/aiflow_optimize_prompt.png",
      imageAlt: "Showcase of diverse content types supported by AI assistants",
    },

    {
      nameId: 'aiflow.features.item4.name',
      descriptionId: 'aiflow.features.item4.description',
      listItems: [
        { id: 'aiflow.features.item4.li1', text: 'Image: AI analysis of visuals, from art to whiteboards' },
        { id: 'aiflow.features.item4.li2', text: 'Note: Quick idea capture with AI-powered expansion' },
        { id: 'aiflow.features.item4.li3', text: 'Task list: AI-enhanced task management and prioritization' },
        { id: 'aiflow.features.item4.li4', text: 'Link: Web content integration for research and inspiration' },
      ],
      imageSrc: "/img/portfolio/thumbnails/aiflow_image.png",
      imageAlt: "Showcase of diverse content types supported by AI assistants",
    },
    {
      nameId: 'aiflow.features.item5.name',
      descriptionId: 'aiflow.features.item5.description',
      listItems: [
        { id: 'aiflow.features.item5.li1', text: 'Organize related concepts into cohesive clusters for enhanced comprehension' },
        { id: 'aiflow.features.item5.li2', text: 'Leverage AI assistant support for analysis and generation' },
        { id: 'aiflow.features.item5.li3', text: 'Synthesize diverse ideas into comprehensive solutions with one-click' },
      ],
      imageSrc: "/img/portfolio/thumbnails/aiflow_group_nodes.png",
      imageAlt: "Demonstration of AI-powered group nodes for organizing and synthesizing ideas",
    },
    {
      nameId: 'aiflow.features.item6.name',
      descriptionId: 'aiflow.features.item6.description',
      listItems: [
        { id: 'aiflow.features.item6.li1', text: 'Provide intelligent analysis and suggestions to enhance thinking quality' },
        { id: 'aiflow.features.item6.li2', text: 'Automatically generate high-quality content, saving time and effort' },
        { id: 'aiflow.features.item6.li3', text: 'Support personalized AI instructions to meet specific needs' },
      ],
      imageSrc: "/img/portfolio/thumbnails/aiflow_notes.png",
      imageAlt: "Overview of the all-in-one AI assistant features and customizable prompts",
    },
  ];

  return (
    <section id="features" className={clsx(styles.featureSection)} style={{ backgroundColor: '#F0FFF0' }}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          <Translate id="aiflow.features.title">Key Features</Translate>
        </Heading>

        {features.map((feature, index) => (
          <div className={styles.featureGrid} style={{
            marginTop: index > 0 ? '3rem' : '0',
            flexDirection: index % 2 === 0 ? 'row-reverse' : 'row', // Change layout based on index
          }} key={index}>
            <div style={{ cursor: 'pointer', flex: 5 }}>
              <img
                className={styles.featureImage}
                onClick={() => setShowImageSrc(feature.imageSrc.replace('thumbnails', 'fullsize'))}
                id={`aiflow-${index + 1}`}
                alt={feature.imageAlt}
                src={feature.imageSrc}
              />
            </div>
            <div className={styles.featureContent} style={{ flex: 3 }}>
              {feature.icon && <div className={styles.benefitIcon}>{feature.icon}</div>}
              <Heading as="h3">
                <Translate id={feature.nameId}>{feature.nameId}</Translate>
              </Heading>
              <p>
                <Translate id={feature.descriptionId}>{feature.descriptionId}</Translate>
              </p>
              <ul className={styles.featureList}>
                {feature.listItems.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Translate id={item.id}>{item.text}</Translate>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AIBrainstormingSection({ setShowImageSrc }) {
  return (
    <section id="ai-powered-brainstorming" className={styles.featureSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          <Translate id="aiflow.ai-powered-brainstorming.title">AI-Powered Brainstorming</Translate>
        </Heading>
        <p className={styles.sectionDescription}>
          <Translate id="aiflow.ai-powered-brainstorming.subtitle">Boost creativity with AI-assisted classic thinking models</Translate>
        </p>

        <div className={styles.featureGrid}>
          <div style={{ cursor: 'pointer', flex: 4 }}>
            <img
              className={styles.featureImage}
              onClick={() => setShowImageSrc("/img/portfolio/fullsize/aiflow_productivity.png")}
              id="aiflow-brainstorming"
              alt="AI-powered brainstorming with classic thinking models"
              src="/img/portfolio/thumbnails/aiflow_productivity.png"
            />
          </div>
          <div className={styles.featureContent} style={{
            flex: 2
          }}>
            <Heading as="h3">
              <Translate id="aiflow.ai-powered-brainstorming.classic_models.title">Ideation with Classic Thinking Models</Translate>
            </Heading>
            <p>
              <Translate id="aiflow.ai-powered-brainstorming.classic_models.subtitle">AI-powered brainstorming with structured frameworks</Translate>
            </p>
            <ul className={styles.featureList}>
              <li>
                <Translate id="aiflow.ai-powered-brainstorming.classic_models.m1">Six Thinking Hats</Translate>
              </li>
              <li>
                <Translate id="aiflow.ai-powered-brainstorming.classic_models.m2">SWOT Analysis</Translate>
              </li>
              <li>
                <Translate id="aiflow.ai-powered-brainstorming.classic_models.m3">McKinsey Method</Translate>
              </li>
              <li>
                <Translate id="aiflow.ai-powered-brainstorming.classic_models.m4">First Principles</Translate>
              </li>
              {/* <li>
                <Translate id="aiflow.ai-powered-brainstorming.classic_models.m5">SWOT Analysis</Translate>
              </li> */}
            </ul>

            <Heading as="h3" style={{ paddingTop: '10px' }}>
              <Translate id="aiflow.ai-powered-brainstorming.oneclick_generation.title">Ideation with Classic Thinking Models</Translate>
            </Heading>
            <p>
              <Translate id="aiflow.ai-powered-brainstorming.oneclick_generation.subtitle">AI-powered brainstorming with structured frameworks</Translate>
            </p>
            <ul className={styles.featureList}>
              <li>
                <Translate id="aiflow.ai-powered-brainstorming.oneclick_generation.m1">Presentation Slides</Translate>
              </li>
              <li>
                <Translate id="aiflow.ai-powered-brainstorming.oneclick_generation.m2">Solution Document</Translate>
              </li>
              <li>
                <Translate id="aiflow.ai-powered-brainstorming.oneclick_generation.m3">Infographics</Translate>
              </li>
              <li>
                <Translate id="aiflow.ai-powered-brainstorming.oneclick_generation.m4">Images</Translate>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function BookInsightsSection({ setShowImageSrc }) {
  return (
    <section id="book-insights" className={styles.featureSection} style={{ backgroundColor: 'cornsilk' }}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          <Translate id="aiflow.book-insights.title">
            Deep Learning from Books & Movies with AI Mind Maps
          </Translate>
        </Heading>
        <p className={styles.sectionDescription}>
          <Translate id="aiflow.book-insights.subtitle">
            Transform Complex Works into Clear, Actionable Insights
          </Translate>
        </p>

        <div className={styles.featureGrid}>
          <div className={styles.featureContent} style={{
            flex: 2,
          }}>
            <i className="fas fa-4x fa-book-reader text-primary mb-4" />
            <Heading as="h3">
              <Translate id="aiflow.book-insights.features.title">Unlock Knowledge Efficiently</Translate>
            </Heading>
            <ul className={styles.featureList}>
              <li>
                <Translate id="aiflow.book-insights.features.li1">
                  Extract key concepts and themes instantly
                </Translate>
              </li>
              <li>
                <Translate id="aiflow.book-insights.features.li2">
                  Visualize complex relationships and character dynamics
                </Translate>
              </li>
              <li>
                <Translate id="aiflow.book-insights.features.li3">
                  Generate comprehensive chapter summaries
                </Translate>
              </li>
              <li>
                <Translate id="aiflow.book-insights.features.li4">
                  Explore related topics and deeper insights
                </Translate>
              </li>
              <li>
                <Translate id="aiflow.book-insights.features.li5">
                  Create personalized learning paths
                </Translate>
              </li>
            </ul>
          </div>

          <div style={{ cursor: 'pointer', flex: 3 }}>
            <img
              className={styles.featureImage}
              onClick={() => setShowImageSrc("/img/portfolio/fullsize/aiflow_book.png")}
              id="aiflow-brainstorming"
              alt="AI-powered mind mapping for book analysis and learning"
              src="/img/portfolio/thumbnails/aiflow_book.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function UseCasesSection({ setShowImageSrc }) {
  const useCases = [
    {
      icon: '📚',
      titleId: 'aiflow.use-cases.case1.title',
      descriptionId: 'aiflow.use-cases.case1.description',
    },
    {
      icon: '🎯',
      titleId: 'aiflow.use-cases.case2.title',
      descriptionId: 'aiflow.use-cases.case2.description',
    },
    {
      icon: '🔍',
      titleId: 'aiflow.use-cases.case3.title',
      descriptionId: 'aiflow.use-cases.case3.description',
    },
    {
      icon: '⚙️',
      titleId: 'aiflow.use-cases.case4.title',
      descriptionId: 'aiflow.use-cases.case4.description',
    },
    {
      icon: '📝',
      titleId: 'aiflow.use-cases.case5.title',
      descriptionId: 'aiflow.use-cases.case5.description',
    },
    {
      icon: '🧠',
      titleId: 'aiflow.use-cases.case6.title',
      descriptionId: 'aiflow.use-cases.case6.description',
    },
  ];

  return (
    <section id="use-cases" className={styles.useCases}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          <Translate id="aiflow.use-cases.title">Use Cases</Translate>
        </Heading>
        <p className={styles.sectionDescription}>
          <Translate id="aiflow.use-cases.description">AIFlow adapts to diverse knowledge work scenarios, enhancing your thinking process from exploration to execution</Translate>
        </p>

        <div
          className={styles.featureGrid}
          style={{
            flexDirection: 'row',
          }}
        >

          <div className={styles.featureContent} style={{ flex: 3 }}>
            {useCases.map((useCase, index) => (

              <div key={index}>
                <span style={{ fontSize: 20, fontWeight: 'bold' }}>
                  <Translate id={useCase.titleId}>Multidimensional Thinking</Translate>
                </span>
                <p style={{ marginBottom: 5 }}>
                  <Translate id={useCase.descriptionId}>Analyze problems comprehensively with multidimensional mind maps</Translate>
                </p>
              </div>
            ))}
          </div>

          <div style={{ cursor: 'pointer', flex: 5 }}>
            <img
              className={styles.featureImage}
              onClick={() => setShowImageSrc("/img/portfolio/fullsize/aiflow_learning.png")}
              alt={"AIFlow boost creativity and productivity under multi scenarios"}
              src={"/img/portfolio/thumbnails/aiflow_learning.png"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AIFlow() {
  const { siteConfig, i18n } = useDocusaurusContext();
  const [showImageSrc, setShowImageSrc] = useState(null);

  // Close modal when clicked outside
  const closeModal = () => {
    setShowImageSrc(null);
  };

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
    let url = `https://app.${getDomain()}/#/login?source=flow`;
    openUrl(url);
  }

  const testimonials_avatars = ["👩‍🏫", "👨‍💼", "👩‍💼", "👨‍🎓", "👩‍🎓", "👨‍🏫"];

  return (
    <Layout
      title={translate({
        id: 'aiflow.head.title',
        message: 'FunBlocks AIFlow - AI-powered whiteboard & mind mapping tool for enhanced creativity and productivity'
      })}
      description={translate({
        id: 'aiflow.head.description',
        message: 'FunBlocks AIFlow: AI-powered whiteboard & mind mapping tool. Boost creativity by 10x with GPT-4 & Claude LLM. Explore ideas, solve problems & learn faster. Free trial available!'
      })}
    >
      <AIFlowHeader setShowImageSrc={setShowImageSrc} toApp={toApp} />
      <main>
        <IntroSection
          page="aiflow"
          feature={'intro'}
          pointNos={[1, 2, 3, 4]}
          style={{backgroundColor: 'lightcyan'}}
          imageElement={<div style={{ flex: 4, cursor: 'pointer' }}>
            <img
              className={styles.featureImage}
              alt="FunBlocks AIFlow benefits compared to ChatGPT"
              src="/img/portfolio/thumbnails/aiflow_benefits.png"
              onClick={() => setShowImageSrc("/img/portfolio/fullsize/aiflow_benefits.png")}
            />
          </div>}
        />
        <FeaturesSection setShowImageSrc={setShowImageSrc} />
        <AIBrainstormingSection setShowImageSrc={setShowImageSrc} />
        <BookInsightsSection setShowImageSrc={setShowImageSrc} />
        {/* <ExploreWithAISection setShowImageSrc={setShowImageSrc} /> */}
        <IntroSection
          page="aiflow"
          feature={'explore-with-ai'}
          pointNos={[1, 2, 3, 4]}
          style={{backgroundColor: '#F0FFF0'}}
          imageElement={<div style={{ cursor: 'pointer', flex: 3.5 }}>
          <img
            className={styles.featureImage}
            onClick={() => setShowImageSrc('/img/portfolio/fullsize/aiflow_related_question.png')}
            alt={'AI-guided topic discovery and exploration with AIFlow'}
            src={'/img/portfolio/thumbnails/aiflow_related_question.png'}
          />
        </div>}
        />
        <UseCasesSection setShowImageSrc={setShowImageSrc} />
        <AIToolsSection />
        <TestimonialsSection avatars={testimonials_avatars} page={'aiflow'} />
        <ThinkingMattersSection />
        <CTASection toApp={toApp} page={'aiflow'} />
        <FAQSection
          page={'aiflow'}
          faqIds={[
            'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8',
            'q9', 'q10', 'q11', 'q12'
          ]}
        />
      </main>
      <Footer />

      {/* Image Modal */}
      {showImageSrc && <ImageModal imageSrc={showImageSrc} setImageSrc={setShowImageSrc} />}
      <GoogleAccountAnalytics page={'aiflow'}/>
    </Layout>
  );
} 