const url = 'http://localhost:8080/api/questions/getAll';
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6W10sImlkIjoxLCJlbWFpbCI6ImV4YW1wbGVAZXhhbXBsZS5jb20iLCJzdWIiOiJleGFtcGxlQGV4YW1wbGUuY29tIiwiaWF0IjoxNzEwMTYzODYzLCJleHAiOjE3MTAyNTAyNjN9.GFT97C7ZrMEaMmxZkZO3KnOJfpMvqFrYrmVYuglZeoI';

fetch(url, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  // Handle the data from the response
  console.log(data);
  document.getElementById('questions').innerHTML = data.content.map(
                            question => "<p>"+JSON.stringify(question)+"</p>");
})
.catch(error => {
  // Handle errors
  console.error('There was a problem with your fetch operation:', error);
});
