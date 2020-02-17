import React from 'react';
import Card from '../entreprise/Card';
import Navbarlogin from '../core/Navbar';
// import Button from '../button/Button';

class ListJobs extends React.Component{
    constructor(props){
        super(props);
        this.state={
            listEn:[]
    }
    // this.onWrongActionEn=this.onWrongActionEn.bind(this);
    this.renderListEn=this.renderListEn.bind(this);
    }

    componentDidMount(){
        const url =`http://localhost:3000/api/Jobs.json`;
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
    // saveToLocalStorage(listId) {
    //     console.log('listEn', listId);
    //     const localListStr = localStorage.getItem('favoris') || '[]';
    //     const localList = JSON.parse(localListStr);
    //     if (localList.includes(listId) === false) {
    //         localList.push(listId);
    //         localStorage.setItem('favoris', JSON.stringify(localList));
    //     }
    // }
    // onWrongActionEn(){
    //     this.state.listEn.push('a');
    //     this.setState({
    //         listEn: this.state.listEn
    //     });
    // }
    
    renderListEn(){
        return this.state.listEn.map((listEn) => {
            return(
            // <p key={listEn.id}> {listEn.compagnyName}   {listEn.title}  {listEn.city}   {listEn.contracts}  {listEn.date}  {listEn.skills}    </p>
            <Card compagnyName={listEn.compagnyName}
                 title={listEn.title}
                 city={listEn.city}
                 contracts={listEn.contracts}
                 date={listEn.date}
                 skills= {listEn.skills}
                     />
            )
        })
    }

    render(){
        return(
            <div>
                <Navbarlogin  />
                <div className="jobs">
                    <h2 className="text-center mb-4">List jobs</h2>
                    {this.renderListEn()}
                </div>
            </div>
        )
    }
}

export default ListJobs;