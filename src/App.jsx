import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import './App.css';

const App = () => {
    const [contacts, setContacts] = useState(
        JSON.parse(localStorage.getItem('contacts')) || [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ]
    );
    const [filter, setFilter] = useState('');

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const addContact = (newContact) => {
        if (
            contacts.find(
                (contact) =>
                    contact.name.toLowerCase() === newContact.name.toLowerCase()
            )
        ) {
            alert(`${newContact.name} is already in contacts.`);
            return;
        }
        setContacts((prev) => [newContact, ...prev]);
    };

    const deleteContact = (id) => {
        setContacts((prev) => prev.filter((contact) => contact.id !== id));
    };

    const handleFilterChange = (e) => setFilter(e.target.value);

    const getFilteredContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(normalizedFilter)
        );
    };

    return (
        <div className="wrapper">
            <h1>Phonebook</h1>
            <ContactForm onAddContact={addContact} />
            <SearchBox filter={filter} onFilterChange={handleFilterChange} />
            <ContactList
                contacts={getFilteredContacts()}
                onDeleteContact={deleteContact}
            />
        </div>
    );
};

export default App;
