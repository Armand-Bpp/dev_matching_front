import React from 'react';
import Navbarlogin from '../core/Navbar';
import CardProfilJobs from '../../components/entreprise/CardProfilJobs';


class ProfilJobs extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            profilJobId : []
        }
        this.renderProfilJob = this.renderProfilJob.bind(this);
    }

    componentDidMount(){
      const url = `http://192.168.1.219:3001/offers`;
      console.log('url', url);
      fetch(url)
      .then(res => res.json())
      .then(json =>{
          console.log("json", json);
          this.setState({
            profilJobId : json.data[0]
          })
      });
    }


    renderProfilJob(){
        return (
            <CardProfilJobs 
            position = {this.state.profilJobId.position}
            address = {this.state.profilJobId.address}
            contact = {this.state.profilJobId.contact}
            picture = {this.state.profilJobId.picture}
            duration = {this.state.profilJobId.duration}
            city = {this.state.profilJobId.city}
            title = {this.state.profilJobId.title}
            contract = {this.state.profilJobId.contract}
            experience = {this.state.profilJobId.experience}
            region = {this.state.profilJobId.region}
            description = {this.state.profilJobId.description}
            companyName = {this.state.profilJobId.companyName}
            /> 
        )
    }

    render(){
        return (
            <div>
                <Navbarlogin />
                {this.renderProfilJob()}
            </div>
            
        )
    }
} 

export default ProfilJobs;