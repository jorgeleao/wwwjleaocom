import React from "react";
import PageStyle from './PageStyle.js';

const Home = () => (
    <div>
        <div style={{height: '300px', backgroundImage: 'url("vscode.react.04.png")'}}>
            <div style={{
                position: 'relative',
                top: '120px',
                textAlign: 'center',
                color: 'white',
                fontSize: '1.4em',
                fontStyle: 'italic',
                fontWeight: 'bold'
            }}>Full-stack Web Development, Data Science, IoT,<br/>Online Courses
            </div>
        </div>
        <PageStyle>
            <div className='pageClass'>
                <br />
                My name is <span
                style={{fontFamily: 'times-new-roman', fontSize: '1.2em', fontWeight: 'bold', fontStyle: 'italic'}}>Jorge Lopes de Souza Leão</span>
                &nbsp;and I have worked for many years at a large university in Rio de Janeiro, Brazil (COPPE / UFRJ).
                <br />
                I retired from UFRJ in April 2021, and now I work as a Software Engineer and entrepreneur dedicated to learning, using and teaching Java, 
                Javascript, Node.js, R, Python and other languages used in client-server architectures, web applications, data science and IoT.
                <br />
                Please be welcome to my web site.
                <br />
            </div>
        </PageStyle>
    </div>
);

export default Home;