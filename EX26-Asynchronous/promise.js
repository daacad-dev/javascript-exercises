// exercise 27 promise 

function fetchDataWithPromise() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const success = true; 

            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Failed to fetch data.");
            };

        }, 2000);
    });
}

fetchDataWithPromise()
    .then(message => console.log(message))
    .catch(error => console.error(error));



// exercise 28 async/await

function fetchDataWithAsync_Await() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            
            const success = false; 

            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Failed to fetch data.");
            };

        }, 3000);
    });
}

async function displayData() {
    
    try{

        let data = await fetchDataWithAsync_Await();
            console.log(data);

    }catch(error){

        console.log(error);
    }
}

displayData();