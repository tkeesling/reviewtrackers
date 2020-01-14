import React, { useEffect, useState } from 'react';

const useFormHook = (callback, initialState, validate) => {
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

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setValues({ ...values, published_at: `${new Date(Date.now())}` }); // wouldn't set this client side normally
    setSubmitting(true);
  };

  return {
    handleChange,
    handleSubmit,
    errors,
    values,
  };
};

export default useFormHook;
