import React from 'react';
import Button from '../button/Button';



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
            <div className="container">
            <div className="row ">
                <div className="col-sm-6 col-12">
                    <div className="card">
                    <div className="card-body list">
                        <h5 className="card-title">{this.props.lastName}</h5>
                        <p className="card-text">{this.props.firstName}</p>
                        <p className="card-text">{this.props.city}</p>
                        <p className="card-text">{this.props.skills }</p>
                        <Button className="bouton" onClickFn={this.onsubmit}>
                            ajouter aux favoris
                      
                        </Button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        )
        
        
    }
}

export default Card;