import React, { createContext, useContext, useState } from 'react';

const FormDataContext = createContext();

export function FormDataProvider({ children }) {
  const [formData, setFormData] = useState({});

  const updateFormData = (newData) => {
    setFormData({ ...formData, ...newData });
  };

  return (
    <FormDataContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormDataContext.Provider>
  );
}

export function useFormData() {
  return useContext(FormDataContext);
}
