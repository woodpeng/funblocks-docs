import styles from './index.module.css';

function Footer() {
    return (
      <footer>
        <div className="container">
          <div className={styles.footerContainer}>
            <div className={styles.footerLinks} style={{ marginRight: "20px" }}>
              <span className="footer-logo">FunBlocks</span>
              <p data-i18n="footer.description" style={{ color: "#bbb" }}>
                An AI-powered platform for visualization-enhanced thinking and productivity.
              </p>
            </div>
            
            <div className={styles.footerLinks}>
              <h4 data-i18n="footer.product">FunBlocks AI Products</h4>
              <ul>
                <li>
                  <a href="/aiflow.html">FunBlocks AI Flow</a>
                </li>
                <li>
                  <a href="/aitools">FunBlocks AI Tools</a>
                </li>
                <li>
                  <a href="/welcome_extension.html">FunBlocks AI Extension</a>
                </li>
                <li>
                  <a href="/slides.html">FunBlocks AI Slides</a>
                </li>
                <li>
                  <a href="/workspace.html">FunBlocks AI Workspace</a>
                </li>
              </ul>
            </div>
            
            <div className={styles.footerLinks}>
              <h4 data-i18n="footer.resources">Resources</h4>
              <ul>
                <li>
                  <a href="https://blog.funblocks.net">FunBlocks AI Blog</a>
                </li>
                <li>
                  <a href="https://app.funblocks.net/shares">FunBlocks AI Generated Content</a>
                </li>
                <li>
                  <a href="https://www.funblocks.net/aitools/collections/Reading">Classic Book Mindmaps</a>
                </li>
                <li>
                  <a href="https://www.funblocks.net/aitools/collections/Movie">Classic Movie Mindmaps</a>
                </li>
              </ul>
            </div>
            
            <div className={styles.footerLinks}>
              <h4 data-i18n="footer.company">Company</h4>
              <ul>
                <li>
                  <a href="https://discord.gg/XtdZFBy4uR" target="_blank">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className={styles.footerContainer}>
            <div className={styles.footerLinks}>
              <h4 data-i18n="footer.resources">FunBlocks AI Tools</h4>
              <div className={styles.toolsGrid}>
                <a href="https://funblocks.net/aitools/slides" target="_blank">AI Slides</a>
                <a href="https://funblocks.net/aitools/mindmap" target="_blank">AI Mindmap</a>
                <a href="https://funblocks.net/aitools/brainstorming" target="_blank">AI Brainstorming</a>
                <a href="https://funblocks.net/aitools/mindkit" target="_blank">AI MindKit</a>
                <a href="https://funblocks.net/aitools/youtube" target="_blank">AI Youtube Summarizer</a>
                <a href="https://funblocks.net/aitools/feynman" target="_blank">AI Feynman</a>
                <a href="https://funblocks.net/aitools/critical-thinking" target="_blank">AI Critical Thinking Coach</a>
                <a href="https://funblocks.net/aitools/refine-question" target="_blank">AI Question Craft</a>
                <a href="https://funblocks.net/aitools/bias" target="_blank">AI LogicLens</a>
                <a href="https://funblocks.net/aitools/reflection" target="_blank">AI Reflection</a>
                <a href="https://funblocks.net/aitools/decision" target="_blank">AI Decision Analyzer</a>
                <a href="https://funblocks.net/aitools/okr" target="_blank">AI OKR Assistant</a>
                <a href="https://funblocks.net/aitools/startupmentor" target="_blank">AI Startup Mentor</a>
                <a href="https://funblocks.net/aitools/businessmodel" target="_blank">AI Business Model Analyzer</a>
                <a href="https://funblocks.net/aitools/planner" target="_blank">AI Task Planner</a>
                <a href="https://funblocks.net/aitools/counselor" target="_blank">AI Counselor</a>
                <a href="https://funblocks.net/aitools/dreamlens" target="_blank">AI DreamLens</a>
                <a href="https://funblocks.net/aitools/horoscope" target="_blank">AI Horoscope</a>
                <a href="https://funblocks.net/aitools/art" target="_blank">AI Art Insight</a>
                <a href="https://funblocks.net/aitools/photo" target="_blank">AI Photo Coach</a>
                <a href="https://funblocks.net/aitools/poetic" target="_blank">AI Poetic Lens</a>
                <a href="https://funblocks.net/aitools/avatar" target="_blank">AI Avatar Studio</a>
                <a href="https://funblocks.net/aitools/erase" target="_blank">AI Watermarks Remover</a>
                <a href="https://funblocks.net/aitools/reading" target="_blank">AI Reading Map</a>
                <a href="https://funblocks.net/aitools/movie" target="_blank">AI CineMap</a>
                <a href="https://funblocks.net/aitools/marzano" target="_blank">AI Marzano Taxonomy</a>
                <a href="https://funblocks.net/aitools/bloom" target="_blank">AI Bloom Taxonomy</a>
                <a href="https://funblocks.net/aitools/solo" target="_blank">AI SOLO Taxonomy</a>
                <a href="https://funblocks.net/aitools/dok" target="_blank">AI DOK Taxonomy</a>
              </div>
            </div>
          </div>
          
          <div className={styles.copyright}>
            <p data-i18n="footer.copyright">&copy; 2025 FunBlocks AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;