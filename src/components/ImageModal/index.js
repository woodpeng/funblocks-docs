import React, { useMemo, useState } from 'react';
import clsx from 'clsx';
import Translate, { translate } from '@docusaurus/Translate';
import styles from './index.module.css';

function ImageModal({ imageSrc, setImageSrc }) {
  const closeModal = () => {
    setImageSrc(null);
  };

  return (
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
  );
}

export default ImageModal