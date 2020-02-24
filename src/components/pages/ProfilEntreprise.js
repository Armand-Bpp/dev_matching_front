import React from 'react';
import Navbarlogin from '../core/Navbar';
import CardProfilEnt from '../entreprise/cardProfilEntreprises';
import styled from 'styled-components';
import Api from '../../utils/Api';


class ProfilEnt extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            profilId : []
        }
        this.renderProfilEnt = this.renderProfilEnt.bind(this);
    }

    componentDidMount(){
      const url = `http://172.20.10.9:3001/users/5e46634bd7309f1e4c550f20`;
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


    renderProfilEnt(){
        return (
            <CardProfilEnt 
            companyName = {this.state.profilId.companyName}
            bio = {this.state.profilId.bio}
            picture = {this.state.profilId.picture}
            city = {this.state.profilId.city}
            title = {this.state.profilId.title}
            postalCode = {this.state.profilId.postalCode}
            email = {this.state.profilId.email}
            siret = {this.state.profilId.siret}
            linkedin = {this.state.profilId.linkedin}
            role = {this.state.profilId.role}
            /> 
        )
    }

    render(){
        return (
            <div>
                <Navbarlogin />
                {this.renderProfilEnt()}
            </div>
            
        )
    }
} 

export default ProfilEnt;