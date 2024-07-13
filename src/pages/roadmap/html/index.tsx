import React from "react";
import Layout from "@theme/Layout";

export default function HTML() {
  return (
    <Layout>
      <div className="roadmap-container">
        <h1 className="roadmap-title">HTML Roadmap</h1>

        <div className="roadmap-section">
          <h2 className="section-title">Beginner</h2>
          <ul>
            <li>
              <div className="sub-section-title">Introduction to HTML</div>
              <ul>
                <li>What is HTML?</li>
                <li>Basic structure of an HTML document</li>
                <li>HTML elements and tags</li>
              </ul>
            </li>
            <li>
              <div className="sub-section-title">Text Formatting</div>
              <ul>
                <li>Headings</li>
                <li>Paragraphs</li>
                <li>Bold, Italics, Underline</li>
                <li>Lists (ordered and unordered)</li>
              </ul>
            </li>
            <li>
              <div className="sub-section-title">Links and Images</div>
              <ul>
                <li>Creating hyperlinks</li>
                <li>Adding images</li>
                <li>Image attributes</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="roadmap-section">
          <h2 className="section-title">Intermediate</h2>
          <ul>
            <li>
              <div className="sub-section-title">Tables</div>
              <ul>
                <li>Creating tables</li>
                <li>Table headers, rows, and cells</li>
                <li>Table attributes</li>
              </ul>
            </li>
            <li>
              <div className="sub-section-title">Forms</div>
              <ul>
                <li>Form elements (input, textarea, button)</li>
                <li>Form attributes</li>
                <li>Form validation</li>
              </ul>
            </li>
            <li>
              <div className="sub-section-title">Multimedia</div>
              <ul>
                <li>Audio and video elements</li>
                <li>Embedding YouTube videos</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="roadmap-section">
          <h2 className="section-title">Advanced</h2>
          <ul>
            <li>
              <div className="sub-section-title">HTML5 Semantic Elements</div>
              <ul>
                <li>Header, Footer, Nav, Section, Article, Aside</li>
              </ul>
            </li>
            <li>
              <div className="sub-section-title">Canvas and SVG</div>
              <ul>
                <li>Drawing with Canvas</li>
                <li>Creating Scalable Vector Graphics (SVG)</li>
              </ul>
            </li>
            <li>
              <div className="sub-section-title">Web APIs</div>
              <ul>
                <li>Geolocation API</li>
                <li>Drag and Drop API</li>
                <li>Web Storage API (localStorage and sessionStorage)</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="roadmap-section">
          <h2 className="section-title">Resources</h2>
          <ul>
            <li>
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                MDN Web Docs: HTML
              </a>
            </li>
            <li>
              <a href="https://www.w3schools.com/html/">
                W3Schools: HTML Tutorial
              </a>
            </li>
            <li>
              <a href="https://html.com/">HTML.com</a>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
