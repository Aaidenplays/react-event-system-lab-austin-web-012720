// Code EyesOnMe Component Here
import React from 'react';


class EyesOnMe extends React.Component{

    handleOnBlur = () => {
        console.log("Hey! Eyes on me!")
    }

    handleOnFocus = () => {
        console.log("Good!")
    }

    render() {
        return(
            <div>
                <button
                    onFocus={this.handleOnFocus}
                    onBlur={this.handleOnBlur}
                >Eyes On Me!</button>
            </div>
        )
    }
}

export default EyesOnMe;