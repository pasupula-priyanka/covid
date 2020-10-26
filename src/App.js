import React,{useEffect,useState} from 'react'
import './App.css';
import axios from 'axios';
function App() {
  const [data,setData] = useState();
   useEffect(()=>{
    axios.get("https://corona.lmao.ninja/v2/all")
    .then(response=>{
      setData(response.data)
      console.log(response.data)
    })
   },[]);

   
  return (
    <div className="App">
        <h1>COVID TRACKER</h1>
        <hr></hr>
        <h1 className="cases"> Cases: {data.cases}</h1>
        <h1 className="recovered">Recovered: {data.recovered}</h1>
        <h1 className="critical">Critical: {data.critical}</h1>
        <h1>Deaths: {data.deaths}</h1>
    </div>
  );
}

export default App;
