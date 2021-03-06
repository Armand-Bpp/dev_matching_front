import React from 'react';
import Navbarlogin from '../core/Navbar';
import CardProfil from '../dev/CardProfil';
import styled from 'styled-components';
import Api from '../../utils/Api';


class ProfilDev extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            profilId : [],
        }
        this.renderProfilDev = this.renderProfilDev.bind(this);
    }

    componentDidMount(){
        // const id = this.props.id
        // console.log(id, 'id')
      const url = `http://172.20.10.2:3001/users/5e456dfb899c923f10b08fb7`;
      console.log('url', url);
      fetch(url)
      .then(res => res.json())
      .then(json =>{
          console.log("json", json);
          this.setState({
            profilId : json.data
          })
      });
    }


    renderProfilDev(){
        return (
            <CardProfil 
            firstName = {this.state.profilId.firstName}
            lastName = {this.state.profilId.lastName}
            bio = {this.state.profilId.bio}
            picture = {this.state.profilId.picture}
            lastName = {this.state.profilId.lastName}
            city = {this.state.profilId.city}
            title = {this.state.profilId.title}
            banner = {this.state.profilId.banner}
            email = {this.state.profilId.email}
            experience = {this.state.profilId.experience}
            contract = {this.state.profilId.contract}
            github = {this.state.profilId.github}
            linkedin = {this.state.profilId.linkedin}
            role = {this.state.profilId.role}
            skills = {this.state.profilId.skills}
            /> 
        )
    }

    render(){
        return (
            <div>
                <Navbarlogin />
                {this.renderProfilDev()}
            </div>
            
        )
    }
} 

export default ProfilDev;