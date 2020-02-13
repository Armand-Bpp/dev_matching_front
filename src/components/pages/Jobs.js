import React from 'react';
import Card from '../entreprise/Card';


class Jobs extends React.Component{
    constructor(props){
        super(props);
        this.state={
            listEn:[]
    }
    this.onWrongActionEn=this.onWrongActionEn.bind(this);
    this.renderListEn=this.renderListEn.bind(this);
    }

    componentDidMount(){
        const url =`http://localhost:3000/api/jobs.json`;
        console.log('url',url);
        fetch(url)
        .then(res => res.json())
        .then(json =>{
            console.log('json',json);
            this.setState({
                listEn: json
            });
            
        });
        
    }

    onWrongActionEn(){
        this.state.listEn.push('a');
        this.setState({
            listEn: this.state.listEn
        });
    }
    
    renderListEn(){
        return this.state.listEn.map((listEn) => {
            return(
            // <p key={listEn.id}> {listEn.compagnyName}   {listEn.title}  {listEn.city}   {listEn.contracts}  {listEn.date}  {listEn.skills}    </p>
            <Card compagnyName={listEn.compagnyName}
                 title={listEn.title}
                 city={listEn.city}
                 contratcs={listEn.contratcs}
                 date={listEn.date}
                 skills= {listEn.skills}
                     />
            )
        })
    }

    render(){
        return(
            <div>
                <h1>list jobs</h1>
                {this.renderListEn()}

            </div>
        )
    }
}

export default Jobs;