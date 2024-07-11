import React from "react";
import Layout from "@theme/Layout";
import "./index.css";

export default function JsRoadmap(){
    return(
    <Layout>
        <center><h1 className="roadmap-title">JavaScript Roadmap</h1></center>
           
    <section className="roadmap">
        <h2>Introduction to JavaScript</h2>
        <ul>
            <li><a href="#what-is-javascript">What is JavaScript?</a></li>
            <li><a href="#history-of-javascript">History of JavaScript</a></li>
        </ul>

        <h2>Beginner Topics</h2>
        <ul>
            <li><a href="#javascript-versions">JavaScript Versions</a></li>
            <li><a href="#all-about-variables">All About Variables</a></li>
            <li><a href="#variable-declarations">Variable Declarations</a></li>
            <li><a href="#variable-naming-rules">Variable Naming Rules</a></li>
            <li><a href="#hoisting">Hoisting</a></li>
            <li><a href="#data-types">Data Types</a></li>
            <li><a href="#how-to-run-javascript">How to run JavaScript?</a></li>
        </ul>

        <h2>Intermediate Topics</h2>
        <ul>
            <li><a href="#variable-scopes">Variable Scopes</a></li>
            <li><a href="#object">Object</a></li>
            <li><a href="#object-prototype">Object Prototype</a></li>
            <li><a href="#prototypal-inheritance">Prototypal Inheritance</a></li>
            <li><a href="#built-in-objects">Built-in Objects</a></li>
            <li><a href="#primitive-types">Primitive Types</a></li>
            <li><a href="#typeof-operator">typeof operator</a></li>
            <li><a href="#data-structures">Data Structures</a></li>
        </ul>

        <h2>Advanced Topics</h2>
        <ul>
            <li><a href="#loops-and-iterations">Loops and Iterations</a></li>
            <li><a href="#control-flow">Control Flow</a></li>
            <li><a href="#exception-handling">Exception Handling</a></li>
            <li><a href="#expressions-and-operators">Expressions and Operators</a></li>
            <li><a href="#functions">Functions</a></li>
            <li><a href="#asynchronous-javascript">Asynchronous JavaScript</a></li>
            <li><a href="#classes">Classes</a></li>
            <li><a href="#iterators-and-generators">Iterators and Generators</a></li>
            <li><a href="#modules-in-javascript">Modules in JavaScript</a></li>
            <li><a href="#memory-management">Memory Management</a></li>
        </ul>

        <h2 id="what-is-javascript">Resources</h2>
        <p><a href="https://codeharborhub.github.io/docs/category/javascript">Codeharbour Javascript Resources</a></p>
        <p><a href="https://www.geeksforgeeks.org/javascript/">Geeks For Geeks Javascript Resources</a></p>
        <p><a href="https://www.w3schools.com/js/">W3schools Javascript Resources</a></p>

        
        
    </section>


    </Layout>
    );}