import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiHelper from '@/lib/apiHelper';

// Thunk to fetch messages
export const fetchMessages = createAsyncThunk(
  'message/fetchMessages',
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiHelper('GET', '/api/message');
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Thunk to send a message
export const sendMessage = createAsyncThunk(
  'message/sendMessage',
  async (messageData, { rejectWithValue }) => {
    try {
      const response = await apiHelper('POST', '/api/message', messageData);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const messageSlice = createSlice({
  name: 'message',
  initialState: {
    messages: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle fetchMessages
      .addCase(fetchMessages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.loading = false;
        state.messages = action.payload;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Handle sendMessage
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.messages.push(action.payload);
      });
  },
});

export default messageSlice.reducer;
