
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
            <div class="row">
                <div class="col-sm-6">
                    <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">{this.props.companyName}</h5>
                     <h6 className="card-text">{this.props.title}</h6>
                     <h6 className="card-text">{this.props.city}</h6>
                     <h6 className="card-text">{this.props.contract}</h6>
                    <h6 className="card-text">{this.props.date}</h6>
                    <span className="badge badge-primary">{this.props.skills}</span>
                    <Button onClickFn={this.onsubmit}>
                     Retirer des  favoris
                     </Button>
                    </div>
                    </div>
                </div>
            </div>
        )
        
        
    }
}

export default Card;