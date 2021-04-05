console.log('js file connected'); 

function performGetRequest1(){

    let resultElement = document.getElementById('getResult1');
    resultElement.innerHTML = ''; 

    axios.get('http://jsonplaceholder.typicode.com/todos')
        .then(function(response){
            console.log(response); 
            resultElement.innerHTML = generateSuccessHTMLOutput(response);
    });
}

function performGetRequest2(){
    
    let resultElement = document.getElementById('getResult2');
    let searchId = document.getElementById('todoId').value; 
    resultElement.innerHTML = ''; 

    axios.get('http://jsonplaceholder.typicode.com/todos',{
        params: {
            id: searchId
        }
    })
    .then(function(response){
        console.log(response)
        resultElement.innerHTML = generateSuccessHTMLOutput(response); 
    })
}

document.getElementById('todoInputForm').addEventListener('submit', performPostRequest);

function performPostRequest(e){

    let resultElement = document.getElementById('postResult');
    let todoTitle = document.getElementById('todoTitle').value;
    resultElement.innerHTML = ''; 

    axios.post('http://jsonplaceholder.typicode.com/todos',{
        completed: true, 
        id: 201,
        title: todoTitle, 
        userId: 11
    })
    .then(function(response){
        console.log(response)
        resultElement.innerHTML = generateSuccessHTMLOutput(response)
    })
    .catch(function(error){
        console.log(error.response.status)
    })

    e.preventDefault(); 
}

function clearOutput(){

    document.getElementById('getResult1').innerHTML = ''; 
    document.getElementById('getResult2').innerHTML = '';
    document.getElementById('postResult').innerHTML = ''; 
}

function generateSuccessHTMLOutput(response) {
    return  '<h4>Result</h4>' + 
            '<h5>Status:</h5> ' + 
            '<pre>' + response.status + ' ' + response.statusText + '</pre>' +
            '<h5>Headers:</h5>' + 
            '<pre>' + JSON.stringify(response.headers, null, '\t') + '</pre>' + 
            '<h5>Data:</h5>' + 
            '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>'; 
}

function generateErrorHTMLOutput(error) {
    return  '<h4>Result</h4>' + 
            '<h5>Message:</h5> ' + 
            '<pre>' + error.message + '</pre>' +
            '<h5>Status:</h5> ' + 
            '<pre>' + error.response.status + ' ' + error.response.statusText + '</pre>' +
            '<h5>Headers:</h5>' + 
            '<pre>' + JSON.stringify(error.response.headers, null, '\t') + '</pre>' + 
            '<h5>Data:</h5>' + 
            '<pre>' + JSON.stringify(error.response.data, null, '\t') + '</pre>'; 
}
