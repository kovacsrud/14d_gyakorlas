import { useState } from "react"

function Maxwell() {

    const [cat,setCat] = useState("https://media.tenor.com/Jojpr9QgMLoAAAAM/maxwell-maxwell-spin.gif")

    function switchCat(){
        if (cat == "https://media.tenor.com/Jojpr9QgMLoAAAAM/maxwell-maxwell-spin.gif"){
            setCat("https://c.tenor.com/kglDzTqoEUAAAAAC/tenor.gif")
        }else{
            setCat("https://media.tenor.com/Jojpr9QgMLoAAAAM/maxwell-maxwell-spin.gif")
        }
    }

    return (
      <div>
        <img className="w-80" src={cat} onClick={()=>switchCat()}/>
      </div>
    )
  }
  
  export default Maxwell