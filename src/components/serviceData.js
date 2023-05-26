import axios from "axios";

export const getData = (url) => {

    let etat = false;


    axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => { return { etat : true , data : res.data }})
    .catch((res) => { return { etat : true , data : res.data }});


    /*axios.get(url)
    .then((res) => {
        return { etat : true , data : res.data }
    })
    .catch((err) => {
        return err
    })*/




}