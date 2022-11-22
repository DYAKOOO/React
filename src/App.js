import { useEffect } from "react";
import axios from 'axios'

function App() {

  useEffect(() => {

    async function pingAPI() {
      return await axios.get("https://api.coingecko.com/api/v3/ping")
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }

    pingAPI()

  }, [])

  return (
    <div>
      Hello World
    </div>
  );
}
//to fix the error fail to push some refs, we need to add the following code to the package.json file
//To fix ithe invalid branch name : "head", we need to add the following code to the package.json file 
//Path: coingecko-react\package.json



export default App;
