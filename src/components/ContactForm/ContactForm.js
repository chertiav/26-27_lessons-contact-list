import React, { Component } from 'react';
import './ContactForm.css';
import MyActionButton from '../../UI/button/MyActionButton/MyActionButton';
import InputList from '../InputList/InputList';


export class ContactForm extends Component {

	state = {
		state:{
			...this.props.contactForEdit,
		},
		getItemInput: this.getInputField,
	}

	createEmptyContact () {
		return {
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
		}
	}

	static getDerivedStateFromProps(props, state) {
		if (state.state.id === props.contactForEdit.id) {
			return {};
		}
		return {state: {...props.contactForEdit},};
	}

	getInputField (state) {
		const listInput = Object.keys(state).filter(item => item !== 'id');
		if (!listInput) return;
		return (
			listInput.map(inputField => {
					return {
						name: inputField,
						placeholder: inputField.split(/(?=[A-Z])/).map(item => item[0].toUpperCase() + item.slice(1)).join(" "),
						type: "text",
					}
				})
		);
	}

	onInputChange = (event) => {
		this.setState({
			state:{
				...this.state.state,
				[event.target.name]: event.target.value
			}
		})
	}
	onClearField = (event) => {
		const sibling = event.target.parentNode.firstChild
		this.setState({
			state: {...this.state.state, [sibling.name]:''},
		})
	}
	onFormSubmit = (event) => {
		event.preventDefault();
		event.stopPropagation();
		this.props.onSubmit({
			...this.state.state
		});
		this.setState({
			state: {...this.createEmptyContact()},
		})
	}
	onContactDelete = (event) => {
		event.stopPropagation();
		this.props.onDelete(this.props.contactForEdit.id);
		this.setState({
			state: {...this.createEmptyContact()},
		})
	}

	render() {
		const { state, getItemInput } = this.state;
		const deletButton = state.id
				? <MyActionButton
						className="action-button"
						type="button"
						onClick = {this.onContactDelete}
						>
						Delete
					</MyActionButton>
				: '';
		return (
		<form className="main-form">
			<InputList
					className="form-input"
					state = {state}
					inputs={getItemInput(state)}
					onClearField = {this.onClearField}
					onChange={this.onInputChange}
					/>
			<div className="form-button">
				<MyActionButton
					className="action-button"
					type="onSubmit"
					onClick = {this.onFormSubmit}
					>
					Save
				</MyActionButton>
				{deletButton}
			</div>
		</form>
		)
	}
}

export default ContactForm;