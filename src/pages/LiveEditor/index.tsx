import React,{useState,useEffect} from "react";
import Layout from "@theme/Layout";
import  "./index.css";
import BasicEditor from "./BasicEditor";
const html="/icons/html-5.svg"
const css="/icons/css.svg"
const Js="/icons/js.svg"
const react="/icons/jsx.svg"
export default function LiveEditor() {
  const [state,setState]=useState("none")
  const [Theme,setNewTheme]=useState("dark") 

  useEffect(() => {
    const htmlElement = document.documentElement;

    // Function to update theme
    const updateTheme = () => {
      const newTheme = htmlElement.getAttribute('data-theme'); 

      if (newTheme === 'dark') {
        setNewTheme("dark")
      } else {
       setNewTheme("light")
      }
    };

    // Initial theme setup
    updateTheme(); 
    const observer = new MutationObserver(() => {
      updateTheme();
    });

    observer.observe(htmlElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <Layout>
      <div
        style={{
          margin: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {state==="none"?
        <div className="editor_select_container">
          <div className="editor_container" onClick={()=>setState("basic")}>
            <h2 className="editor_selcet_text">HTML CSS JS Editor</h2>
            <div className="editor_select_imgage_container">
            <img src={html} alt="html" className="editor_select_image" />
              <h2>HTML</h2>
            </div>
            <div className="editor_select_imgage_container">
              <img src={css} alt="css" className="editor_select_image" />
              <h2>CSS</h2>
            </div>
            <div className="editor_select_imgage_container">
            <img src={Js} alt="js" className="editor_select_image" />
            <h2>JavaScript</h2>
            </div>
          </div>
          <div className="editor_container" onClick={()=>setState("advance")}>
          <h2 className="editor_selcet_text">React.Js Editor</h2>
          <div className="editor_select_imgage_container">
          <img src={react} alt="react" className="editor_select_image"/>
          <h2>React.JS</h2>
          </div>
            </div>
          </div>
          :state==="advance"?
         <iframe
         src={`https://codesandbox.io/embed/github/Ajay-Dhangar/my-react-app/main?fontsize=14&hidenavigation=1&theme=${Theme==="dark"?"dark":"light"}`}
          style={{
            width: "100%",
            height: "600px",
            border: "0",
            borderRadius: 8,
            overflow: "hidden",
            position: "static",
            zIndex: 0,
          }}
          className="shadow-2xl"
          title="dazzling-swanson-wne32"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        /> :<BasicEditor />
}
      </div>
    </Layout>
  );
}
