import React from 'react';

// 创建一个可以在服务端渲染时安全使用的组件
function GoogleAccountAnalytics() {
  // 处理Google身份验证响应的函数
  const handleCredentialResponse = `
    function handleCredentialResponse(response) {
      window.open('https://app.funblocks.net/#/login?g_login_token=' + response.credential, '_blank');
    }
  `;

  // 初始化Google Analytics的脚本
  const gaInitScript = `
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-RYTCZEQK0W');
  `;

  // 初始化Google Identity Services的脚本
  const gisInitScript = `
    if (typeof window.google !== 'undefined' && window.google.accounts) {
      window.google.accounts.id.initialize({
        client_id: '988058218123-enpfsi0n6fo9jqa2aqfr6s37t16loth8.apps.googleusercontent.com',
        callback: handleCredentialResponse
      });
      window.google.accounts.id.prompt();
    }
  `;

  // 客户端初始化脚本 - 只在浏览器环境执行
  const clientInitScript = `
    if (typeof window !== 'undefined') {
      ${handleCredentialResponse}

      // 加载Google Analytics脚本
      const gaScript = document.createElement('script');
      gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-RYTCZEQK0W';
      gaScript.async = true;
      document.head.appendChild(gaScript);
      ${gaInitScript}

      // 加载Google Identity Services脚本
      const gisScript = document.createElement('script');
      gisScript.src = 'https://accounts.google.com/gsi/client';
      gisScript.async = true;
      gisScript.defer = true;
      document.body.appendChild(gisScript);
      
      gisScript.onload = function() {
        ${gisInitScript}
      };
    }
  `;

  return (
    <>
      {/* 使用dangerouslySetInnerHTML将脚本注入页面 */}
      <script dangerouslySetInnerHTML={{ __html: clientInitScript }} />
    </>
  );
}

export default GoogleAccountAnalytics;