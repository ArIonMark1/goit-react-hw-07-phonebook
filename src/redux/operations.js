import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// --------------------------------------------------------------------
axios.defaults.baseURL = 'https://64aadf5c0c6d844abedeef07.mockapi.io';
// --------------------------------------------------------------------

// =================================================================

export const fetchContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// =================================================================
export const createContacts = createAsyncThunk(
  'contacts/createContacts',
  async (name, phone, thunkAPI) => {
    // повертаємо об'єкт чи значення ??
    try {
      console.log(name, phone);
      const response = await axios.post('/contacts', { name, phone });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// =================================================================
export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, thunkAPI) => {
    // видаляємо об'єкт контакту по ID
    try {
      const deletedContact = await axios.delete(`/contacts/${id}`);
      console.log('Deleted contact: ', deletedContact.data);
      return deletedContact.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
