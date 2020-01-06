export default function validateForm(values) {
  let errors = {};
  // name error
  if (!values.author) {
    errors.author = 'A name is required.';
  } else if (values.author.length < 3) {
    errors.author = 'A name must be at least 3 characters.';
  }
  // comment error
  if (!values.comment) {
    errors.comment = 'A comment is required.';
  }

  return errors;
}
