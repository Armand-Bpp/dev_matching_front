import React from 'react';
import Navbarlogin from '../core/Navbar';
import CardProfil from '../dev/CardProfil';
import styled from 'styled-components';


class ProfilDev extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            profilId : []
        }
        this.renderProfilDev = this.renderProfilDev.bind(this);
    }

    componentDidMount(){
      const url = `http://localhost:3000/api/developers.json`;
      console.log('url', url);
      fetch(url)
      .then(res => res.json())
      .then(json =>{
          console.log("json", json);
          this.setState({
            profilId : json[0]
          })
      });
    }


    renderProfilDev(){
        return (
            <CardProfil 
            firstName = {this.state.profilId.firstName}
            lastName = {this.state.profilId.lastName}
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