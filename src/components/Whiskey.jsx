import { useState, useEffect } from "react"

function Whiskey() {

    const [drink, setDrink] = useState([]);

    useEffect(()=>{
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=whiskey`)
        .then(res=>res.json())
        .then(adat=>setDrink(adat.drinks[0]))
        .catch(err=>console.log(err));

    },[]);

  return (
    <div>
        <div className="card bg-orange-300 w-96 shadow-sm">
            <figure>
                <img
                src={drink.strDrinkThumb}
                alt={drink.strDrink} 
                className="h-96 w-96"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{drink.strDrink}<div className="badge bg-lime-500 border-lime-500">{drink.strCategory}</div></h2>
                <p>{drink.strInstructions}</p>
                <div>
                    <ul className="list-disc pl-5">
                        <li>{drink.strAlcoholic}</li>
                        <li>{drink.strGlass}</li>
                    </ul>
                </div>
                <div className="card-actions justify-end">
                <a href={drink.strVideo} target="_blank"><button className="btn bg-lime-500 border-lime-500">Videó</button></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Whiskey