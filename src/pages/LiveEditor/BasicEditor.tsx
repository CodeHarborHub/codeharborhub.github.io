import React, { useEffect, useState, useRef } from 'react';

const BasicEditor: React.FC = () => {
  const [checker, setChecker] = useState({ html: true, css: false, js: false });
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    if (!iframeRef.current) {
      alert("iframeRef is not available");
      return;
    }
    
    const iframe = iframeRef.current;
    const document = iframe.contentDocument;

    if (!document) {
      alert("iframe contentDocument is not available");
      return;
    }

    const documentContents = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}</script>
      </body>
      </html>
    `;

    document.open();
    document.write(documentContents);
    document.close();
  }, [html, css, js]);

  return (
    <div className='normal_editor'> 
      <div className='editor_box'>
        <div className='editor_nav'>
          <button className={!checker.html ? 'btn_activated html' : 'btn_deactivated'} onClick={() => setChecker({ html: true, css: false, js: false })}>HTML</button>
          <button className={!checker.css ? 'btn_activated css' : 'btn_deactivated'} onClick={() => setChecker({ html: false, css: true, js: false })}>CSS</button>
          <button className={!checker.js ? 'btn_activated js' : 'btn_deactivated'} onClick={() => setChecker({ html: false, css: false, js: true })}>JS</button>
        </div>
        <textarea className={checker.html ? 'editor_textarea_activate' : 'editor_textarea_deactivate'} value={html} placeholder="HTML" onChange={(e) => setHtml(e.target.value)}></textarea>
        <textarea className={checker.css ? 'editor_textarea_activate' : 'editor_textarea_deactivate'} value={css} placeholder="CSS" onChange={(e) => setCss(e.target.value)}></textarea>
        <textarea className={checker.js ? 'editor_textarea_activate' : 'editor_textarea_deactivate'} value={js} placeholder="JavaScript" onChange={(e) => setJs(e.target.value)}></textarea>
      </div>
      <iframe ref={iframeRef} className='output_container' id="preview"></iframe>
    </div>
  );
}

export default BasicEditor;
