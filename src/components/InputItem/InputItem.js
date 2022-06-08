import React, { Component } from 'react';
import MyRmButton from '../../UI/button/MyRmButton/MyRmButton';
import './InputItem.css';

export class InputItem extends Component {
	render() {
		const { input, value, onChange, onClearField} = this.props;
		return (
			<div className="list-input">
				<input
					className="input-text"
					type={input.type}
					name = {input.name}
					placeholder={input.placeholder}
					value = {value}
					onChange={onChange}
					/>
				<MyRmButton
					type="button"
					className="rm-button"
					onClick={onClearField}
					>
					&times;
				</MyRmButton>
			</div>
		)
	}
}

export default InputItem;