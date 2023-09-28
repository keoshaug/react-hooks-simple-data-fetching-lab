import React, {useEffect, useState} from "react";

const imgURL = "https://dog.ceo/api/breeds/image/random"

function App() {
    const [image, setImage] = useState(null);

    useEffect(() => {
         fetch(imgURL)
         .then(r => r.json())
         .then(data => setImage(data.message))
        }, [])

        if (!image) {
            return <p>Loading...</p>
        }
        

    return (
          <div>
                <img src={image} alt="A Random Dog"/>
          </div>
    );
}


export default App;
