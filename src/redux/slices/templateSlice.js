import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  templates: [],
  loading: false,
  error: null,
  selectedTemplate: null,
  filters: {
    status: 'all',
    type: 'all',
    language: 'all'
  }
};

const templateSlice = createSlice({
  name: 'templates',
  initialState,
  reducers: {
    fetchTemplatesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchTemplatesSuccess: (state, action) => {
      state.loading = false;
      state.templates = action.payload;
    },
    fetchTemplatesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addTemplate: (state, action) => {
      state.templates.push(action.payload);
    },
    updateTemplate: (state, action) => {
      const index = state.templates.findIndex(template => template.id === action.payload.id);
      if (index !== -1) {
        state.templates[index] = action.payload;
      }
    },
    deleteTemplate: (state, action) => {
      state.templates = state.templates.filter(template => template.id !== action.payload);
    },
    setSelectedTemplate: (state, action) => {
      state.selectedTemplate = action.payload;
    },
    setTemplateFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    duplicateTemplate: (state, action) => {
      const template = state.templates.find(t => t.id === action.payload);
      if (template) {
        const newTemplate = {
          ...template,
          id: Math.max(...state.templates.map(t => t.id)) + 1,
          title: `${template.title} (Copy)`,
          status: 'Inactive'
        };
        state.templates.push(newTemplate);
      }
    }
  }
});

export const {
  fetchTemplatesStart,
  fetchTemplatesSuccess,
  fetchTemplatesFailure,
  addTemplate,
  updateTemplate,
  deleteTemplate,
  setSelectedTemplate,
  setTemplateFilters,
  duplicateTemplate
} = templateSlice.actions;

export default templateSlice.reducer;
