export default function(dateString) {
  return new Date(dateString).toLocaleDateString('en-US');
}
