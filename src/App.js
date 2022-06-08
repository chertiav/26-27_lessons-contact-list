import React, { Component } from 'react';
import './App.css';
import ContactsMainForm from './components/ContactsMainForm/ContactsMainForm';

export class App extends Component {

	state = {
		listContacts: [],
		contactForEdit: this.createEmptyContact(),
	}

	createEmptyContact () {
		return {
			id: null,
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
		}
	}

	componentDidMount(){
		const fromStorage = JSON.parse(localStorage.getItem('contacts'));
		if (!fromStorage) {
			this.setState({
				listContacts: [],
				})
		} else {
			this.setState({
				listContacts: [...fromStorage],
			})
		}
	}

	componentDidUpdate (){
		localStorage.setItem('contacts', JSON.stringify(this.state.listContacts));
	}

	saveToStorage (contacts) {
		localStorage.setItem('contacts', JSON.stringify(contacts));
	}

	saveContact = (contact) => {
		if (!contact.id) {
			this.creatContact(contact);
		}
		else {
			this.updateContact(contact);
		}
	}

	deleteContactItem = (id) => {
		const contacts = [...this.state.listContacts.filter(userItem => userItem.id !== id)];
		this.saveToStorage(contacts);
		this.setState({
			listContacts: contacts,
			contactForEdit: this.createEmptyContact(),
		})
	}

	creatContact (contact) {
		contact.id = Date.now();
		const contacts =[...this.state.listContacts, contact];
		this.saveToStorage(contacts);
		this.setState({
			listContacts: contacts,
			contactForEdit: this.createEmptyContact(),
		})
	}

	updateContact(contact){
		this.setState((state) => {
			const contacts = state.listContacts.map((item) =>
				item.id === contact.id ? contact : item);
			this.saveToStorage(contacts);
			return {
				listContacts: contacts,
				contactForEdit: this.createEmptyContact(),
			};
		});
	}

	selectContact = (contact) => {
		this.setState({
			contactForEdit: contact,
		});
	}

	addNewContact = () => {
		this.setState({
			contactForEdit: this.createEmptyContact(),
		});
	}

	render() {
		const { listContacts, contactForEdit } = this.state;
		return (
			<>
				<header className="container-title">
					<h1>Contact list</h1>
				</header>
				<ContactsMainForm
					listContacts = {listContacts}
					contactForEdit = {contactForEdit}
					onSubmit={this.saveContact}
					onDelete={this.deleteContactItem}
					onAddContact={this.addNewContact}
					onEditContact={this.selectContact}
					>
				</ContactsMainForm>
			</>
		)
	}
}

export default App;