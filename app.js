import axios from "axios";

async function getData(Number) {
    try {
    const {data: users} = await axios("https://jsonplaceholder.typicode.com/users/" + Number);
    console.log(users);
    const {data: posts} = await axios ("https://jsonplaceholder.typicode.com/posts/" + Number);
    console.log(posts);
    
    const {data: sumdata} = {data: users} + {data: posts};
    return {data: sumdata};

    } catch (error) {
        console.log(error);
    }
}
export default getData;