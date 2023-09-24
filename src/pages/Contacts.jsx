import Notiflix from 'notiflix';
import { Container } from '../components/container/Container';
import { Section } from '../components/section/Section';
import { Loader } from '../components/Loader/Loader';

import ContactForm from '../components/ContactForm/ContactForm';
import Contacts from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { useSelector } from 'react-redux';
import { selectLoading, selectError } from '../Redux/selectors';

const ContactsPage = () => {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  if (isError) Notiflix.Notify.warning(`${isError.message}`);
  return (
    <Container>
      {isLoading && <Loader />}

      <Section>
        <h1>Phonebook</h1>
        <ContactForm />
        {!isError && (
          <>
            <h2>Contacts</h2>
            <Filter />
            <Contacts />
          </>
        )}
      </Section>
    </Container>
  );
};

export default ContactsPage;