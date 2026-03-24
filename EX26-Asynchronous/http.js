// exercise 31 http requist

async function getUserData() {
    
    try{

        let userinfo = await fetch('https://jsonplaceholder.typicode.com/users');

            console.log(userinfo);

        let users = await userinfo.json();
            console.log(users);

    }catch(error) {
        console.log(error);
    }
}

getUserData();
