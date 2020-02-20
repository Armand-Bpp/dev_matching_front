import React from 'react'

class Button extends React.Component{

    render(){
        return(
            <div>
                <button className={!this.props.selected ? "btn btn-outline-dark" : "btn btn-dark"}
                onClick={this.props.onClickFn}
                >
                    {this.props.children}

                </button>

            </div>

        )
    }
}


export default Button ;