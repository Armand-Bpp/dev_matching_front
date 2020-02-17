import React from 'react';
import Navbar from '../core/Navbar';
import Card from '../favorites/Card';

class Favorites extends React.Component {

    render(){
        return(
            <div className="container">
                <div className="">
                    <Navbar />
                </div>
                <div className="favtext">
                <Card/>
                  <h2 className="text-center mt-5">Vous n'avez pas de favoris</h2>  
                </div>
                
                <div className="text-center">
                    <img src="img/none.svg" className="img-fluid" />
                </div>
                <div className="backmatching text-center mt-2">
                    <button type="button" class="btn btn-lg btn-outline-primary">Veuillez retourner au matching</button>
                </div>
            </div>    
        )
    }
}
export default Favorites;