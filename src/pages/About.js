import React from "react";

function About() {
    return(
        <div
        style={{
            backgroundColor: "white",
            height: "90vh",
            textAlign: "center",
        }}
>
    <br />
    <h2>About</h2>
    <div
    style={{
        padding: "20px",
        backgroundColor: "green",
        color: "white",
        margin: "20px",
        borderRadius: "20px",
    
    }}
    >
        <h4>Who built this website?</h4>
        <div style={{frontsize: "20px"}}>
            This is created by Nutrifrnd.
        </div>
        <br />
        <h4>How to connect?</h4>
        <div style={{fronysize:"20px"}}>
            Go and check our website you will get all details {""}
            <a href="https://bit.ly/oranicod3rs" target="_blank">
                here
            </a>
            
            .
        </div>
        </div>
        </div>
    );



}

export default About;