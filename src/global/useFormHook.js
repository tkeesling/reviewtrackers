import React, { useEffect, useState } from 'react';

function useFormHook(callback, initialState, validate) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        callback(values);
        setSubmitting(true);
      } else {
        setSubmitting(false);
      }
    }
  }, [errors]);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setValues({ ...values, published_at: `${Date.now()}` });
    setSubmitting(true);
  }

  return {
    handleChange,
    handleSubmit,
    errors,
    values,
  };
}

export default useFormHook;