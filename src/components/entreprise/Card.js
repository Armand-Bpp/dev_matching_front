import React from 'react';
import Button from '../button/Button';
import "../../components/pages/ListJobs.css"


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
            <div className="container-fluid">
            <div className="row">
                <div className="offset-3 col-6 ">
                    <div className="card car">
                    <div className="card-body list">


                        <div>
                              <h5 className="card-title">{this.props.compagnyName}</h5>
                              <h6 className="card-text">{this.props.title}</h6>
                        </div>
                        
                      
                       <div>
                           <h6 className="card-text">{this.props.city}</h6>
                            <h6 className="card-text">{this.props.contracts}</h6>
                            <h6 className="card-text">{this.props.date}</h6>
                       </div>
                       
                       
                        <p className="card-text">{this.props.skills }</p>



                        <Button onClickFn={this.onsubmit}>
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