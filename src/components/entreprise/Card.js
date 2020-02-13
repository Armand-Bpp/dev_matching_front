import React from 'react';


// import Button from '../button/Button';

class Card extends React.Component {
    constructor(props){
        super(props)
        // this.state = {
        //     lastName:this.props.lastName
        // }
    }
    
    render(){
        return(
            <div class="row">
                <div class="col-sm-6">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{this.props.compagnyName}</h5>
                        <p class="card-text">{this.props.title}</p>
                        <p class="card-text">{this.props.city}</p>
                        <p class="card-text">{this.props.contracts}</p>
                        <p class="card-text">{this.props.date}</p>
                        <p class="card-text">{this.props.skills }</p>
                        <a href="#" class="btn btn-primary">Ajouter aux favoris</a>
                    </div>
                    </div>
                </div>
            </div>
        )
        
        
    }
}

export default Card;