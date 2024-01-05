import React, {Component} from 'react';
import {PortfolioSection, PortfolioTitle, PortfolioList, PortfolioItem, ImageWrapper, Image, Overlay, OverlaySpan, Span} from './style.js'

class Portfolio extends Component {
  render(){
    return (
        <PortfolioSection>
          <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
          <PortfolioList>
            <PortfolioItem active>All</PortfolioItem>
            <PortfolioItem>HTML</PortfolioItem>
            <PortfolioItem>Photoshop</PortfolioItem>
            <PortfolioItem>Wordpress</PortfolioItem>
            <PortfolioItem>Mobile</PortfolioItem>
          </PortfolioList>
      
        <div className="box"> 
            <ImageWrapper>
                <Image src="images/Portfolio/portfolio-img1.jpg" alt="" />
                <Overlay>
                    <OverlaySpan>
                        Show Image
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>

                <ImageWrapper>
                    <Image src="images/Portfolio/portfolio-img2.jpg" alt="" />
                    <Overlay>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
                </ImageWrapper>
                
                <ImageWrapper>
                    <Image src="images/Portfolio/portfolio-img3.jpg" alt="" />
                    <Overlay>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
                </ImageWrapper>
                
                <ImageWrapper>
                    <Image src="images/Portfolio/portfolio-img4.jpg" alt="" />
                    <Overlay>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
                </ImageWrapper>
                
                <ImageWrapper>
                    <Image src="images/Portfolio/portfolio-img5.jpg" alt="" />
                    <Overlay>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
                </ImageWrapper>
                
                <ImageWrapper>
                    <Image src="images/Portfolio/portfolio-img6.jpg" alt="" />
                    <Overlay>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
                </ImageWrapper>
                
                <ImageWrapper>
                    <Image src="images/Portfolio/portfolio-img7.jpg" alt="" />
                    <Overlay>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
                </ImageWrapper>
                
                <ImageWrapper>
                    <Image src="images/Portfolio/portfolio-img8.jpg" alt="" />
                    <Overlay>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
                </ImageWrapper>
        </div>
        
    </PortfolioSection>
  )
  }
  
  
}

export default Portfolio;
