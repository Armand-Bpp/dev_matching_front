import React from 'react';
import Button from '../button/Button';
import "../../components/pages/ListJobs.css"


// import Button from '../button/Button';

class Card extends React.Component {
    constructor(props){
        super(props)
        this.state = {
       
    }
    this.renderSkills = this.renderSkills.bind(this);
    }
    

    // onClickCard () {
    //     this.saveToLocalStorage();
    //     this.setState({
    //         onClick: this.state.onClickCard + 1
    //     });

    // }

     renderSkills(){
<<<<<<< HEAD
         return this.props.skills.map((skills) => {
        return(
            
                <div >
                     <ul className="list-inline">
                     <li><span className="badge badge-primary list-inline-item">{skills}</span></li>
=======
        return this.props.skills.map((skills) => {
            return(
                <div className="d-inline">
                    <ul className="d-inline list-unstyled">
                        <li className="d-inline"><span class="badge badge-secondary mx-1">{skills}</span></li>
>>>>>>> 7d6363bcb95d4587e2ab9da5109196aa6d76ad39
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
                                        <h3 className="card-text">{this.props.compagnyName}</h3>
                                        <h5 className="card-text"><i class="fas fa-map-marker-alt"></i> Ville : {this.props.city}</h5>
                                        <h4 className="card-title">{this.props.title}</h4>
                                        <ul className="list-unstyled list-inline">
                                            <li className="list-inline-item"><h5 className="card-text"><i class="fas fa-clipboard-list"></i> {this.props.contracts}</h5></li>
                                            <li className="list-inline-item ml-2"><h5 className="card-text"><i class="far fa-calendar-alt"></i> {this.props.date}</h5></li>
                                        </ul>
                                        {this.renderSkills()}
                                    </div>
                                    <div className="bouton col-12 col-lg-2 col-md-2" >
                                        <Button onClickFn={this.onsubmit}><i class="far fa-bookmark"></i></Button>
                                    </div>
                                </div>
<<<<<<< HEAD
                                <div className="col-6">
                                    
                               
                                <div>
                                    <h4 className="card-title">{this.props.title}</h4>
                                   
                         
                                </div>
                                
                                    
                                <div>
                                    <h5 className="card-text">{this.props.compagnyName}</h5>
                                    <h6 className="card-text"><i class="fas fa-map-marker-alt"></i>Ville:{this.props.city}</h6>
                                        <h6 className="card-text"><i class="fas fa-clipboard-list"></i>{this.props.contracts}</h6>
                                        <h6 className="card-text"><i class="far fa-calendar-alt"></i>{this.props.date}</h6>
                                </div>
                                    
                                <div className="">
                                       <span >{this.renderSkills()}</span>
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