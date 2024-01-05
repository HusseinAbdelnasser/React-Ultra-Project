import React, {Component} from 'react';
import { WorkSection, WorkTitle, Span, WorkPart, Icon, PartTitle, PartDesc, Line } from './style.js';
import axios from 'axios';

class  Work extends Component {

  state = {
    works: []
  }

  componentDidMount () {
    axios.get("Js/data.json").then(res  => {this.setState({works: res.data.works})});
  }
  
  render(){
    const works = this.state.works;
    const workList = works.map((workItem) => {
      return(
        <WorkPart first={workItem.id} key={workItem.id}>
          <Icon className={workItem.icon_name}></Icon>
          <PartTitle>{workItem.title}</PartTitle>
          <Line />
          <PartDesc>
            {workItem.body}
          </PartDesc>
        </WorkPart>   
      )
    })
    return (
      <WorkSection>
           <div className="container">
              <WorkTitle><Span>My</Span> Work</WorkTitle>
              {workList}
           </div>
      </WorkSection>
    );
  }
  
}

export default Work;
