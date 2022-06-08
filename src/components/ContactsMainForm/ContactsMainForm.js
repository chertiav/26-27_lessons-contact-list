import React, { Component } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import './ContactsMainForm.css';


export class ContactsMainForm extends Component {

	render() {
		const {
			listContacts,
			contactForEdit,
			onSubmit,
			onDelete,
			onEditContact,
			onAddContact
		} = this.props;
		return (
			<div
				className="container-main"
				>
				<ContactList
					items = {listContacts}
					onDelete = {onDelete}
					onEditContact={onEditContact}
					onAddContact = {onAddContact}
				/>
				<ContactForm
					// key={contactForEdit.id}
					contactForEdit = {contactForEdit}
					onSubmit={onSubmit}
					onDelete={onDelete}
				/>
			</div>
		)
	}
}

export default ContactsMainForm;