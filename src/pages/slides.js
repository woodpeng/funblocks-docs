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


function SlidesHeader({ toApp }) {
    return (
        <section className={clsx(styles.hero, styles.pageSection)} style={{ backgroundColor: '#c8e5f0' }}>
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Heading as="h1" className={styles.slidesTitle}>
                    <Translate id="slides.masthead.title">Create Smarter, Present Better</Translate>
                </Heading>
                <h2 className={styles.slidesSubtitle}>
                    <Translate id="slides.masthead.subtitle">Unlock your presentation potential with AI-powered slides</Translate>
                </h2>
                {/* <h3 className={styles.slidesTarget}>
                    <Translate id="slides.masthead.target">Designed for professionals who seek excellence in content and efficiency</Translate>
                </h3> */}
                <div className={styles.heroButtons}>
                    <Link
                        className={clsx('button', styles.btn)}
                        to="#"
                        onClick={() => toApp()}
                    >
                        <Translate id="slides.masthead.cta">Try for Free</Translate>
                    </Link>

                </div>
            </div>
        </section>
    );
}

function FeaturesSection({ setShowImageSrc, toDemo }) {
    const features = [
        {
            name: "slides.features.item1.name",
            description: "slides.features.item1.description",
            image: "/img/portfolio/fullsize/slides_markdown.png",
            alt: "Markdown writing feature for efficient slide creation"
        },
        {
            name: "slides.features.item2.name",
            description: "slides.features.item2.description",
            image: "/img/portfolio/fullsize/slides_slash_menu.png",
            alt: "Slash command menu for easy and smooth editing experience"
        },
        {
            name: "slides.features.item3.name",
            description: "slides.features.item3.description",
            image: "/img/portfolio/fullsize/slides.png",
            alt: "AI-powered content generation for high-quality slide creation"
        },
        {
            name: "slides.features.item4.name",
            description: "slides.features.item4.description",
            image: "/img/portfolio/fullsize/slides_notes.png",
            alt: "AI-generated speaker notes for effective presentation delivery"
        },
        {
            name: "slides.features.item5.name",
            description: "slides.features.item5.description",
            image: "/img/portfolio/fullsize/slides_math.png",
            alt: "KaTeX typesetting and code block highlighting for academic and professional presentations"
        },
        {
            name: "slides.features.item6.name",
            description: "slides.features.item6.description",
            image: "/img/portfolio/fullsize/slides_presentation.png",
            alt: "Online sharing and presentation feature for hassle-free collaboration"
        },
        {
            name: "slides.features.item7.name",
            description: "slides.features.item7.description",
            image: "/img/portfolio/fullsize/slides_themes.png",
            alt: "Multiple theme options for professional and versatile presentations"
        },
        {
            name: "slides.features.item8.name",
            description: "slides.features.item8.description",
            image: "/img/portfolio/fullsize/slides_presentation_view.png",
            alt: "Presenter view with timer, next slide preview, and speaker notes"
        }
    ];

    return (
        <section id="features" className={styles.slidesFeatureSection}>
            <div className={styles.slidesContainer}>
                <Heading as="h2" className={styles.sectionTitle}>
                    <Translate id="slides.features.title">Key Features</Translate>
                </Heading>
                <div>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.slidesRow}>
                            <div className={clsx(styles.slidesCol8, { [styles.order2]: index % 2 === 0 })}>
                                <img
                                    className={styles.featureImage}
                                    src={feature.image}
                                    alt={feature.alt}
                                    onClick={() => setShowImageSrc(feature.image)}
                                />
                            </div>
                            <div className={clsx(styles.slidesCol4, { [styles.order1]: index % 2 === 0 })}
                                style={{
                                    justifyContent: 'center',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <i className={clsx("fas fa-chalkboard", styles.slidesFeatureIcon)}></i>
                                <Heading as="h3" className={styles.cardTitle}>
                                    <Translate id={feature.name}>{feature.name}</Translate>
                                </Heading>
                                <p>
                                    <Translate id={feature.description}>{feature.description}</Translate>
                                </p>
                            </div>
                        </div>
                    ))}

                    <div className={styles.slidesRow}>
                        <div className={styles.centerContainer}>
                            <Link className={styles.btn} to="#" onClick={() => toDemo()}>
                                <Translate id="slides.features.more">Click to explore more features and demos</Translate>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function PlatformSynergySection() {
    const synergyFeatures = [
        {
            name: "slides.platform-synergy.point1.name",
            description: "slides.platform-synergy.point1.description"
        },
        {
            name: "slides.platform-synergy.point2.name",
            description: "slides.platform-synergy.point2.description"
        },
        {
            name: "slides.platform-synergy.point3.name",
            description: "slides.platform-synergy.point3.description"
        },
        {
            name: "slides.platform-synergy.point4.name",
            description: "slides.platform-synergy.point4.description"
        }
    ];

    return (
        <section id="platform-synergy" className={styles.slidesAISection} style={{ backgroundColor: 'lightcyan' }}>
            <div className={styles.slidesContainer}>
                <Heading as="h2" className={styles.sectionTitle}>
                    <Translate id="slides.platform-synergy.title">AI Assistant: Your Intelligent Slide Creation Partner</Translate>
                </Heading>
                <h4 className={styles.sectionDescription}>
                    <Translate id="slides.platform-synergy.desc">Collaborate with AI to generate slides, optimize content, and refine your delivery for a truly impactful presentation</Translate>
                </h4>
                <div className={styles.twoColumnGrid}>
                    {synergyFeatures.map((feature, index) => (
                        // <div key={index} className={styles.slidesCol4}>
                        <div key={index} className={styles.slidesCardContent}>
                            {/* <i className={clsx("fas fa-chalkboard", styles.slidesFeatureIcon)}></i> */}
                            <Heading as="h4" className={styles.cardTitle}>
                                <Translate id={feature.name}>{feature.name}</Translate>
                            </Heading>
                            <p>
                                <Translate id={feature.description}>{feature.description}</Translate>
                            </p>
                        </div>
                        // </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function Slides() {
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
        let url = `https://app.${getDomain()}/#/login?source=slides`;
        openUrl(url);
    }

    function toDemo() {
        let url = `https://service.${getDomain()}/present.html?hid=xslides_demo_en`;
        openUrl(url);
    }

    function toPlans() {
        let url = `https://app.${getDomain()}/#/aiplans?source=slides`;
        openUrl(url);
    }

    return (
        <Layout
            title={translate({
                id: 'slides.head.title',
                message: 'FunBlocks AI Slides: Efficient AI Presentation Tool | Designed for Content-Focused Professionals'
            })}
            description={translate({
                id: 'slides.head.description',
                message: 'Create stunning, content-focused presentations effortlessly with FunBlocks AI Slides. Our AI-powered tool combines Markdown simplicity with intelligent design for maximum impact. Ideal for busy professionals.'
            })}
        >
            <SlidesHeader toApp={toApp} />
            <main>
                <IntroSection
                    page="slides"
                    feature={'intro'}
                    pointNos={[1, 2, 3, 4]}
                    imageElement={<div style={{ flex: 4, cursor: 'pointer' }}>
                        <img
                            className={styles.featureImage}
                            src="/img/portfolio/fullsize/slides.png"
                            alt="AI Slides: Effortless slide creation with Markdown, AI, and cloud collaboration"
                            onClick={() => setShowImageSrc("/img/portfolio/fullsize/slides.png")}
                        />
                    </div>} 
                />
                <FeaturesSection setShowImageSrc={setShowImageSrc} toDemo={toDemo} />
                <IntroSection
                    page="slides"
                    feature={'ai-assistant'}
                    pointNos={[1, 2, 3, 4]}
                    imageToRight={true}
                    style={{ backgroundColor: 'aliceblue' }}
                    imageElement={<div style={{ flex: 4, cursor: 'pointer' }}>
                        <img
                            className={styles.featureImage}
                            src="/img/portfolio/fullsize/slides.png"
                            alt="AI Slides: Effortless slide creation with Markdown, AI, and cloud collaboration"
                            onClick={() => setShowImageSrc("/img/portfolio/fullsize/slides.png")}
                        />
                    </div>}
                />
                <PlatformSynergySection />
                {/* <UseCasesSection setShowImageSrc={setShowImageSrc} /> */}
                <IntroSection
                    page="slides"
                    feature={'use-cases'}
                    pointNos={[1, 2, 3, 5, 6]}
                    imageToRight={true}
                    style={{ backgroundColor: 'aliceblue' }}
                    imageElement={<div style={{ flex: 2, cursor: 'pointer' }}>
                        <img
                            className={styles.featureImage}
                            src="/img/portfolio/fullsize/aiflow_slides_generation.png"
                            alt="AI-powered slide generation process with AIFlow brainstorming and mindmap exploration"
                            onClick={() => setShowImageSrc("/img/portfolio/fullsize/aiflow_slides_generation.png")}
                        />
                    </div>}
                />
                <TestimonialsSection avatars={["👩‍🏫", "👨‍💼", "👨‍🎓", "🧑‍💻", "👩‍🎓", "👨‍💼"]} page={"slides"} />
                <CTASection toApp={toApp} page={'slides'} />
                <FAQSection
                    page={'slides'}
                    faqIds={[
                        'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8',
                        'q9', 'q10', 'q11', 'q12', 'q13', 'q14', 'q15', 'q16',
                        'q17', 'q18'
                    ]}
                />
            </main>
            <Footer />

            {/* Image Modal */}
            {showImageSrc && <ImageModal imageSrc={showImageSrc} setImageSrc={setShowImageSrc} />}
            <GoogleAccountAnalytics />
        </Layout>
    );
} 