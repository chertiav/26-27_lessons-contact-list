import React, { Component } from 'react';
import classes from './MyActionButton.module.css';

export class MyActionButton extends Component {
	render() {
		return (
			<button {...this.props} className={classes.actionButton}>
				{this.props.children}
			</button>
		)
	}
}
export default MyActionButton;