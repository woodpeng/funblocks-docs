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

function HomepageHeader({ setImageSrc, toApp }) {
  const { siteConfig } = useDocusaurusContext();

  return (
    <section id="hero" className={clsx(styles.hero, styles.pageSection)}>
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
            onClick={() => setImageSrc("/img/portfolio/fullsize/aiflow_benefits.png")}
            id="aiflow-overview"
            alt="FunBlocks AIFlow interface"
            src="/img/portfolio/fullsize/aiflow_benefits.png"
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
              <Heading as="h4" style={{ alignSelf: 'end' }}>
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
              <Heading as="h4" style={{ alignSelf: 'end' }}>
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
              <Heading as="h4" style={{ alignSelf: 'end' }}>
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

function DeepenThinkingSection({ setImageSrc }) {
  return (
    <section className={styles.featureSection}>
      <div className="container">
        <div className={styles.featureGrid}>
          <div className={styles.featureContent}>
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
          <div style={{ cursor: 'pointer' }}>
            <img
              className={styles.featureImage}
              id="aiflow_optimize_question"
              alt="Mind mapping for deeper thinking"
              src="/img/portfolio/fullsize/aiflow_optimize_question.png"
              onClick={() => setImageSrc("/img/portfolio/fullsize/aiflow_optimize_question.png")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function BoostCreativitySection({ setImageSrc }) {
  return (
    <section className={styles.featureSection}>
      <div className="container">
        <div className={styles.featureGrid}>
          <div style={{ cursor: 'pointer' }}>
            <img
              className={styles.featureImage}
              id="aiflow_productivity"
              alt="Creative brainstorming with AI"
              src="/img/portfolio/fullsize/aiflow_productivity.png"
              onClick={() => setImageSrc("/img/portfolio/fullsize/aiflow_productivity.png")}
            />
          </div>
          <div className={styles.featureContent}>
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

function BoostProductivitySection({ setImageSrc }) {
  return (
    <section className={styles.featureSection}>
      <div className="container">
        <div className={styles.featureGrid}>
          <div className={styles.featureContent}>
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

          <div style={{ cursor: 'pointer' }}>
            <img
              className={styles.featureImage}
              id="aiflow_slides_generation"
              alt="Productivity enhancement with AIFlow"
              src="/img/portfolio/fullsize/aiflow_slides_generation.png"
              onClick={() => setImageSrc("/img/portfolio/fullsize/aiflow_slides_generation.png")}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

function QuickAccessSection() {
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

function MultiModelSection() {
  return (
    <section id="multi-model" className={styles.featureSection}>
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

function WorkspaceSection() {
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
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.cardTitle}>
              <div className={styles.benefitIcon}>📝</div>
              <a href="/workspace.html#aiwriter" target="_blank">
                <Translate id="homepage.workspace.writer.title">AI Writer</Translate>
              </a>
            </div>
            <p>
              <Translate id="homepage.workspace.writer.description">
                Experience Notion-style Block Editor with AI-powered writing assistance.
                Create beautiful documents, notes, and content with intelligent suggestions and formatting.
              </Translate>
            </p>
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
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
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
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialHeader}>
              <div className={styles.testimonialAvatar}>
                <span>👩‍🏫</span>
              </div>
              <div className={styles.testimonialInfo}>
                <h4><Translate id="homepage.testimonials.user1.name">Sarah J.</Translate></h4>
                <p><Translate id="homepage.testimonials.user1.role">Education Consultant</Translate></p>
              </div>
            </div>
            <p>
              <Translate id="homepage.testimonials.user1.text">
                "FunBlocks AI has revolutionized how I create educational content.
                The mind mapping features help me organize complex topics visually, and
                being able to convert those maps directly into presentation slides saves
                me hours of work. My students love the clear, visually engaging materials I now produce."
              </Translate>
            </p>
          </div>

          <div className={styles.testimonialCard}>
            <div className={styles.testimonialHeader}>
              <div className={styles.testimonialAvatar}>
                <span>👨‍💼</span>
              </div>
              <div className={styles.testimonialInfo}>
                <h4><Translate id="homepage.testimonials.user2.name">Michael T.</Translate></h4>
                <p><Translate id="homepage.testimonials.user2.role">Product Manager</Translate></p>
              </div>
            </div>
            <p>
              <Translate id="homepage.testimonials.user2.text">
                "I've tried numerous productivity tools, but FunBlocks AI stands out.
                The combination of AI-powered mind mapping and the ability to generate
                professional documents in seconds has dramatically improved our team's workflow.
                The most impressive part? I've noticed my own critical thinking skills improving with regular use."
              </Translate>
            </p>
          </div>

          <div className={styles.testimonialCard}>
            <div className={styles.testimonialHeader}>
              <div className={styles.testimonialAvatar}>
                <span>👩‍💼</span>
              </div>
              <div className={styles.testimonialInfo}>
                <h4><Translate id="homepage.testimonials.user3.name">Michael T.</Translate></h4>
                <p><Translate id="homepage.testimonials.user3.role">Product Manager</Translate></p>
              </div>
            </div>
            <p>
              <Translate id="homepage.testimonials.user3.text">
                "I've tried numerous productivity tools, but FunBlocks AI stands out.
                The combination of AI-powered mind mapping and the ability to generate
                professional documents in seconds has dramatically improved our team's workflow.
                The most impressive part? I've noticed my own critical thinking skills improving with regular use."
              </Translate>
            </p>
          </div>

          <div className={styles.testimonialCard}>
            <div className={styles.testimonialHeader}>
              <div className={styles.testimonialAvatar}>
                <span>👨‍🎓</span>
              </div>
              <div className={styles.testimonialInfo}>
                <h4><Translate id="homepage.testimonials.user4.name">Michael T.</Translate></h4>
                <p><Translate id="homepage.testimonials.user4.role">Product Manager</Translate></p>
              </div>
            </div>
            <p>
              <Translate id="homepage.testimonials.user4.text">
                "I've tried numerous productivity tools, but FunBlocks AI stands out.
                The combination of AI-powered mind mapping and the ability to generate
                professional documents in seconds has dramatically improved our team's workflow.
                The most impressive part? I've noticed my own critical thinking skills improving with regular use."
              </Translate>
            </p>
          </div>

          <div className={styles.testimonialCard}>
            <div className={styles.testimonialHeader}>
              <div className={styles.testimonialAvatar}>
                <span>👨‍🏫</span>
              </div>
              <div className={styles.testimonialInfo}>
                <h4><Translate id="homepage.testimonials.user5.name">Emily R.</Translate></h4>
                <p><Translate id="homepage.testimonials.user5.role">Marketing Manager</Translate></p>
              </div>
            </div>
            <p>
              <Translate id="homepage.testimonials.user5.text">
                "Using FunBlocks AIFlow for brainstorming has helped me break through
                mental barriers and generate breakthrough ideas, leading to innovative
                solutions for our marketing strategies."
              </Translate>
            </p>
          </div>

          <div className={styles.testimonialCard}>
            <div className={styles.testimonialHeader}>
              <div className={styles.testimonialAvatar}>
                <span>👩‍🎓</span>
              </div>
              <div className={styles.testimonialInfo}>
                <h4><Translate id="homepage.testimonials.user6.name">Emily R.</Translate></h4>
                <p><Translate id="homepage.testimonials.user6.role">Marketing Manager</Translate></p>
              </div>
            </div>
            <p>
              <Translate id="homepage.testimonials.user6.text">
                "Using FunBlocks AIFlow for brainstorming has helped me break through
                mental barriers and generate breakthrough ideas, leading to innovative
                solutions for our marketing strategies."
              </Translate>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

function CTASection({ toApp }) {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <Heading as="h2">
          <Translate id="homepage.cta.title">Ready to Transform Your Thinking with AI?</Translate>
        </Heading>
        <p>
          <Translate id="homepage.cta.description">
            Try FunBlocks AIFlow today and experience the future of AI-powered innovation and productivity.
          </Translate>
        </p>
        <div className={styles.ctaButtons}>
          <Link
            className={clsx(styles.btn, styles.ctaBtn)}
            to="#"
            onClick={() => toApp()}
          >
            <Translate id="homepage.cta.button">Start Free Trial</Translate>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig, i18n } = useDocusaurusContext();
  const [imageSrc, setImageSrc] = useState(null);

  // Close modal when clicked outside
  const closeModal = () => {
    setImageSrc(null);
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

  function toFlowPlayground() {
    let lng = getLanguage();
    //- openUrl(`https://api.xslides.net/editor.html?hid=demo_${lng}&warzone=playground&lng=${lng}`);
    openUrl(`https://app.funblocks.net/#/aiflow?hid=welcome_to_aiflow_${lng}&lng=${lng}`);
  }

  function toApp() {
    let url = `https://app.${getDomain()}/#/login?source=flow`;
    openUrl(url);
  }

  // Google Analytics tracking code
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-RYTCZEQK0W`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-RYTCZEQK0W');
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Initialize Google Identity Services
      window.google.accounts.id.initialize({
        client_id: '988058218123-enpfsi0n6fo9jqa2aqfr6s37t16loth8.apps.googleusercontent.com',
        callback: handleCredentialResponse
      });
      window.google.accounts.id.prompt(); // Automatically prompt for login
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleCredentialResponse = (response) => {
    // Handle the response from Google
    console.log("Encoded JWT ID token: " + response.credential);
    window.open('https://app.funblocks.net/#/login?g_login_token='+response.credential, '_blank')
  };

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
      <HomepageHeader setImageSrc={setImageSrc} toApp={toApp} />
      <main>
        <BeyondChatGPTSection />
        <DeepenThinkingSection setImageSrc={setImageSrc} />
        <BoostCreativitySection setImageSrc={setImageSrc} />
        <BoostProductivitySection setImageSrc={setImageSrc} />
        <QuickAccessSection />
        <MultiModelSection />
        <UseCasesSection />
        <WorkspaceSection />
        <TestimonialsSection />
        <CTASection toApp={toApp}/>
        <FAQSection
          page={'homepage'}
          faqIds={[
            'q0', 'q01', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8',
            'q9', 'q10', 'q11', 'q12', 'q14', 'q15', 'q16', 'q17', 'q18', 'q19'
          ]}
        />
      </main>
      <Footer />

      {/* Image Modal */}
      {imageSrc && (
        <div className={styles.modal} style={{ display: 'block' }} onClick={closeModal}>
          <span className={styles.close} onClick={closeModal}>&times;</span>
          <img
            className={styles.modalImage}
            src={imageSrc}
            alt={translate({ id: 'modal.alt', message: 'Enlarged view' })}
          />
          <div className={styles.zoomIndicator}>
            <Translate id="modal.click_to_close">Click to close</Translate>
          </div>
        </div>
      )}
    </Layout>
  );
}
