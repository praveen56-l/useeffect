import Navigation from './Navigation';
import React, { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Ground } from './context';

const Card = ({data}) => {
    return (
      <>
      <div className='changepointer'>
        <h3>{data && data.id}</h3>
        <p>{data && data.name}</p>
        <p>{data && data.email}</p>
        <p>{data && data.username}</p>
        <p>{data && data.phone}</p>
        <p>{data && data.website}</p>
        <p>{data && data.address.street}</p>
        <p>{data && data.address.city}</p>
        <p>{data && data.address.zipcode}</p>
        <p>{data && data.company.name}</p>
        </div>
      </>
    );
  };

const User = () => {
    const useGroundContext = useContext(Ground)
    let b = useGroundContext.user
    const [copy, setCopy] = useState(b)
    const [on,setOn]=useState(null)
    const [increment, setIncrement] = useState(0)

















  

const [input, setInput] = useState("Prav")
const [apiResponse, setApiRespose] = useState([{name: "Praveen"},{name: "Prasanth"},{name: "Praveen"},{name: "Prakash"}])

const _handleIncrement = useCallback(() =>{
  setIncrement(increment+1)
},[input, ])


    const result = useMemo(()=>{
      return apiResponse.filter((item) => item.name.includes(input))
      
    },[input]) //p

    console.log("@tm result", result)

    useEffect(() => {
        useGroundContext.fetchCall("users")
    },[])
    console.log("useGroundContext.add",useGroundContext.add)

    const handlechange = (e) => {
        let inputNumber = e.target.value
        let ascii = inputNumber.charCodeAt(0)
        let length = parseInt(inputNumber)
        console.log("user",  b)
        if (length >= 0 && length <= 1000 && !(ascii >= 65 && ascii <= 90) && !(ascii >= 97 && ascii <= 122)) {
            setCopy(b.slice(0, length))
        } else {
            setCopy( b)
                 
            alert("invalid input")

        }
    }
    function handleclick(id){
        if(on && on.id ==id){
            setOn(null)
        }else{
            setOn(b.filter((val)=>val.id===id)[0])
        }
    }
    console.log("copy", copy)



   
    return (

        <>
            <Navigation />
            
            <h1 className="center">users</h1>
            <button onClick={_handleIncrement}>+</button>

            <input type='text' className='text' onChange={handlechange}></input>
            {on === null ? (
        <div className="main">
          {b.map((data) => (
            <div className="sub" onClick={() => handleclick(data.id)}>
              <Card data={data} />
            </div>
          ))}
        </div>
      ) : (
        <div className="sub" onClick={() => handleclick(on.id)}>
          <Card data={on} />
        </div>
      )}
      </>
    )
}
export default User;