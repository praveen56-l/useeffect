import Navigation from './Navigation';
import React,{useEffect,useState} from "react";

const Commands=()=>{
const[center,setCenter]=useState([])
let c=center
const[Commands,setCommands]=useState(c)
useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/comments")
.then(a =>a.json())
.then(arr=>{
  setCenter(arr)
})
},[])
const handlechange=(k)=>{
    let  context = k.target.value
    let ascii = context.charCodeAt(0)

    let smart = parseInt(context)
    console.log("user", user)
    if (smart >= 0 && smart <= 1000 && !(ascii >= 65 && ascii <= 90) && !(ascii >= 97 && ascii <= 122)) {
        setCopy(b.slice(0, smart))
    } else {
        setCopy(user)

        alert("invalid input")

    }
}
console.log("copy", copy)
}


    return(
        <>
        <Navigation/>
        <h1 className="center">commends</h1>
        <input type='text'className='text'onChange={handlechange}></input>
        <div className="main">
         {Commands.map(item=>(
            <div className="sub">
                <h3>{item.id}</h3>
                <p>{item.name}</p>
                <p>{item.email}</p>
                <p>{item.body}</p>
                </div>
         ))}

        </div>

        </>
    )
}
export default Commands;