
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
        <div className="container-fluid">
        <div className="row">
            <div className="offset-3 col-6 ">
                <div className="card shadow car">
                <div className="card-body list">

                    <div className="row">
                            <div className=" col-4">
                                <div  className="profil">
                                    <img className="shadow  img-fluid" alt="" src="img/dev.png"/>
                                </div>
                            </div>
                            <div className="col-6">
                                
                            
                            <div>
                                <h4 className="card-title">{this.props.userId}  </h4>
                                
                        
                            </div>
                            
                                
                            <div>
                                <h5 className="card-text">{this.props.compagnyName}</h5>
                                <h6 className="card-text"><i class="fas fa-map-marker-alt"></i>Ville:{this.props.city}</h6>
                                    <h6 className="card-text"><i class="fas fa-clipboard-list"></i>{this.props.contracts}</h6>
                                    <h6 className="card-text"><i class="far fa-calendar-alt"></i>{this.props.date}</h6>
                            </div>
                                
                            <div className="">
                                {/* <p className="card-text skills">{this.props.skills}</p> */}
                                <span >{this.renderSkills()}</span>
                            </div>
                            </div>
                            <div className="col-2">
                            <div className="bouton" >
                                <Button onClickFn={this.onsubmit}>
                                <i class="far fa-trash-alt"></i>
                                </Button>
                            </div>
                            </div>  
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