import React from "react";
import {Link} from "react-router-dom";
import PageStyle from './PageStyle.js';
import "./CommonPageStyle.css";

const About = () => (
    <div>
        <PageStyle>
            <div className='pageClass'>
                <div style={{backgroundColor: 'white', paddingTop: '70px'}}>
                    <div style={{
                        width: '120px',
                        height: '120px',
                        border: '1px solid black',
                        borderRadius: '60px',
                        float: 'left',
                        margin: '15px',
                        overflow: 'hidden'
                    }}>
                        <img src="leao44.jpg" height="120px" alt=""/>
                    </div>
                    About me...<br/><br/>
                    I graduated as an Electronics Engineer from the Federal University of Rio de Janeiro (UFRJ)
                    Polytechnic School of Engineering (Poli),
                    I have a M.Sc. in Electrical Engineering from COPPE/UFRJ and the title of <i>Docteur Ingénieur en
                    Commande des Systèmes et Automatique</i>
                    &nbsp;from the <i>Université Paul-Sabatier de Toulouse III</i>, Toulouse, France.
                    <br/>
                    Portuguese is my native language, in which I have excellent writing skills, but I am also fluent in
                    English and French.
                    <br/>
                    Currently, I work full-time at <b>Intelie</b> (<i>http://www.intelie.com.br</i>, a Viasat company)
                    as a Software Developer Specialist.
                    <br/>
                    Before that, I had a career as a professor at PEE/COPPE/UFRJ, from teaching assistant to Associate
                    Professor, a job which required exclusive dedication.
                    Because of that, I could only work on projects conducted by a foundation linked to the university
                    (COPPETEC Foundation). A list of
                    selected projects I have developed at COPPETEC is shown <Link
                    activeClassName="current"
                    to='/projects'
                    style={{
                        color: 'red',
                        fontWeight: 'bold',
                        fontStyle: 'italic',
                        fontSize: '1.1em'
                    }}>here</Link>.

                    <br/>
                    During the time I was at COPPE/UFRJ, I gained a lot of experience in consulting, development, and
                    teaching.
                    <br/>
                    There are three main lines of action I am now dedicated to in the areas of programming, computer
                    science, data science and IoT:
                    <div style={{marginLeft: 'auto', marginRight: 'auto', width: '25em', textAlign: 'left'}}>
                        <ul style={{margin: '0'}}>
                            <li>Software development <br/>(as a freelancer, part-time or full-time employee),</li>
                            <li>consulting and</li>
                            <li>teaching.</li>
                        </ul>
                    </div>
                    If you want to contact me, you can use my email or any of my social networks that appear in the
                    footer.
                </div>
            </div>
        </PageStyle>
    </div>
)

export default About;