import React from 'react';
import Navbar from '../core/Navbar';
import Card from'../favorite/Card';
import Api from '../../utils/Api';


class Favorites extends React.Component {
    constructor(props) {
        super(props);
    
        this.state={
            list:[]
        }
        // this.onWrongActionDev=this.onWrongActionDev.bind(this);
        this.renderFavorites=this.renderFavorites.bind(this);
      }
    
      componentDidMount(){
        const {
            role
        } = Api.getUser(); 
        if(role  ===  "developer"){
          const url = `http://localhost:3001/favorites`;
        console.log('url', url);
        fetch(url)
            .then(res => res.json())
            .then(json => {
                console.log('json', json);
                this.setState({
                    list: json.data
                });
            });   
        } if (role  ===   "company") {
            const url =`http://localhost:3001/favorites`;
            console.log('url',url);
            fetch(url)
            .then(res => res.json())
            .then(json =>{
                console.log('json',json);
                this.setState({
                    list: json.data
                });
                
            });   
        } 
       
 
    }
    
 

    renderFavorites(){
        return this.state.list.map((list) => {
            return(
            // <p key ={listDev.id}>{listDev.lastName}  {listDev.firstName} {listDev.city} {listDev.skills}  </p>
            <Card 
            
            userId = {list.userId}
                // lastName = {listDev.lastName}
                // city={listDev.city}
                // skills= {listDev.skills}
                // title={listDev.title}
        
            
            />
            )
        })
    }

    render(){
        return(
            
            <div className="container">
            <div className="row">
                <div className="col-12 ">
                    
                        <h1>favoris</h1>
                        {this.renderFavorites()} 
                     
                </div>
            </div>
        </div>
            // <div className="container">
            //     <div className="">
            //         <Navbar />
            //     </div>
            //     <div className="favtext">
            //       <h2 className="text-center mt-5">Vous n'avez pas de favoris</h2>  
            //     </div>
                
            //     <div className="text-center">
            //         <img src="img/none.svg" className="img-fluid" />
            //     </div>
            //     <div className="backmatching text-center mt-2">
            //         <button type="button" class="btn btn-lg btn-outline-primary">Veuillez retourner au matching</button>
            //     </div>
            // </div>    
        )
    }
}
export default Favorites;