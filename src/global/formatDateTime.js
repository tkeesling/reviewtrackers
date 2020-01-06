export default function(dateString) {
  return new Date(dateString).toLocaleDateString('en-US');
}

export const formatDateTime = dateString => {
  return new Date(dateString).toLocaleDateString('en-US');
};
