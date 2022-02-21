import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';


const URL = 'https://www.thecocktaildb.com/api/json/v1/1/';
const API_KEY = '1';

function App() {
  const [error,setError] = useState(null);
  const [isLoaded,setIsLoaded] = useState(false);
  const [items,setItems] = useState([]);
  const [selectedItem,setSelectedItem] = useState(null);
  const [juoma,setJuoma]=useState("margarita")
 
  //const [kieli,setKieli] = useState(.strInstructions);


  function satunnainen() {
  //  setSelectedItem(document.getElementById("juoma").value)
   // setKieli(item.strInstructionsDE)
    //setSelectedItem(item)
    setJuoma(document.getElementById("juomaa").value)
    const valinta=document.getElementById("juomaa").value;
    const criteria ='search.php?s=';
  }

 

useEffect(() => {
  
  const criteria ='search.php?s=';
  const address = URL + '/' + criteria +juoma+ '&apikey=' + API_KEY;

  



  axios.get(address)
  .then((response) => {
    setItems(response.data.drinks)
  }).catch(error => {
    alert(error)
  });
}, []);



 if (error) {
  return <p>{error.message}</p>

}  else {

  return (
    <div>
    
      <h1>Best margaritas</h1>
      <div>
        {
             items?.map(item =>(
              <div key={item.strDrink} onClick={e => setSelectedItem(item)}>
              <img src={item.strDrinkThumb} />
                <h3>{item.strDrink}</h3>
                <h3>Instructions:</h3>
                <p>{item.strInstructions}</p>
                <p>{item.kieli}</p>
                <p>Glass: {item.strGlass}</p>
                <output>
                <ul>
                  <li>{item.strIngredient1} {item.strMeasure1}</li>
                  <li>{item.strIngredient2} {item.strMeasure2}</li>
                  <li>{item.strIngredient3} {item.strMeasure3}</li>
                  <li>{item.strIngredient4} {item.strMeasure4}</li>
                  <li>{item.strIngredient5} {item.strMeasure5}</li>
                </ul>
                </output>
                </div>
        ))
      }
      </div>
    </div>
  );
}
}

export default App;