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
    
      async componentDidMount(){
        //   console.log('json33', json);
          
        const {
            role,
            _id
        } = Api.getUser(); 


        const url = `http://localhost:3001/favorites/users/${_id}?typeId=offer`;
        console.log(role, "role");
        console.log('id', _id)
        if(role  ===  "developer"){
          const url = `http://localhost:3001/favorites`;
        console.log('url', url);
        fetch(url)
            .then(res => res.json())
            .then(json => {
                console.log('json1', json,this);
                this.setState({
                    list: json.data
                });
            });   
        } if (role  ===   "company") {
            const url =`http://localhost:3001/favorites/users/${_id}?typeId=user`;
            console.log('url',url);
            fetch(url)
            .then(res => res.json())
            .then(json =>{
                console.log('json2',json, this);
                // console.log(json.data.typeId,'typid')
                this.setState({
                    list: json.data
                });
                
            });   
        } 
       
 
    }
    
 

    renderFavorites(){

        console.log('this.state',this.state);
        

        return this.state.list.map((listDev) => {
            console.log('listdev',listDev);
            
            return(
            // <p key ={listDev.id}>{listDev.lastName}  {listDev.firstName} {listDev.city} {listDev.skills}  </p>
            <Card 
                userId = {listDev.userId}
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
            <Navbar />
            <div className="favtop">
                <h1  className="text-center">favoris</h1>
                    {this.renderFavorites()} 
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