import React from 'react'
import CardMat from '../matching/CardMat'
import Navbarlogin from '../core/Navbar';



class Matching extends React.Component{
    constructor(props){
        super(props);
        this.state={
            listMat:[]
    }
    this.renderListMat=this.renderListMat.bind(this);
    }

    async componentDidMount(){
        const resM = await fetch(`http://192.168.1.219:3001/matching`);
        const jsonM = await resM.json()
        const resO = await fetch(`http://192.168.1.219:3001/offers`)
        const jsonO = await resO.json()
            this.setState({
                listMat: jsonM.data , listEn: jsonO.data            
            });
        // console.log('url',url);
        // fetch(url)
        // .then(res => res.json())
        // .then(json =>{
        //     console.log('json',json);
        //     this.setState({
        //         listMat: jsonM.data , listEn: jsonO.data
                
            
        //     });
            
        // });
        
    }
    
    
    renderListMat(){
        return this.state.listMat.map((listMat) => {


            console.log(listMat)

            return(
            <CardMat
                 id={listMat._id}
                 matchId={listMat.matchId}
                 matchData={listMat.matchData}
                 data={listMat.date}
                 score={listMat.score}
                 typeId={listMat.typeId}
                 created= {listMat.created}

                 userId={listMat.userId}
                 companyName={listMat.companyName}
                 title={listMat.title}
                 city={listMat.city}
                 contract={listMat.contract}
                 date={listMat.date}
                 skills= {listMat.skills}
                
                     />
            )
        })
    }

    render(){
        return(
            <div>
                <Navbarlogin  />
                <div className="jobs">
                    <h2 className="text-center mb-4">Matching</h2>
                    
                    {this.renderListMat()}
                </div>
            </div>

           
        )
    }
}


export default Matching;