import React, { useState } from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import styles from './index.module.css';

function FAQItem({ page, questionId, answerId }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={clsx(styles.faqItem, { [styles.active]: isOpen })}>
      <div className={styles.faqQuestion} onClick={toggleFaq}>
        <span style={{ fontWeight: 'normal' }}>
          <Translate id={`${page}.faq.${questionId}`} />
        </span>
        <div
          className={styles.faqArrow}
          style={{ transform: isOpen ? 'rotate(90deg)' : 'none' }}
        >
          &#9654;
        </div>
      </div>
      <div
        className={styles.faqAnswer}
        style={{
          whiteSpace: 'pre-line',
          display: isOpen ? 'block' : 'none'
        }}
      >
        <Translate id={`${page}.faq.${answerId}`} />
      </div>
    </div>
  );
}

function FAQSection({ page, faqIds }) {
  return (
    <section id="faqs" className={clsx('page-section', styles.faqSection)} style={{ backgroundColor: 'var(--gray)' }}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          <Translate id={`${page}.faq.title`}>Frequently Asked Questions</Translate>
        </h2>
        <div className={styles.faqContainer}>
          {faqIds.map((q) => (
            <FAQItem
              key={q}
              page={page}
              questionId={q}
              answerId={`a${q.slice(1)}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;