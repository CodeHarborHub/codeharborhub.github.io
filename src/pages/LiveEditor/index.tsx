import React,{useEffect, useState} from "react";
import Layout from "@theme/Layout";

export default function LiveEditor() {
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
        />
      </div>
    </Layout>
  );
}