import React, { useState } from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import styles from './index.module.css';

import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

function CTASection({ page, toApp }) {
  return (
    <section id="cta" className={styles.ctaSection}>
      <div className="container">
        <Heading as="h2">
          <Translate id={`${page}.cta.title`}>Ready to Embark on a Knowledge Adventure?</Translate>
        </Heading>
        <p>
          <Translate id={`${page}.cta.subtitle`}>Join FunBlocks AIFlow and unleash your limitless cognitive potential!</Translate>
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

  export default CTASection