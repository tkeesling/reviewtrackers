export default function validateForm(values) {
  let errors = {};
  // name error
  if (!values.name) {
    errors.name = 'A name is required.';
  } else if (values.name.length < 3) {
    errors.name = 'A name must be at least 3 characters.';
  }
  // comment error
  if (!values.comment) {
    errors.comment = 'A comment is required.';
  }

  return errors;
}
