import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
		handleClick = () => {
			console.log("click");
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
	name: PropTypes.string
};

export default Button;