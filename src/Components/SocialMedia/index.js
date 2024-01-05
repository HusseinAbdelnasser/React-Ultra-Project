import React, {Component} from 'react';
import { SocialMedia, Social, Icon, SocialDesc, Span, SpanInfo } from './style.js';
import axios from 'axios';

class SociaMedia extends Component {

  state = {
    social: []
  }

  componentDidMount () {
    axios.get("Js/data.json").then(res  => {this.setState({social: res.data.social})});
  }
  
  render(){
    const social = this.state.social;
    const socialList = social.map((socialItem) => {
      return(
        <Social key={socialItem.id} item={socialItem.id}>
          <Icon className={socialItem.icon}></Icon>
          <SocialDesc>
            <Span>{socialItem.title}</Span>
            <SpanInfo>{socialItem.body}</SpanInfo>
          </SocialDesc>
       </Social>
      )
    })
    return (
      <SocialMedia>
        {socialList}
      </SocialMedia>
    );
  }
}

export default SociaMedia;
