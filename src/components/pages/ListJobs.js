import React from 'react';

class ListJobs extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            card : []
        }
    }

    componentDidMount(){
        fetch('.././utils/ApiJobs.json')
        .then(res => res.json())
        .then((data) => {
            console.log(data)
        });
    }

    render(){
        return(
            <div>

            </div>
        )
    }

}

export default ListJobs;