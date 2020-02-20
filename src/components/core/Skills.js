import React from 'react';

class Skills extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            skills : []
        }
        this.renderSkills = this.renderSkills.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.skills !== this.props.skills){
           this.setState({
            skills : this.props.skills
        }) 
        }
        
    }

    renderSkills(){
        return (
            <div className="d-inline">
                <ul className="d-inline list-unstyled">
                    {this.state.skills.map(item => (
                        <li className="d-inline ml-2" key={item.name}>
                            <h4 className="d-inline"><span class="badge badge-secondary">{item.name}</span></h4>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    render(){
        return(
            <div>
                {this.renderSkills()}
            </div>
        )
    }
}

export default Skills;