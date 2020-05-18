import { useState } from 'react';

export function useForm(defaultValues) {
  const [data, setData] = useState(defaultValues);

  function handleChange(event) {
    const { name, type, checked, value } = event.target;

    setData((prev) => ({
      ...prev,
      [name]: type === 'radio' || type === 'checkbox' ? checked : value
    }));
  }

  return [data, handleChange];
}
