function search() {
  let { value } = document.getElementById('searchInput');
  const baseUrl = 'https://google.com/search?q=';
  location.replace(baseUrl + value);
}
