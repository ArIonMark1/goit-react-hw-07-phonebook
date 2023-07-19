import { configureStore } from '@reduxjs/toolkit';
import { contactSliceReducer } from './contactsSlice';
// import { filterContactReduser } from './filterSlice';
// ----------------------------------------------------------------

export const store = configureStore({
  reducer: {
    contacts: contactSliceReducer,
    // filters: filterContactReduser,
  },
}); // приймає єдиний аргумент - об'єкт параметрів
