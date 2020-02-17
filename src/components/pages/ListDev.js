import React from 'react';
import Card from '../dev/Card';
import Navbarlogin  from '../core/Navbar';

// import Button from '../button/Button'
class ListDev extends React.Component{
    constructor(props) {
        super(props);
    
        this.state={
            listDev:[]
        }
        // this.onWrongActionDev=this.onWrongActionDev.bind(this);
        this.renderListDev=this.renderListDev.bind(this);
      }

      
    componentDidMount(){

        const url = `http://localhost:3000/api/developers.json`;
        console.log('url', url);
        fetch(url)
            .then(res => res.json())
            .then(json => {
                console.log('json', json);
                this.setState({
                    listDev: json
                });
            });
 
    }


    // onWrongActionDev() {
    //     this.state.listDev.push('a');
    //     this.setState({
    //         listDev: this.state.listDev
    //     });
    // }

    renderListDev(){
        return this.state.listDev.map((listDev) => {
            return(
            // <p key ={listDev.id}>{listDev.lastName}  {listDev.firstName} {listDev.city} {listDev.skills}  </p>
            <Card 
            
             firstName = {listDev.firstName}
             lastName = {listDev.lastName}
             city={listDev.city}
             skills= {listDev.skills}
             title={listDev.title}
            
            
            />
            )
        })
    }
    render(){
        return(
            <div className="container">
                <div className="">
                    <Navbarlogin  />
                </div>
                <div className="listdeveloppeurs">
                        <h2 className="text-center mb-4">Liste développeurs</h2>
                        {this.renderListDev()}
                </div>
            </div>
        )
    }
}


export default ListDev;