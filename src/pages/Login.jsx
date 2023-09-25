import { useDispatch } from 'react-redux';
import { logInUser } from 'Redux/operations';
import { Container } from 'components/container/Container';
import { useState } from "react";

import css from './Login.module.css';

const Login = () => {
   const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const hendleSubmite= event => {
        event.preventDefault();
        dispatch(logInUser({ email, password }));
        setEmail('');
        setPassword('');
    };

  return (
    <Container>
      <section className={css.section}>
        <div className={css.formwrapper}>
          <form className={css.useagecard} onSubmit={hendleSubmite}>
            <label className={css.useagecard__lable}>E-Mail</label>
            <input
              className={css.useagecard__input}
              name="email"
              type="text"
              value={email}
               onChange={handleChange}
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              // required
            />
            <label className={css.useagecard__lable}>Password</label>
            <input
              className={css.useagecard__input}
              name="password"
              type="number"
              value={password}
               onChange={handleChange}
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              // required
            />
            <button type="submit" className={css.useagecard__button}>
              Login
            </button>
          </form>
        </div>
      </section>
    </Container>
  );
};

export default Login;