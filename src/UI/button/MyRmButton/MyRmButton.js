import React, { Component } from 'react';
import classes from './MyRmButton.module.css';

export class MyRmButton extends Component {
	render() {
		return (
			<button {...this.props} className={classes.rmButton}>
				{this.props.children}
			</button>
		)
	}
}
export default MyRmButton;