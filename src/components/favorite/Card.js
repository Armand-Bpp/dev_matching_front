
import React from 'react';
// import Button from '../button/Button';


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
                                    <h3 className="card-text">{this.props.companyName}</h3>
                                    <h5 className="card-text"><i class="fas fa-map-marker-alt"></i> Ville : {this.props.city}</h5>
                                    <h4 className="card-title">{this.props.title}</h4>
                                    <ul className="list-unstyled list-inline">
                                        <li className="list-inline-item"><h5 className="card-text"><i class="fas fa-clipboard-list"></i> {this.props.contract}</h5></li>
                                        <li className="list-inline-item ml-2"><h5 className="card-text"><i class="far fa-calendar-alt"></i> {this.props.date}</h5></li>
                                    </ul>
                                    {/* {this.renderSkills()} */}
                                </div>
                                {/* <div className="bouton col-12 col-lg-2 col-md-2" >
                                    <Button selected={this.state.selected}  onClickFn={this.onsubmit}><i class="far fa-bookmark"></i></Button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            // <div class="row">
            //     <div class="col-sm-6">
            //         <div class="card">
            //         <div class="card-body">
            //         <h5 className="card-title">{this.props.compagnyName}</h5>
            //          <h6 className="card-text">{this.props.title}</h6>
            //          <h6 className="card-text">{this.props.city}</h6>
            //          <h6 className="card-text">{this.props.contracts}</h6>
            //         <h6 className="card-text">{this.props.date}</h6>
            //         <span class="badge badge-primary">{this.props.skills}</span>
            //         <Button onClickFn={this.onsubmit}>
            //          sssRetirer des  favoris
            //          </Button>
            //         </div>
            //         </div>
            //     </div>
            // </div>
        )
        
        
    }
}

export default Card;