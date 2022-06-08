import React, { Component } from 'react';
import './ContactList.css';
import MyActionButton from '../../UI/button/MyActionButton/MyActionButton';
import ContactItem from '../ContactItem/ContactItem';


export class ContactList extends Component {
	render() {
		const { items, onDelete,
			onAddContact,
			onEditContact,
		} = this.props;
		return (
			<div className="main-list">
				<div className="list-contact">
					{items.map(item => {
						return (
								<ContactItem
									key={item.id}
									item={item}
									onDelete={onDelete}
									onEditContact={onEditContact}
									/>
							)
						}
					)}
				</div>
				<div className="list-button">
					<MyActionButton
						type="button"
						className="action-button"
						onClick={onAddContact}
						>
						New
					</MyActionButton>
				</div>
			</div>
		)
	}
}

export default ContactList;