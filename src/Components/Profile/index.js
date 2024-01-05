import React, {Component} from 'react';
import {ProfileSkills, Profile, ProfilList, ProfileItem, ProfileItemSpan, SkillsSection, SkillsDesc, Bar, TitleSpan, PercSpan, ParentDiv, ParentSpan, ProfileTitle, SkillsTitle, ProfileTitleSpan, ProfileSkilldSpan} from './style.js'
import axios from 'axios';

class Ahmed extends Component {
    state = {
        skills: []
    }
    
    componentDidMount () {
        axios.get("Js/data.json").then(res  => {this.setState({skills: res.data.skills})});
    }

    render(){
        const skills = this.state.skills;
        const skillsItems = skills.map((skill) => {
            return(
                   <Bar key={skill.id}>
                        <TitleSpan>{skill.title}</TitleSpan>
                        <PercSpan>{skill.perc}</PercSpan>
                        <ParentDiv>
                            <ParentSpan sp={skill.id}></ParentSpan>
                        </ParentDiv>
                    </Bar>
            )
        })
        return(
            <ProfileSkills>
            <div className="container">
                <Profile>
                    <ProfileTitle><ProfileTitleSpan>My </ProfileTitleSpan>Profile</ProfileTitle>
                    <ProfilList>
                        <ProfileItem>
                            <ProfileItemSpan>Name</ProfileItemSpan>
                            Hamza Nabil
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Birthday</ProfileItemSpan>
                            21/1/1996
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Address</ProfileItemSpan>
                            Ain shams
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Phone</ProfileItemSpan>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Email</ProfileItemSpan>
                            hamza@hamza.com
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Website</ProfileItemSpan>
                            <ProfileItemSpan web>www.google.com</ProfileItemSpan>
                        </ProfileItem>
                    </ProfilList>
                </Profile>
                
                <SkillsSection>
                    <SkillsTitle>Some <ProfileSkilldSpan>skills</ProfileSkilldSpan></SkillsTitle>
                    <SkillsDesc>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                   
                </SkillsSection>
                {skillsItems}
            </div>
           </ProfileSkills>
        
        )
    }
}

export default Ahmed;