import ContactItem from 'components/ContactsItem/ContactsItem';
import { ContactsWrapper } from './Contacts.styled';

const Contacts = ({ array }) => {
  return (
    <>
      <ContactsWrapper>
        {array.map(el => {
          return <ContactItem key={el.id} el={el} />;
        })}
      </ContactsWrapper>
    </>
  );
};

export default Contacts;
