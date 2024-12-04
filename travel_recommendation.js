const btnSearch = document.getElementById("btnSearch");
const btnResetSearch = document.getElementById("btnResetSearch");

function searchDestination(){
    const input = document.getElementById("destinationInput").value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
    .then( response => response.json())
    .then( data =>{

    })
    .catch(error =>{
        console.log('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
    });
}
