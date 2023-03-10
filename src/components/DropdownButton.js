import React from "react";

class DropdownButton extends React.Component {

    render() {
        return (
            <div>
                <select className="Header-Item" name={this.props.name} value={this.props.name}>
                    <option value={this.props.name} disabled={true} hidden={true}>{this.props.name}</option>
                    {
                        this.props.options.map((item) => {
                            console.log(item)
                            return (<option value={item}>{item}</option>)
                        })
                    }
                </select>
            </div>
        )
    }
}

export default DropdownButton;