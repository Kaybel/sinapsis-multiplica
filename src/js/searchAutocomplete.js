Promise.all([ // Ejecuta todas las llamadas de manera paralela
    fetch('../api/city.json'),
    fetch('../api/topic.json'),

]).then(
    (responses) => { // Responde a todas las promesas
        return Promise.all(responses.map((response) => {
            return response.json();
        }));
    }
).then((responseJsons) => { // Arreglo de respuestas en json
    console.log(response.json);
    dropdown1(responseJsons[0]);
    filterTopics(responseJsons[1]);
    let cities = responseJsons[0];

}).catch(

    (error) => { // Al menos una llamada falló
        console.log(error);
    }
);
Promise.all([ // Ejecuta todas las llamadas de manera paralela
    fetch('../api/city.json'),
    fetch('../api/topic.json'),

]).then(
    (responses) => { // Responde a todas las promesas
        return Promise.all(responses.map((response) => {
            return response.json();
        }));
    }
).then((responseJsons) => { // Arreglo de respuestas en json
    console.log(response.json);
    dropdown1(responseJsons[0]);
    filterTopics(responseJsons[1]);
    let cities = responseJsons[0];

}).catch(

    (error) => { // Al menos una llamada falló
        console.log(error);
    }
);