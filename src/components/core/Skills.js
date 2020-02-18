import React from 'react';

class Skills extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            skills : []
        }
        this.renderSkills = this.renderSkills.bind(this);
    }

    componentDidMount(){
        const url = `http://192.168.1.219:3001/skills`;
        fetch(url)
        .then( res => res.json())
        .then(json => {
            console.log("json", json);
            this.setState({
                skills : json
            }) 
        });
    }

    renderSkills(){
        return (
            <div></div>
        )
    }

    render(){
        return(
            <div>
                {this.renderSkills}
            </div>
        )
    }
}

export default Skills;