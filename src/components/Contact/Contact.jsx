import { FaUser, FaPhone } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = ({ contact, onDeleteContact }) => (
    <li className={styles.contact}>
        <div className={styles.contactWrapper}>
            <div className={styles.contactDetails}>
                <FaUser className={styles.icon} />
                <p>{contact.name}</p>
            </div>
            <div className={styles.contactDetails}>
                <FaPhone className={styles.icon} />
                <p>{contact.number}</p>
            </div>
        </div>
        <button
            className={styles.contactButton}
            onClick={() => onDeleteContact(contact.id)}
        >
            Delete
        </button>
    </li>
);

export default Contact;
