import React, { useEffect } from 'react';


function GoogleAccountAnalytics() {
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
    // console.log("Encoded JWT ID token: " + response.credential);
    window.open('https://app.funblocks.net/#/login?g_login_token=' + response.credential, '_blank')
  };

  return <></>;
}

export default GoogleAccountAnalytics