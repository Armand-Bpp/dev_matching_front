import React from 'react'

class Button extends React.Component{

    render(){
        return(
            <div>
                <button className="btn btn-outline-dark"
                onClick={this.props.onClickFn}
                >
                    {this.props.children}

                </button>

            </div>

        )
    }
}


export default Button ;