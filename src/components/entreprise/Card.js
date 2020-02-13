import React from 'react';
import Button from '../button/Button';


// import Button from '../button/Button';

class Card extends React.Component {
    constructor(props){
        super(props)
        this.state = {
       
    }
    
    }
    

    // onClickCard () {
    //     this.saveToLocalStorage();
    //     this.setState({
    //         onClick: this.state.onClickCard + 1
    //     });
    // }

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
                        <Button onClickFn={this.onsubmit}>
                            ajouter aux favoris
                        </Button>
                    </div>
                    </div>
                </div>
            </div>
        )
        
        
    }
}

export default Card;