import React from 'react';
import Card from '../dev/Card';
// import Button from '../button/Button'
class Matching extends React.Component{
    constructor(props) {
        super(props);
    
        this.state={
            listDev:[]
        }
        this.onWrongActionDev=this.onWrongActionDev.bind(this);
        this.renderListDev=this.renderListDev.bind(this);
      }

      
    componentDidMount(){

        const url = `http://localhost:3001/users/`;
        console.log('url', url);
        fetch(url)
            .then(res => res.json())
            .then(json => {
                console.log('json', json);
                this.setState({
                    listDev: json.data
                });
            });
 
    }


    onWrongActionDev() {
        this.state.listDev.push('a');
        this.setState({
            listDev: this.state.listDev
        });
    }

    renderListDev(){
        return this.state.listDev.map((listDev) => {
            return(
            // <p key ={listDev.id}>{listDev.lastName}  {listDev.firstName} {listDev.city} {listDev.skills}  </p>
            <Card 
            
             firstName = {listDev.firstName}
             lastName = {listDev.lastName}
             city={listDev.city}
             skills= {listDev.skills}
             experience= {listDev.experience}
             bio= {listDev.bio}
            
            />
            )
        })
    }
    render(){
        return(
            <div>
                <h1>List Matching</h1>
                {this.renderListDev()}
            </div>
        )
    }
}


export default Matching;