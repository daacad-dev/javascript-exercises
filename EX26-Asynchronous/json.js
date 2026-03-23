// exercise 29 json server file

async function serverData() {
    
    try{

        let respose = await fetch('https://jsonplaceholder.typicode.com/users');

        let users = await respose.json();
            console.log(users[0]);

    }catch(error) {
        console.log(error);
    }
}

serverData();