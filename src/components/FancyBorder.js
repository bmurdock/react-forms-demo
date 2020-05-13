import React from 'react';
import './FancyBorder.css';

class FancyBorder extends React.Component {
    constructor(props)
    {
        super(props);
    }
    render(){
        return (
            <div className={`fancyBorder border-color-${this.props.color || 'red'}`} >
                {this.props.children}
            </div>
        )
    }
}

export default FancyBorder;