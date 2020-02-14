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

    //  renderSkills(){
    //      return this.state.skills.map((skills) => {
    //     return(
            
    //             <div >
    //                 <p>{skills}</p>
    //             </div>
    //             )
    //         })
    //     }
                     

    render(){
        return(
            <div className="container-fluid">
            <div className="row">
                <div className="offset-3 col-6 ">
                    <div className="card shadow car">
                    <div className="card-body list">

                        <div className="row">
                                <div className=" col-4">
                                    <div  className="avatar">
                                        <img className="shadow  img-fluid" alt="" src="img/dev.png"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    
                               
                                <div>
                                    <h4 className="card-title">{this.props.title}</h4>
                                   
                         
                                </div>
                                
                                    
                                <div>
                                    <h5 className="card-text">{this.props.compagnyName}</h5>
                                    <h6 className="card-text"><i class="fas fa-map-marker-alt">Ville:</i>{this.props.city}</h6>
                                        <h6 className="card-text"><i class="fas fa-clipboard-list"></i>{this.props.contracts}</h6>
                                        <h6 className="card-text"><i class="far fa-calendar-alt"></i>{this.props.date}</h6>
                                </div>
                                    
                                <div className="">
                                    {/* <p className="card-text skills">{this.props.skills}</p> */}
                                    <span class="badge badge-primary">{this.props.skills}</span>
                                
                                </div>
                             </div>
                             <div className="col-2">
                             <div className="bouton" >
                                    <Button onClickFn={this.onsubmit}>
                                    <i class="far fa-bookmark"></i>
                                    </Button>
                                </div>
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