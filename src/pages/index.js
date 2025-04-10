import React, { useState, useEffect, useMemo } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import Footer from '../components/Footer';
import FAQSection from '../components/FAQSection';
import AIToolsSection from '../components/AIToolsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ImageModal from '../components/ImageModal';
import GoogleAccountAnalytics from '../components/GoogleAccountAnalytics';
import CTASection from '../components/CTASection';

function HomepageHeader({ setShowImageSrc, toApp }) {
  const { siteConfig } = useDocusaurusContext();

  return (
    <section id="hero" className={clsx(styles.hero, styles.pageSection)} style={{ backgroundColor: '#e6e6fa' }}>
      <div className="container">
        <div className={styles.heroContent}>
          <Heading as="h1">
            <Translate id="homepage.hero.title">
              Explore, Think and Create with AI
            </Translate>
          </Heading>
          <p className={styles.heroSubtitle}>
            <Translate id="homepage.hero.subtitle">
              An AI-driven platform that enhances thinking and productivity through visualization.
              Effortlessly convert intricate concepts into engaging visual mind maps, dynamic slides,
              and informative infographics.
            </Translate>
          </p>
          <div className={styles.heroButtons}>
            <Link
              className={clsx('button', styles.btn)}
              to="#"
              onClick={() => toApp()}
            >
              <Translate id="homepage.hero.trial">Free Trial Now</Translate>
            </Link>
          </div>
        </div>
        <div style={{ cursor: 'pointer' }}>
          <img
            className={styles.heroImage}
            onClick={() => setShowImageSrc("/img/portfolio/fullsize/aiflow_benefits.png")}
            id="aiflow-overview"
            alt="FunBlocks AIFlow interface"
            src="/img/portfolio/thumbnails/aiflow_benefits.png"
          />
        </div>

      </div>
    </section>
  );
}

function BeyondChatGPTSection() {
  return (
    <section id="aiflow" className={clsx(styles.beyondChatgpt)}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          <Translate id="homepage.beyond.title">Beyond ChatGPT</Translate>
        </Heading>
        <p className={styles.sectionDescription}>
          <Translate id="homepage.beyond.description">
            Text chatbox is not the only way to interact with AI. Visualize your thoughts and AI's output
            in formats that truly enhance your cognitive process.
          </Translate>
        </p>

        <div className={styles.benefitsContainer}>
          <div className={styles.benefitCard}>
            <div className={styles.cardTitle}>
              <div className={styles.benefitIcon}>🔮</div>
              <Heading as="h4">
                <Translate id="homepage.beyond.visualize.title">Visualize Complex Thinking</Translate>
              </Heading>
            </div>
            <p>
              <Translate id="homepage.beyond.visualize.description">
                Transform linear conversations into multidimensional mind maps that reveal
                connections, patterns, and insights that text alone cannot convey.
              </Translate>
            </p>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.cardTitle}>
              <div className={styles.benefitIcon}>💡</div>
              <Heading as="h4">
                <Translate id="homepage.beyond.accelerate.title">Accelerate Innovative Solutions</Translate>
              </Heading>
            </div>
            <p>
              <Translate id="homepage.beyond.accelerate.description">
                Combine AI's vast knowledge with visual thinking techniques to break through
                creative barriers and generate breakthrough ideas.
              </Translate>
            </p>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.cardTitle}>
              <div className={styles.benefitIcon}>⚡</div>
              <Heading as="h4">
                <Translate id="homepage.beyond.streamline.title">Streamline Knowledge Work</Translate>
              </Heading>
            </div>
            <p>
              <Translate id="homepage.beyond.streamline.description">
                Transform complex information into structured visual outputs that can be
                instantly converted into professional deliverables.
              </Translate>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DeepenThinkingSection({ setShowImageSrc }) {
  return (
    <section className={styles.featureSection}>
      <div className="container">
        <div className={styles.featureGrid}>
          <div className={styles.featureContent} style={{ flex: 2 }}>
            <Heading as="h2">
              <Translate id="homepage.features.visualize.title">Visualize Complex Thinking</Translate>
            </Heading>
            <p>
              <Translate id="homepage.features.visualize.description">
                Traditional AI chatbots limit thinking to a linear conversation.
                FunBlocks AIFlow expands your cognitive horizon with multidimensional
                mind maps on an infinite canvas.
              </Translate>
            </p>

            <ul className={styles.featureList}>
              <li>
                <Translate id="homepage.features.visualize.point1">
                  Explore any topic from multiple angles simultaneously, revealing
                  insights that linear thinking misses
                </Translate>
              </li>
              <li>
                <Translate id="homepage.features.visualize.point2">
                  Dive infinitely deeper into any subtopic while maintaining the full context,
                  creating comprehensive knowledge structures
                </Translate>
              </li>
              <li>
                <Translate id="homepage.features.visualize.point3">
                  Let AI generate an entire exploration space with related topics and
                  questions you hadn't considered
                </Translate>
              </li>
              <li>
                <Translate id="homepage.features.visualize.point4">
                  Refine your thinking with AI-optimized questions that target the
                  core of complex problems
                </Translate>
              </li>
            </ul>
          </div>
          <div style={{ cursor: 'pointer', flex: 2 }}>
            <img
              className={styles.featureImage}
              id="aiflow_optimize_question"
              alt="Mind mapping for deeper thinking"
              src="/img/portfolio/thumbnails/aiflow_optimize_question.png"
              onClick={() => setShowImageSrc("/img/portfolio/fullsize/aiflow_optimize_question.png")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function BoostCreativitySection({ setShowImageSrc }) {
  return (
    <section className={styles.featureSection}>
      <div className="container">
        <div className={styles.featureGrid}>
          <div style={{ cursor: 'pointer', flex: 2 }}>
            <img
              className={styles.featureImage}
              id="aiflow_productivity"
              alt="Creative brainstorming with AI"
              src="/img/portfolio/thumbnails/aiflow_productivity.png"
              onClick={() => setShowImageSrc("/img/portfolio/fullsize/aiflow_productivity.png")}
            />
          </div>
          <div className={styles.featureContent} style={{ flex: 2 }}>
            <Heading as="h2">
              <Translate id="homepage.features.accelerate.title">Accelerate Innovative Solutions</Translate>
            </Heading>
            <p>
              <Translate id="homepage.features.accelerate.description">
                Move beyond the creative limitations of text-based AI interactions.
                FunBlocks AIFlow combines AI insights with powerful visual frameworks
                to spark genuine innovation.
              </Translate>
            </p>

            <ul className={styles.featureList}>
              <li>
                <Translate id="homepage.features.accelerate.point1">
                  Integrate AI's vast knowledge with visual brainstorming to generate
                  connections human minds might not naturally make
                </Translate>
              </li>
              <li>
                <Translate id="homepage.features.accelerate.point2">
                  Deconstruct complex problems visually to identify root causes
                  and hidden opportunities
                </Translate>
              </li>
              <li>
                <Translate id="homepage.features.accelerate.point3">
                  Apply classic mental models (like SCAMPER, Six Thinking Hats, and
                  First Principles) directly in your mind maps with AI assistance
                </Translate>
              </li>
              <li>
                <Translate id="homepage.features.accelerate.point4">
                  Overcome creative blocks by visually expanding idea spaces
                  in multiple directions simultaneously
                </Translate>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function BoostProductivitySection({ setShowImageSrc }) {
  return (
    <section className={styles.featureSection}>
      <div className="container">
        <div className={styles.featureGrid}>
          <div className={styles.featureContent} style={{ flex: 2 }}>
            <Heading as="h2">
              <Translate id="homepage.features.streamline.title">Streamline Knowledge Work</Translate>
            </Heading>
            <p>
              <Translate id="homepage.features.streamline.description">
                Transform the way you work with information. FunBlocks AIFlow turns
                complex knowledge work into a visual, collaborative process with
                immediate, tangible outputs.
              </Translate>
            </p>

            <ul className={styles.featureList}>
              <li>
                <Translate id="homepage.features.streamline.point1">
                  Instantly break down overwhelming projects into manageable visual
                  components with AI assistance
                </Translate>
              </li>
              <li>
                <Translate id="homepage.features.streamline.point2">
                  Interact with AI through an intuitive visual interface that matches
                  how your brain naturally processes complex information
                </Translate>
              </li>
              <li>
                <Translate id="homepage.features.streamline.point3">
                  Collaborate with AI to explore multiple solution paths simultaneously,
                  identifying the optimal approach faster
                </Translate>
              </li>
              <li>
                <Translate id="homepage.features.streamline.point4">
                  Convert your visual thinking directly into professional deliverables—slides,
                  infographics, documents—with a single click
                </Translate>
              </li>
            </ul>
          </div>

          <div style={{ cursor: 'pointer', flex: 2 }}>
            <img
              className={styles.featureImage}
              id="aiflow_slides_generation"
              alt="Productivity enhancement with AIFlow"
              src="/img/portfolio/thumbnails/aiflow_slides_generation.png"
              onClick={() => setShowImageSrc("/img/portfolio/fullsize/aiflow_slides_generation.png")}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

function MultiModelSection() {
  return (
    <section id="multi-model" className={styles.featureSection} style={{ backgroundColor: 'lightcyan' }}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          <Translate id="homepage.multiModel.title">All Leading AI Models in One Place</Translate>
        </Heading>
        <p className={styles.sectionDescription}>
          <Translate id="homepage.multiModel.description">
            FunBlocks AI supports all mainstream large language models, giving you the
            freedom to choose the best AI for your specific needs.
          </Translate>
        </p>

        <div className={styles.multiModelAdvantage}>
          <div className={styles.modelLogosContainer}>
            <div className={styles.modelLogoItem}>
              <img className={styles.modelLogo} id="openai-logo" alt="OpenAI GPT" src="/img/models/gpt.png" />
              <p className={styles.modelName}>OpenAI GPT</p>
            </div>
            <div className={styles.modelLogoItem}>
              <img className={styles.modelLogo} id="claude-logo" alt="Anthropic Claude" src="/img/models/claude.png" />
              <p className={styles.modelName}>Anthropic Claude</p>
            </div>
            <div className={styles.modelLogoItem}>
              <img className={styles.modelLogo} id="gemini-logo" alt="Google Gemini" src="/img/models/gemini.png" />
              <p className={styles.modelName}>Google Gemini</p>
            </div>
            <div className={styles.modelLogoItem}>
              <img className={styles.modelLogo} id="deepseek-logo" alt="DeepSeek" src="/img/models/deepseek.png" />
              <p className={styles.modelName}>DeepSeek</p>
            </div>
          </div>

          <p className={styles.advantageText}>
            <Translate id="homepage.multiModel.advantage">
              Boosting productivity without switching between platforms or purchasing multiple subscriptions.
            </Translate>
          </p>
        </div>

        <div className={styles.modelBenefit}>
          <p style={{ textAlign: 'center', fontWeight: '500', marginTop: '2rem' }}>
            <Translate id="homepage.multiModel.benefit">
              Experience the latest and most powerful AI models simultaneously without platform-switching hassle.
            </Translate>
          </p>
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  return (
    <section id="usecases" className={styles.useCases}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          <Translate id="homepage.useCases.title">Use Cases</Translate>
        </Heading>
        <p className={styles.sectionDescription}>
          <Translate id="homepage.useCases.description">
            FunBlocks AIFlow adapts to diverse knowledge work scenarios, enhancing
            your thinking process from exploration to execution.
          </Translate>
        </p>

        <div className={styles.useCasesGrid}>
          <div className={styles.useCaseCard}>
            <div className={styles.cardTitle}>
              <div className={styles.useCaseIcon}>📚</div>
              <span>
                <Translate id="homepage.useCases.learning.title">Topic-Based Learning</Translate>
              </span>
            </div>
            <p>
              <Translate id="homepage.useCases.learning.description">
                Build comprehensive knowledge systems and discover cross-disciplinary connections.
                Transform books, lectures, and resources into interactive visual knowledge maps.
              </Translate>
            </p>
          </div>

          <div className={styles.useCaseCard}>
            <div className={styles.cardTitle}>
              <div className={styles.useCaseIcon}>📊</div>
              <span>
                <Translate id="homepage.useCases.strategy.title">Work Plan Strategy</Translate>
              </span>
            </div>
            <p>
              <Translate id="homepage.useCases.strategy.description">
                Develop strategic work plans by visually mapping goals, breaking down
                complex initiatives, and generating solution paths with AI guidance.
              </Translate>
            </p>
          </div>

          <div className={styles.useCaseCard}>
            <div className={styles.cardTitle}>
              <div className={styles.useCaseIcon}>🎬</div>
              <span>
                <Translate id="homepage.useCases.analysis.title">Content Analysis</Translate>
              </span>
            </div>
            <p>
              <Translate id="homepage.useCases.analysis.description">
                Analyze films, literature, and media by mapping narratives, themes, and
                character relationships. Extract deeper insights and create comprehensive visual breakdowns.
              </Translate>
            </p>
          </div>

          <div className={styles.useCaseCard}>
            <div className={styles.cardTitle}>
              <div className={styles.useCaseIcon}>🔍</div>
              <span>
                <Translate id="homepage.useCases.problem.title">Problem Analysis</Translate>
              </span>
            </div>
            <p>
              <Translate id="homepage.useCases.problem.description">
                Visualize complex problems from multiple angles, identify root causes,
                and discover innovative solutions through structured AI-assisted exploration.
              </Translate>
            </p>
          </div>

          <div className={styles.useCaseCard}>
            <div className={styles.cardTitle}>
              <div className={styles.useCaseIcon}>📄</div>
              <span>
                <Translate id="homepage.useCases.content.title">Content Generation</Translate>
              </span>
            </div>
            <p>
              <Translate id="homepage.useCases.content.description">
                Transform brainstorming mind maps into polished documents, professional slides,
                compelling images, and informative infographics with a single click, streamlining your workflow.
              </Translate>
            </p>
          </div>

          <div className={styles.useCaseCard}>
            <div className={styles.cardTitle}>
              <div className={styles.useCaseIcon}>💡</div>
              <span>
                <Translate id="homepage.useCases.thinking.title">Thinking Enhancement</Translate>
              </span>
            </div>
            <p>
              <Translate id="homepage.useCases.thinking.description">
                Progressively improve your critical and creative thinking abilities through
                AI-guided mind mapping. Develop advanced cognitive skills through regular use
                of structured thinking frameworks.
              </Translate>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkspaceSection({ setShowImageSrc }) {
  return (
    <section id="workspace" className={clsx(styles.workspaceSection)}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          <Translate id="homepage.workspace.title">All-in-one FunBlocks AI Workspace</Translate>
        </Heading>
        <p className={styles.sectionDescription}>
          <Translate id="homepage.workspace.description">
            Beyond AIFlow, FunBlocks serves as an all-in-one AI workspace designed to meet
            all your work and learning requirements, offering seamlessly integrated tools
            for writing, presenting, brainstorming, and research.
          </Translate>
        </p>
        <div className={styles.twoColumnGrid}>
          <div className={styles.benefitCard}>
            <div className={styles.cardTitle}>
              <div className={styles.benefitIcon}>💡</div>
              <a href="/aiflow.html" target="_blank">
                <Translate id="homepage.workspace.aiflow.title">AIFlow</Translate>
              </a>
            </div>
            <p>
              <Translate id="homepage.workspace.aiflow.description">
                Unleash creativity with AI-powered whiteboard and mind mapping tools.
                Visualize complex ideas, brainstorm with AI assistance, and organize your thoughts effectively.
              </Translate>
            </p>
            <div style={{ cursor: 'pointer' }}>
              <img
                className={styles.featureImage}
                onClick={() => setShowImageSrc("/img/portfolio/fullsize/aiflow_benefits.png")}
                id="aiflow-overview"
                alt="FunBlocks AIFlow interface"
                src="/img/portfolio/thumbnails/aiflow_benefits.png"
              />
            </div>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.cardTitle}>
              <div className={styles.benefitIcon}>📝</div>
              <a href="/aidocs" target="_blank">
                <Translate id="homepage.workspace.writer.title">AI Docs</Translate>
              </a>
            </div>
            <p>
              <Translate id="homepage.workspace.writer.description">
                Experience Notion-style Block Editor with AI-powered writing assistance.
                Create beautiful documents, notes, and content with intelligent suggestions and formatting.
              </Translate>
            </p>
            <div style={{ cursor: 'pointer' }}>
              <img
                className={styles.featureImage}
                src="/img/portfolio/thumbnails/ai_writer_workspace.png"
                alt="FunBlocks AI Docs: Notion-style block editor with AI assistant"
                onClick={() => setShowImageSrc("/img/portfolio/fullsize/ai_writer_workspace.png")}
              />
            </div>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.cardTitle}>
              <div className={styles.benefitIcon}>🎞️</div>
              <a href="/slides.html" target="_blank">
                <Translate id="homepage.workspace.slides.title">AI Slides</Translate>
              </a>
            </div>
            <p>
              <Translate id="homepage.workspace.slides.description">
                Generate professional presentations with a single click based on any topic.
                Fully supports Markdown formatting for easy writing and editing of slide content.
              </Translate>
            </p>
            <div style={{ cursor: 'pointer' }}>
              <img
                className={styles.featureImage}
                src="/img/portfolio/thumbnails/slides.png"
                alt="AI Slides: Effortless slide creation with Markdown, AI, and cloud collaboration"
                onClick={() => setShowImageSrc("/img/portfolio/fullsize/slides.png")}
              />
            </div>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.cardTitle}>
              <div className={styles.benefitIcon}>🌐</div>
              <a href="https://chromewebstore.google.com/detail/funblocks-ai-your-ultimat/coodnehmocjfaandkbeknihiagfccoid" target="_blank">
                <Translate id="homepage.workspace.extension.title">AI Extension</Translate>
              </a>
            </div>
            <p>
              <Translate id="homepage.workspace.extension.description">
                Enhance your browsing experience with an intelligent extension that assists
                with reading and writing on any webpage. Summarize content, draft responses, and research efficiently.
              </Translate>
            </p>
            <div style={{ cursor: 'pointer', flex: 4 }}>
              <img
                className={styles.featureImage}
                id="aiflow-brainstorming"
                alt="FunBlocks AI sidebar assistant interface for enhanced reading and critical thinking"
                src='/img/portfolio/thumbnails/ai_reading_en.png'
                onClick={() => setShowImageSrc("/img/portfolio/fullsize/ai_reading_en.png")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
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

  function toFlowPlayground() {
    let lng = getLanguage();
    //- openUrl(`https://api.xslides.net/editor.html?hid=demo_${lng}&warzone=playground&lng=${lng}`);
    openUrl(`https://app.funblocks.net/#/aiflow?hid=welcome_to_aiflow_${lng}&lng=${lng}`);
  }

  function toApp() {
    let url = `https://app.${getDomain()}/#/login?source=flow`;
    openUrl(url);
  }

  const testimonials_avatars = ["👩‍🏫", "👨‍💼", "👩‍💼", "👨‍🎓", "👨‍🏫", "👩‍🎓"];

  return (
    <Layout
      title={translate({
        id: 'head.title',
        message: 'FunBlocks AI - Your AI-powered workspace for enhanced creativity and productivity'
      })}
      description={translate({
        id: 'head.description',
        message: 'Explore, think, and create with AI. AI-powered innovative whiteboarding, mind mapping, slide creation, and document tools to boost your creativity and productivity.'
      })}
    >
      <HomepageHeader setShowImageSrc={setShowImageSrc} toApp={toApp} />
      <main>
        <BeyondChatGPTSection />
        <DeepenThinkingSection setShowImageSrc={setShowImageSrc} />
        <BoostCreativitySection setShowImageSrc={setShowImageSrc} />
        <BoostProductivitySection setShowImageSrc={setShowImageSrc} />
        <AIToolsSection />
        <MultiModelSection />
        <WorkspaceSection setShowImageSrc={setShowImageSrc} />
        <UseCasesSection />
        <TestimonialsSection avatars={testimonials_avatars} page={'homepage'} />
        <CTASection toApp={toApp} page={'homepage'} />
        <FAQSection
          page={'homepage'}
          faqIds={[
            'q0', 'q01', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8',
            'q9', 'q10', 'q11', 'q12', 'q14', 'q15', 'q16', 'q17', 'q18', 'q19'
          ]}
        />
      </main>
      <Footer />

      {showImageSrc && <ImageModal imageSrc={showImageSrc} setImageSrc={setShowImageSrc} />}
      <GoogleAccountAnalytics page={'homepage'}/>
    </Layout>
  );
}
