import React from 'react';

class Matching extends React.Component{
    constructor(props) {
        super(props);
    
        this.state={
            list:[{
            id:"",
            lastName:"", 
            firstName:"",
            city:"",
            skills:["","",""]
            }]
        }
        this.onWrongAction=this.onWrongAction.bind(this);
        this.renderList=this.renderList.bind(this);
      }

      
    componentDidMount(){

        const url = `http://localhost:3000/api/developers.json`;
        console.log('url', url);
        fetch(url)
            .then(res => res.json())
            .then(json => {
                console.log('json', json);
                this.setState({
                    list: json.results
                });
            });
 
    }


    onWrongAction() {
        this.state.list.push('a');
        this.setState({
            list: this.state.list
        });
    }

    renderList(){
        return this.state.list.map(() => {
            return(
            <p key ={this.state.id}>{this.state.lastName}  {this.state.firstName} {this.state.city} {this.state.skills}  </p>
            )
        })
    }
    render(){
        return(
            <div>
                <h1>List Matching</h1>
                {this.renderList()}
            </div>
        )
    }
}


export default Matching;