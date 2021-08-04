import React, { useState } from 'react'

const axios = require('axios');

// // Make a request for a user with a given ID
// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });

// // Optionally the request above could also be done as
// axios.get('/user', {
//     params: {
//       ID: 12345
//     }
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });  

 // Want to use async/await? Add the `async` keyword to your outer function/method.
 async function getUser() {
   try {
    const response = await axios.get('http://api.github.com/users/Aniket762');
     //console.log(response);
   } catch (error) {
     //console.error(error);
   }
 }

 

export default function Shantanu() {

//     const [data, setData] = useState(' ')

//    const value = getUser();
//    console.log(value)

const [notes, getNotes] = useState('');

const url = 'http://api.github.com/users/Aniket762';

const getAllNotes = () => {
    axios.get(`${url}`)
    .then((response) =>{
        const allNotes = response.data;
        console.log(allNotes)
    })
    .catch(error => console.log(`error`));
}

    return (
        <div>
            <h1>hello</h1>
        </div>
    )
}

