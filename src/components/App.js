import React, {useEffect, useState} from "react";


const imgAPI = 'https://images.dog.ceo/breeds/bulldog-english/mami.jpg'

function App() {
    const [image, setImage] = useState(null);
    

useEffect(()=>{
    fetch('https://images.dog.ceo/breeds/bulldog-english/mami.jpg')
    .then((res)=>res.json())
    .then((data)=>setImage(data.image))
}, [])

if(!image) {
    return <p>"Loading..."</p>
}


return (
    <div>
        <img src={imgAPI} alt="A Random Dog"/>
    </div>
);
}


export default App;
