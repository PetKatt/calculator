import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
		handleClick = () => {
			this.props.clickHandler(this.props.name);
		}
	render() {
		return(
			<button 
				onClick={this.handleClick}
			>
				{this.props.name}
			</button>
		);
	}
}
Button.propTypes = {
	name: PropTypes.string,
	clickHandler: PropTypes.func
};

export default Button;