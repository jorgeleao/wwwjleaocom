import React from "react";
import PageStyle from './PageStyle.js';

const Blog = () => (
        <div className='contact'
             style={{
                 width: '100%',
                 marginLeft: 'auto',
                 marginRight: 'auto',
                 textAlign: 'center',
                 backgroundColor: '#eaeaea',
                 height:'1000px'
             }}>
        <PageStyle>
            <div className='pageClass' style={{paddingTop: '100px'}}>
                <p style={{textAlign: 'center'}}>My technical blog...</p>
                <br />
                <p style={{textAlign: 'center'}}>Here I will post articles, either mine or from collaborators, as well as
                    links to articles published elsewhere.
                </p>
                <br />
                <div style={{width:'300px',height:'300px',border:'1px solid lightgray',margin:'auto'}}>
                    <br />
                    <img src="Montecarlo-01.png" alt="" style={{width:'180px'}}/>
                    <p style={{fontWeight:'bold'}}>PDF&nbsp;<span style={{fontSize:'0.8em'}}>(download)</span></p>
                    <p style={{fontFamily:'Times'}}>How to make a project cost and schedule Monte Carlo simulation.</p>
                    <br />
                    <p style={{fontSize:'0.7em'}}>By: Fabrizio Fernandes & Jorge Leão</p>
                </div>
            </div>
        </PageStyle>
        </div>
);

export default Blog;