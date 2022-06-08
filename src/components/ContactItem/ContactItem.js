import React, { Component } from 'react';
import MyRmButton from '../../UI/button/MyRmButton/MyRmButton';
import './ContactItem.css';


export class ContactItem extends Component {

	onItemDelete = (event) => {
		event.stopPropagation()
		this.props.onDelete(this.props.item.id);
	}
	onContactEdit = (event) => {
		event.stopPropagation()
		this.props.onEditContact(this.props.item);
	}

	render() {
		const { item } = this.props;
		return (
			<div
				className="item"
				onDoubleClick={this.onContactEdit}
				>
				<div>
					{item.firstName} {item.lastName}
				</div>
				<MyRmButton
					type="button"
					className="rm-button"
					onClick = {this.onItemDelete}
					>
					&times;
				</MyRmButton>
			</div>
		)
	}
}

export default ContactItem;