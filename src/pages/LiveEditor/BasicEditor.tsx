import React, { useEffect, useState, useRef } from 'react';
import style from '../../components/BrowserWindow/BrowserWindow.module.css'; 

const BasicEditor= () => {
  const [checker, setChecker] = useState({ html: true, css: false, js: false,settings:false,fontSize:10,fontColor:false,backcolor:false });
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
        <div className='editor_settings_nav'>
          <div className={`editor_settings_menu_con  ${checker.settings?"activate_menu":"deactivate_menu"}`}>
               <div className='editor_settings_menu'>
                 <p>Font Size</p>
                 <button onClick={()=>setChecker(pre=>({...pre,fontSize:pre.fontSize!==30?pre.fontSize+1:pre.fontSize}))}>+</button>
                 <p>{checker.fontSize}</p>
                 <button onClick={()=>setChecker(pre=>({...pre,fontSize:pre.fontSize!==10?pre.fontSize-1:pre.fontSize}))}>-</button>
               </div>
               <div className='editor_settings_menu'>
                <p>color</p>
                <input
                  type="color"
                  value={checker.fontColor}
                  onChange={(e)=>setChecker(pre=>({...pre,fontColor:e.target.value}))} 
                />
               </div>
               <div className='editor_settings_menu'>
               <p>Bakcground color</p>
                <input
                  type="color"
                  value={checker.backcolor}
                  onChange={(e)=>setChecker(pre=>({...pre,backcolor:e.target.value}))}
                />
               </div>
          </div>
          <div className='editor_setting_icon'>
          <img src="https://cdn-icons-png.flaticon.com/128/9333/9333993.png" onClick={()=>setChecker(pre => ({...pre, settings: !pre.settings}))}  alt='settings'/>
          </div>
        </div>
        <textarea style={{fontSize:`${checker.fontSize}pt`,color:checker.fontColor==false?"unset":checker.fontColor,background:checker.backcolor==false?"transparent":checker.backcolor}} className={checker.html ? 'editor_textarea_activate' : 'editor_textarea_deactivate'} value={html} placeholder="HTML" onChange={(e) => setHtml(e.target.value)} />
        <textarea style={{fontSize:`${checker.fontSize}pt`,color:checker.fontColor==false?"unset":checker.fontColor,background:checker.backcolor==false?"transparent":checker.backcolor}} className={checker.css ? 'editor_textarea_activate' : 'editor_textarea_deactivate'} value={css} placeholder="CSS" onChange={(e) => setCss(e.target.value)} />
        <textarea style={{fontSize:`${checker.fontSize}pt`,color:checker.fontColor==false?"unset":checker.fontColor,background:checker.backcolor==false?"transparent":checker.backcolor}} className={checker.js ? 'editor_textarea_activate' : 'editor_textarea_deactivate'} value={js} placeholder="JavaScript" onChange={(e) => setJs(e.target.value)} />
      </div>
      <div className={style.browserWindow} style={{height:"35.3rem",flex:"1 0 30rem",marginTop:"1.3rem"}}>
      <div className={style.browserWindowHeader}>
        <div className={style.buttons}>
          <span className={style.dot} style={{background: '#f25f58'}} />
          <span className={style.dot} style={{background: '#fbbe3c'}} />
          <span className={style.dot} style={{background: '#58cb42'}} />
        </div> 
        <div className={style.browserWindowMenuIcon}>
          <div>
            <span className={style.bar} />
            <span className={style.bar} />
            <span className={style.bar} />
          </div>
        </div>
      </div>
 
      <iframe ref={iframeRef} className='output_container' id="preview" /> 
    </div>
    </div>
  );
}

export default BasicEditor;
