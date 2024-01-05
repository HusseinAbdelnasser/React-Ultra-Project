import React from 'react';
import {HomeSection , HomeInformaton, HomeTitle, HomeInfo, HomeDesc, Span, HomeBtn} from './style.js';

function Home () {
  return (

    <HomeSection>
        <div class="container">
            <HomeInformaton>
                <HomeTitle>Hamza Nabil</HomeTitle>
                <HomeInfo>Creative Director</HomeInfo>
                <HomeDesc>
                    Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                </HomeDesc>
                <HomeBtn>Let's Begin</HomeBtn>
            </HomeInformaton>
        </div>
    </HomeSection>
    
  );
}

export default Home;
