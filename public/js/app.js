console.log('Client side javascript file is loaded!')

fetch('http://localhost:3000/weather?address=Boston')
    .then(response => response.json())
    .then((data) => 
    {
        if (data.error){
            console.error(error);
        }
        else {
            console.log(data);
        }
    });