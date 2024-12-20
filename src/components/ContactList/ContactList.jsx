import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, deleteContact } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);

    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <ul className={styles.contactList}>
            {filteredContacts.map((contact) => (
                <Contact
                    key={contact.id}
                    contact={contact}
                    onDeleteContact={() => dispatch(deleteContact(contact.id))}
                />
            ))}
        </ul>
    );
};

export default ContactList;
