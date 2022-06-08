import React, { Component } from 'react';
import InputItem from '../InputItem/InputItem';
import './InputList.css';

export class InputList extends Component {
	render() {
		const { className, state, inputs, onChange, onClearField} = this.props;
		return (
			<div className={className}>
				{inputs.map(input => {
					return (
							<InputItem
								key={input.name}
								input={input}
								value={state[input.name]}
								onChange={onChange}
								onClearField={onClearField}
							/>
						)
					}
				)}
			</div>
		)
	}
}

export default InputList;