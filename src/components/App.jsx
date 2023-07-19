import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchContacts from './FilterContacts/FilterContacts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectContactsState } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import SyncLoader from 'react-spinners/SyncLoader';
import './App.scss';

export default function App() {
  const dispatch = useDispatch();
  // const storage = useSelector(selectContacts); // моя логіка - перевіряємо чи сховище пусте ("контакти пусті" якось не звучить )
  //----------------------------------------------------------------
  const { items, isLoading, error } = useSelector(selectContactsState);
  // console.log(items, isLoading, error);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  /*
  Створи сховище з configureStore()
  Використовуй функцію createSlice()
  Створи дії збереження та видалення контакту, а також оновлення фільтра
  Зв'яжи React-компоненти з Redux-логікою за допомогою хуків бібліотеки react-redux.
  Використай бібліотеку Redux Persist для збереження масиву контактів у локальному сховищі
*/
  return (
    <div className="container">
      <h2>Phone Book</h2>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ContactForm />
      {isLoading && (
        <div className="loaderBlock">
          <SyncLoader
            color="steelblue"
            cssOverride={{
              margin: '0 auto',
            }}
            size={18}
          />
          <p>Loading tasks...</p>
        </div>
      )}
      {error && <p className="errorBlock">{error}</p>}
      {items.length !== 0 && (
        <>
          <SearchContacts />
          <ContactList />
        </>
      )}
    </div>
  );
}
