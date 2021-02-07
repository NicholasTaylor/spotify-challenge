import React from "react"

export default class Panel extends React.Component {
    render(){
        let quoteCopy;
        if (this.props.quoteCopy) {
            quoteCopy = (
                <p
                    className="quote"
                >
                    {this.props.quoteCopy}
                </p>
            )
        } else {
            quoteCopy = null;
        }
        return(
            <div
                className="panel"
            >
                <h2>
                    {this.props.headline}
                </h2>
                <p 
                    className={this.props.copyClasses}
                >
                    {this.props.copy}
                </p>
                {quoteCopy}
            </div>
        )
    }
}