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
           
               <div >
                   <span className="badge badge-primary">{skills}</span>
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
<<<<<<< HEAD
                                <div className="col-6">
                                    
                               
                                <div>
                                    <h4 className="card-title">{this.props.lastName} {this.props.firstName}</h4>
                                   
                         
                                </div>
                                
                                    
                                <div>
                                 
                                    <h6 className="card-text"><i class="fas fa-map-marker-alt"></i>Ville:{this.props.city}</h6>
                                    <h6 className="card-text"><i class="fas fa-poll-h"></i>{this.props.title}</h6>
                                        
                                </div>
                                    
                                <div className="">
                                    {/* <p className="card-text skills">{this.props.skills}</p> */}
                                    <span>{this.renderSkills()}</span>
                                </div>
                             </div>
                             <div className="col-2">
                             <div className="bouton" >
                                    <Button onClickFn={this.onsubmit}>
                                    <i class="far fa-bookmark"></i>
                                    </Button>
                                </div>
                             </div>
=======
                            </div>
>>>>>>> 7d6363bcb95d4587e2ab9da5109196aa6d76ad39
                        </div>
                    </div>
                </div>
            </div>
        )
        
        
    }
}

export default Card;