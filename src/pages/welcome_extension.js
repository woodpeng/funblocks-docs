import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';
import Head from '@docusaurus/Head';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import Footer from '../components/Footer';
import FAQSection from '../components/FAQSection';
import ImageModal from '../components/ImageModal';
import GoogleAccountAnalytics from '../components/GoogleAccountAnalytics';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import { useMediaQuery } from 'react-responsive';

function WelcomeHeader() {
    const { i18n } = useDocusaurusContext();
    const isChinese = i18n.currentLocale === 'zh-CN';

    return (
        <section className={clsx(styles.hero, styles.pageSection)} style={{ backgroundColor: 'honeydew'}}>
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                rowGap: 30
            }}>
                <Heading as="h1" className="mt-0 mb-3 text-center">
                    <Translate id="extension_welcome.pin.title">Start Your FunBlocks AI Journey</Translate>
                </Heading>
                <h3 className="mt-0 mb-3">
                    <Translate id="extension_welcome.pin.desc">Make AI your ultimate browsing companion</Translate>
                </h3>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <div className="col-sm flex-column justify-content-center">
                        <ol>
                            <li style={{ fontSize: '18px' }}>
                                <Translate id="extension_welcome.pin.li1">Click the extension icon in your browser's top-right corner</Translate>
                            </li>
                            <li style={{ fontSize: '18px' }}>
                                <Translate id="extension_welcome.pin.li2">Pin FunBlocks AI to your toolbar</Translate>
                            </li>
                            <li style={{ fontSize: '18px' }}>
                                <Translate id="extension_welcome.pin.li3">Your AI assistant is now ready to help anytime</Translate>
                            </li>
                        </ol>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        maxWidth: '600px'
                    }}>
                        <div style={{ marginRight: '10px' }}>
                            <img
                                className={clsx(styles.featureImage, "shadow-lg")}
                                src="/img/portfolio/fullsize/pin_extension.png"
                                alt="Pin extension to browser toolbar"
                            />
                        </div>
                        <div>
                            <img
                                className={clsx(styles.featureImage, "shadow-lg")}
                                src="/img/portfolio/fullsize/quick_extension.png"
                                alt="Quick access to extension"
                            />
                        </div>
                    </div>

                </div>

                <div className="mt-3">
                    <Link className="nav-link js-scroll-trigger" to="#settings">
                        <span style={{ fontSize: 20, fontWeight: 'bold' }}>
                            <Translate id="extension_welcome.pin.more">Explore more powerful features of FunBlocks AI below ⬇️</Translate>
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

function SettingsSection({ setShowImageSrc }) {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <section className={styles.featureSection} style={{ backgroundColor: 'azure' }}>
            <div className="container">
                <Heading as="h2" className={styles.sectionTitle}>
                    <Translate id="extension_welcome.settings.title">AI-Powered Brainstorming</Translate>
                </Heading>
                <p className={styles.sectionDescription}>
                    <Translate id="extension_welcome.settings.subtitle">Boost creativity with AI-assisted classic thinking models</Translate>
                </p>

                <div className={styles.featureGrid} style={{
                    display: isMobile ? 'block' : 'flex',
                    flexDirection: 'row-reverse'
                }}>
                    <div style={{ cursor: 'pointer', flex: 4 }}>
                        <img
                            className={styles.featureImage}
                            id="aiflow-brainstorming"
                            alt="Various AI models and LLM providers available in FunBlocks AI"
                            src="/img/portfolio/fullsize/settings_llm_provider.png"
                        />
                    </div>

                    <div className={styles.featureContent} style={{
                        flex: 2,
                        marginTop: isMobile ? '15px' : undefined
                    }}>

                        <Heading as="h3" style={{ paddingTop: '10px' }}>
                            <Translate id="extension_welcome.settings.inbox_llms.title">Ideation with Classic Thinking Models</Translate>
                        </Heading>
                        {/* <p>
                <Translate id="aiflow.ai-powered-brainstorming.oneclick_generation.subtitle">AI-powered brainstorming with structured frameworks</Translate>
              </p> */}
                        <ul className={styles.featureList}>
                            <li>
                                <Translate id="extension_welcome.settings.inbox_llms.li1">Presentation Slides</Translate>
                            </li>
                            <li>
                                <Translate id="extension_welcome.settings.inbox_llms.li2">Solution Document</Translate>
                            </li>
                            <li>
                                <Translate id="extension_welcome.settings.inbox_llms.li3">Solution Document</Translate>
                            </li>
                        </ul>

                        <Heading as="h3" style={{ paddingTop: '10px' }}>
                            <Translate id="extension_welcome.settings.private_llms.title">Ideation with Classic Thinking Models</Translate>
                        </Heading>
                        {/* <p>
                <Translate id="aiflow.ai-powered-brainstorming.oneclick_generation.subtitle">AI-powered brainstorming with structured frameworks</Translate>
              </p> */}
                        <ul className={styles.featureList}>
                            <li>
                                <Translate id="extension_welcome.settings.private_llms.li1">Presentation Slides</Translate>
                            </li>
                            <li>
                                <Translate id="extension_welcome.settings.private_llms.li2">Solution Document</Translate>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

function ReadingSection({ }) {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <section className={styles.featureSection}>
            <div className="container">
                <Heading as="h2" className={styles.sectionTitle}>
                    <Translate id="extension_welcome.reading.title">AI-Powered Brainstorming</Translate>
                </Heading>
                <p className={styles.sectionDescription}>
                    <Translate id="extension_welcome.reading.subtitle">Boost creativity with AI-assisted classic thinking models</Translate>
                </p>

                <div className={styles.featureGrid} style={{
                    display: isMobile ? 'block' : 'flex'
                }}>
                    <div style={{ cursor: 'pointer', flex: 4 }}>
                        <img
                            className={styles.featureImage}
                            id="aiflow-brainstorming"
                            alt="FunBlocks AI sidebar assistant interface for enhanced reading and critical thinking"
                            src='/img/portfolio/fullsize/ai_reading_en.png'
                        />
                    </div>
                    <div className={styles.featureContent} style={{
                        flex: 3,
                        marginTop: isMobile ? '15px' : undefined
                    }}>
                        <Heading as="h3">
                            <Translate id="extension_welcome.reading.critical_thinking">Ideation with Classic Thinking Models</Translate>
                        </Heading>
                        {/* <p>
                <Translate id="aiflow.ai-powered-brainstorming.classic_models.subtitle">AI-powered brainstorming with structured frameworks</Translate>
              </p> */}
                        <ul className={styles.featureList}>
                            <li>
                                <Translate id="extension_welcome.reading.ct1">Six Thinking Hats</Translate>
                            </li>
                            <li>
                                <Translate id="extension_welcome.reading.ct2">SWOT Analysis</Translate>
                            </li>
                            <li>
                                <Translate id="extension_welcome.reading.ct3">McKinsey Method</Translate>
                            </li>
                            {/* <li>
                  <Translate id="aiflow.ai-powered-brainstorming.classic_models.m4">First Principles</Translate>
                </li> */}
                            {/* <li>
                  <Translate id="aiflow.ai-powered-brainstorming.classic_models.m5">SWOT Analysis</Translate>
                </li> */}
                        </ul>

                        <Heading as="h3" style={{ paddingTop: '10px' }}>
                            <Translate id="extension_welcome.reading.desc">Ideation with Classic Thinking Models</Translate>
                        </Heading>
                        {/* <p>
                <Translate id="aiflow.ai-powered-brainstorming.oneclick_generation.subtitle">AI-powered brainstorming with structured frameworks</Translate>
              </p> */}
                        <ul className={styles.featureList}>
                            <li>
                                <Translate id="extension_welcome.reading.li1">Presentation Slides</Translate>
                            </li>
                            <li>
                                <Translate id="extension_welcome.reading.li2">Solution Document</Translate>
                            </li>
                            <li>
                                <Translate id="extension_welcome.reading.li3">Infographics</Translate>
                            </li>
                            <li>
                                <Translate id="extension_welcome.reading.li4">Images</Translate>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ContextualSection() {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <section className={styles.featureSection} style={{ backgroundColor: 'azure' }}>
            <div className="container">
                <Heading as="h2" className={styles.sectionTitle}>
                    <Translate id="extension_welcome.contextual.title">AI-Powered Brainstorming</Translate>
                </Heading>
                <p className={styles.sectionDescription}>
                    <Translate id="extension_welcome.contextual.subtitle">Boost creativity with AI-assisted classic thinking models</Translate>
                </p>

                <div className={styles.featureGrid} style={{
                    display: isMobile ? 'block' : 'flex',
                    flexDirection: 'row-reverse',
                    width: '100%',
                    gap: '2rem'
                }}>
                    <div style={{ cursor: 'pointer', flex: 4 }}>
                        <img
                            className={styles.featureImage}
                            // style={{ width: '400px' }}
                            src="/img/portfolio/fullsize/contextual_toolbar.png"
                            alt="FunBlocks AI contextual toolbar for quick text-based actions"
                        />
                    </div>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        flex: 3,
                        textAlign: 'end'
                    }}>
                        <Heading as="h3" style={{ paddingTop: '10px' }}>
                            <Translate id="extension_welcome.contextual.toolbar">Try it now, select the text below:</Translate>
                        </Heading>
                        <span className="text-right">
                            <Translate id="extension_welcome.contextual.toolbar_desc">
                                Translate, explain, polish, and continue writing with one click - AI assistant always at the ready
                            </Translate>
                        </span>
                        <Heading as="h4" style={{ paddingTop: '10px', color: 'dodgerblue' }}>
                            <Translate id="extension_welcome.contextual.try_now">Try it now, select the text below:</Translate>
                        </Heading>
                        <span className="mb-3" style={{ backgroundColor: 'white', padding: '5px 10px', borderRadius: '8px' }}>
                            <Translate id="extension_welcome.contextual.select_text">
                                FunBlocks AI: Your all-in-one smart reading and writing assistant
                            </Translate>
                        </span>
                    </div>


                </div>

                <div className={styles.featureGrid} style={{
                    display: isMobile ? 'block' : 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    gap: '2rem',
                    marginTop: '6rem'
                }}>
                     <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'end',
                        gap: 10,
                        flex: 4
                    }}>
                        <img
                            className={clsx(styles.featureImage, "mb-3", "shadow-lg")}
                            style={{ width: '400px' }}
                            src="/img/portfolio/fullsize/contextual_widget_email.png"
                            alt="FunBlocks AI email widget for generating replies in Gmail"
                        />
                        <img
                            className={clsx(styles.featureImage, "mb-2", "shadow-lg")}
                            style={{ width: '400px' }}
                            src="/img/portfolio/fullsize/contextual_widget_video.png"
                            alt="FunBlocks AI video widget for summarizing YouTube content"
                        />
                    </div>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 3,
                    }}>
                        <Heading as="h3" style={{ paddingTop: '10px' }}>
                            <Translate id="extension_welcome.contextual.widget">Try it now, select the text below:</Translate>
                        </Heading>
                        <span className="text-right">
                            <Translate id="extension_welcome.contextual.widget_desc">
                                Translate, explain, polish, and continue writing with one click - AI assistant always at the ready
                            </Translate>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

function WritingSection() {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    return (
        <section id="writing" className={styles.featureSection} style={{ backgroundColor: 'floralwhite' }}>
            <div className="container">
                 <Heading as="h2" className={styles.sectionTitle}>
                    <Translate id="extension_welcome.writing.title">AI-Powered Brainstorming</Translate>
                </Heading>
                <p className={styles.sectionDescription}>
                    <Translate id="extension_welcome.writing.subtitle">Boost creativity with AI-assisted classic thinking models</Translate>
                </p>

                <div className={styles.featureGrid}>
                    <div className="d-flex flex-column align-items-end mb-3">
                        <textarea
                            id="editor_demo"
                            rows={isMobile? 10 : 20}
                            style={{ width: '100%', outline: 'none', padding: '8px' }}
                            defaultValue="Play with FunBlocks AI Writing Assistant here"
                        />
                    </div>
                    <div className="d-flex flex-column align-items-start justify-content-between">
                        <div>
                            <h3>
                                <Translate id="writing.methods">Multiple ways to activate AI writing:</Translate>
                            </h3>
                            <ul style={{ fontSize: '18px' }}>
                                <li>
                                    <Translate id="writing.li1">Select text to bring up the toolbar</Translate>
                                </li>
                                <li>
                                    <Translate id="writing.li2">Click the blue icon in the bottom right</Translate>
                                </li>
                                <li>
                                    <Translate id="writing.li3">Type '/' for quick commands</Translate>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3>
                                <Translate id="writing.features">Core Features</Translate>
                            </h3>
                            <ul style={{ fontSize: '18px' }}>
                                <li>
                                    <Translate id="writing.f1">One-click topic-based article generation</Translate>
                                </li>
                                <li>
                                    <Translate id="writing.f2">Text polishing and grammar correction</Translate>
                                </li>
                                <li>
                                    <Translate id="writing.f3">Flexible continuation and content expansion</Translate>
                                </li>
                                <li>
                                    <Translate id="writing.f4">Context-aware AI replies (email, social media, etc.)</Translate>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default function WelcomeExtension() {
    const { siteConfig, i18n } = useDocusaurusContext();
    const [showImageSrc, setShowImageSrc] = useState(null);

    const getDomain = () => {
        if (!window.location.hostname.includes('funblocks')) {
            return 'funblocks.net';
        }
        return window.location.hostname.replace('www.', '');
    };

    const openUrl = (url) => {
        let newTab = window.open();
        newTab.location.href = url;
    };

    const toApp = () => {
        let url = `https://app.${getDomain()}/#/login?source=extension`;
        openUrl(url);
    };

    const toPlans = () => {
        let url = `https://app.${getDomain()}/#/aiplans?source=extension`;
        openUrl(url);
    };

    const [browser, setBrowser] = useState('Browser');

    useEffect(() => {
        const detectBrowser = () => {
            const userAgent = navigator.userAgent;
            if (userAgent.includes("Edg")) {
                return 'Edge';
            } else if (userAgent.includes("Chrome")) {
                return 'Chrome';
            }
            return 'Browser';
        };

        setBrowser(detectBrowser());
    }, []);

    const downloadExtension = () => {
        if (browser === 'Edge') {
            window.open("https://microsoftedge.microsoft.com/addons/detail/funblocks-ai-your-ultim/lmmlojdklhcdiefaniakpkhhdmamnigk", '_blank');
        } else if (browser === "Chrome") {
            window.open("https://chrome.google.com/webstore/detail/coodnehmocjfaandkbeknihiagfccoid", '_blank');
        } else {
            alert("We only support Chrome and Edge browsers. It is recommended to use Chrome for the best experience.");
        }
    };

    return (
        <Layout
            title={translate({
                id: 'head.title',
                message: "FunBlocks AI - Smart Reading & Writing Assistant: Boost Productivity, Spark Creativity"
            })}
            description={translate({
                id: 'head.description',
                message: "FunBlocks AI Extension: Your smart AI assistant for enhanced reading, writing, and thinking. Features AI Writing, Mind Flow, Reading assistance, and Memo. Compatible with ChatGPT, Claude, Gemini Pro. Boost productivity across all websites"
            })}
        >
            <WelcomeHeader />
            <SettingsSection />
            <ReadingSection />
            <ContextualSection />
            <WritingSection />
            <CTASection page={'extension_welcome'} toApp={downloadExtension} />
            <TestimonialsSection avatars={["👩‍🏫", "👨‍💼", "👨‍🎓", "🧑‍💻", "👩‍🎓", "👨‍💼"]} page={"extension_welcome"} />

            <FAQSection
                page={'extension_welcome'}
                faqIds={[
                    'q1', 'q2', 'q3', 'q4', 'q5', 'q8', 'q10', 'q11', 'q12',
                    'q13', 'q14', 'q15', 'q16', 'q17', 'q18'
                ]}
            />

            <Footer />
            {showImageSrc && <ImageModal imageSrc={showImageSrc} setImageSrc={setShowImageSrc} />}
            <GoogleAccountAnalytics />
        </Layout>
    );
} 