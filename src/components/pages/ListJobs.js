import React from 'react';
import Card from '../entreprise/Card';
import Navbarlogin from '../core/Navbar';
// import ProfilJobs from '../pages/ProfilJobs';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// import Button from '../button/Button';

class ListJobs extends React.Component{
    constructor(props){
        super(props);
        this.state={
            listEn:[]
    }
    this.renderListEn=this.renderListEn.bind(this);
    }

    componentDidMount(){
        const url =`http://192.168.1.219:3001/offers`;
        // const url =`http://localhost:3000/api/jobs.json`;
        console.log('url',url);
        fetch(url)
        .then(res => res.json())
        .then(json =>{
            console.log('json',json);
            this.setState({
                listEn: json.data
                // listEn: json
            });
            
        });
        
    }
    
    
    renderListEn(){
        return this.state.listEn.map((listEn) => {


            console.log(listEn)

            return(
            <Card 
                 id={listEn._id}
                 userId={listEn.userId}
                 companyName={listEn.companyName}
                 title={listEn.title}
                 city={listEn.city}
                 contract={listEn.contract}
                 date={listEn.date}
                 picture={listEn.picture}
                 skills= {listEn.skills}
                     />
            )
        })
    }

    render(){
        return(
            <div>
                <Navbarlogin  />
                <div className="jobs">
                    <h2 className="text-center mb-4">List jobs</h2>
                    
                    {this.renderListEn()}
                </div>
            </div>
        )
    }
}

export default ListJobs;


