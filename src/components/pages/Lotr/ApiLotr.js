import React from 'react'

function ApiLotr() {
  return (
    <div>ApiLotr</div>
  )
}

export default ApiLotr

// import axios from 'axios'
// import { useState, useEffect} from 'react'


// const useLord = (url) => {

// const [loading, setLoding] = useState(false)
// const [result, setResult] = useState([])
// const [error, setError] = useState({})


//    useEffect(() => {
//      const baseUrl = "https://the-one-api.dev/v2/"+url;

//      const headers = {
//        Accept: "application/json",
//        Authorization: "",
//      };

// Registered email address: aepaezp@gmail.com

// Access token: nr9mUBiPDHSvg418q-zm (Include this in your API calls!)


//      (async function () {
//        try {
//          setLoding(true);
//          const response = await axios.get(baseUrl, { headers });
//          //console.log(response.data.docs);
//          console.log(response)
//          if (response.data.docs.length > 0) {
//               setLoding(false);
//               setResult(response.data);
//          }
        
//        } catch (error) {
//          setError(error);
//        }
//      })();
//    }, [url]);

//    return [loading, result, error] 
// }

// export default ApiLotr