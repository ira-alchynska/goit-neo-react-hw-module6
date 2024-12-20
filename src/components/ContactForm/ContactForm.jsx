import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object({
    name: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(50, 'Must be less than 50 characters')
        .required('Required'),
    number: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(50, 'Must be less than 50 characters')
        .required('Required'),
});

const ContactForm = () => {
    const dispatch = useDispatch();
    const initialValues = { name: '', number: '' };

    const handleSubmit = (values, { resetForm }) => {
        const newContact = { id: nanoid(), ...values };
        dispatch(addContact(newContact));
        resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form className={styles.form}>
                <label>
                    Name
                    <Field className={styles.input} name="name" type="text" />
                    <ErrorMessage
                        name="name"
                        component="div"
                        className={styles.error}
                    />
                </label>
                <label>
                    Number
                    <Field className={styles.input} name="number" type="text" />
                    <ErrorMessage
                        name="number"
                        component="div"
                        className={styles.error}
                    />
                </label>
                <button type="submit" className={styles.button}>
                    Add contact
                </button>
            </Form>
        </Formik>
    );
};

export default ContactForm;
