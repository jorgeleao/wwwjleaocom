import React from "react";
import PageStyle from './PageStyle.js';

const Blog = () => (
        <div>
        <PageStyle>
            <div className='pageClass' style={{paddingTop: '100px'}}>
                <p style={{textAlign: 'center'}}>My technical blog...</p>
                <p style={{textAlign: 'center'}}>Here I will post articles, either mine or from collaborators, as well as
                    links to articles published elsewhere.
                </p>
                <div style={{width:'300px',height:'300px',border:'1px solid lightgray',margin:'auto', fontSize:'0.7em'}}>
                    <br />
                    <img src="Montecarlo-01.png" alt="" style={{width:'180px'}}/>
                    <p style={{fontWeight:'bold'}}>PDF&nbsp;<span style={{fontSize:'0.8em'}}>(download)</span></p>
                    <p style={{fontFamily:'Times'}}>How to make a project cost and schedule Monte Carlo simulation.</p>
                    <p>By: Fabrizio Fernandes & Jorge Leão</p>
                </div>
            </div>
        </PageStyle>
        </div>
);

export default Blog;