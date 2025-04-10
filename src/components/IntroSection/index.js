import React, { useMemo, useState } from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import styles from './index.module.css';
import { useMediaQuery } from 'react-responsive';
import Heading from '@theme/Heading';

function IntroSection({ page, feature, pointNos, imageElement, imageToRight, style }) {
    // 移除 useMediaQuery，我们将使用纯CSS实现响应式
    const points = useMemo(() => pointNos.map(i => ({
        title: `${page}.${feature}.point${i}.name`,
        description: `${page}.${feature}.point${i}.description`,
    })), [page, feature, pointNos])

    // 使用CSS类控制布局方向，而不是内联样式
    const gridClassName = `${styles.featureGrid} ${imageToRight ? styles.imageRight : styles.imageLeft}`;

    return (
        <section className={styles.featureSection} style={style}>
            <div className="container">
                <Heading as="h2" className={styles.sectionTitle}>
                    <Translate id={`${page}.${feature}.title`}>Beyond ChatGPT</Translate>
                </Heading>
                <p className={styles.sectionDescription}>
                    <Translate id={`${page}.${feature}.description`}>Discover innovative ways to engage with AI beyond text. Visualize your thoughts and AI outputs in formats that enhance your cognitive process.</Translate>
                </p>
                <div className={gridClassName}>
                    {imageElement}
                    <div className={styles.featureContent}>
                        {points.map((point, index) => (
                            <div key={index} className={styles.benefitItem}>
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