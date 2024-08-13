import React, {useState, useEffect } from 'react'

export default function App() {
  // destructuring of data via state
  const [data, setData] = useState([]);
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json()) //cheque condition multiple times use then 
    .then(json => setData(json))
    .then(data => console.log(data))

    }, [])

  return (
    <>
      {data && data.map ((item)=>{
        return (
          <>
            <img src={item.url} alt='images' width={100}/>
          </>
        )
      })}
    </>
  )
}