import React from 'react';
import { useLocation } from '@docusaurus/router';
import styles from './index.module.css';
import clsx from 'clsx';

export default function LoginButton() {
    const location = useLocation();

    let href = 'https://app.funblocks.net/#/login';

    let source = 'flow'
    if (location.pathname.startsWith('/aidocs')) {
        source = undefined;
    } else if (location.pathname.startsWith('/slides')) {
        source = 'slides';
    } else if (location.pathname.startsWith('/welcome_extension')) {
        source = 'extension';
    }

    if(source) {
        href += `?source=${source}`
    }

    return (
        <div>
            <div className={clsx(styles.btn, styles.btnSm)} href={href} onClick={() => {
                window.open(href, '_blank')
            }}>
                Login
            </div>
        </div>
    );
}
