import Navigation from './Navigation';
import React, { useEffect, useState } from "react";

const User = () => {
    const [user, setUser] = useState([])
    let b = user
    const [copy, setCopy] = useState(b)
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(a => a.json())
            .then(b => {
                setUser(b)
            })
    }, [])
    const handlechange = (e) => {
        let inputNumber = e.target.value
        let ascii = inputNumber.charCodeAt(0)

        let length = parseInt(inputNumber)
        console.log("user", user)
        if (length >= 0 && length <= 1000 && !(ascii >= 65 && ascii <= 90) && !(ascii >= 97 && ascii <= 122)) {
            setCopy(b.slice(0, length))
        } else {
            setCopy(user)

            alert("invalid input")

        }
    }
    console.log("copy", copy)
    return (

        <>
            <Navigation />
            <h1 className="center">users</h1>

            <input type='text' className='text' onChange={handlechange}></input>

            <div className="main">
                {copy.map((data) => (
                    <div className="sub">
                        <h3>{data.id}</h3>
                        <p>{data.name}</p>
                        <p>{data.email}</p>
                        <p>{data.username}</p>
                        <p>{data.phone}</p>
                        <p>{data.website}</p>
                        <p>{data.address.street}</p>
                        <p>{data.address.city}</p>
                        <p>{data.address.zipcode}</p>
                        <p>{data.company.name}</p>
                    </div>
                ))}

            </div>

        </>
    )
}
export default User;