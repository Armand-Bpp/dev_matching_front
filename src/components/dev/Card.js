import React from 'react';
import Button from '../button/Button';



// import Button from '../button/Button';

class Card extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        
        }
        this.renderSkills = this.renderSkills.bind(this);
    }

    renderSkills(){
        return this.props.skills.map((skills) => {
            return(
                <div className="d-inline">
                    <ul className="d-inline list-unstyled">
                        <li className="d-inline"><span class="badge badge-secondary mx-1">{skills}</span></li>
                    </ul>
                </div>
            )
        })
    }



    renderSkills(){
        return this.props.skills.map((skills) => {
            return(
                <div className="d-inline">
                    <ul className="d-inline list-unstyled">
                        <li className="d-inline"><span class="badge badge-secondary mx-1">{skills}</span></li>
                    </ul>
                </div>
            )
        })
    }
    
    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div class="card col-lg-8 ml-auto mr-auto mb-5 shadow">
                            <div class="card-body">
                                <div className="row">
                                    <div  className="profil col-12 col-md-4 col-lg-4">
                                        <img className="shadow  img-fluid text-center" alt="" src="img/dev.png"/>
                                    </div>
                                    <div  className="col-lg-6 col-12 col-md-6">
                                        <h3 className="card-text">{this.props.firstName} {this.props.lastName}</h3>
                                        <h5 className="card-text"><i class="fas fa-map-marker-alt"></i> Ville : {this.props.city}</h5>
                                        <h4 className="card-title">{this.props.title}</h4>
                                        {this.renderSkills()}
                                    </div>
                                    <div className="bouton col-12 col-lg-2 col-md-2" >
                                        <Button onClickFn={this.onsubmit}><i class="far fa-bookmark"></i></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        
        
    }
}

export default Card;