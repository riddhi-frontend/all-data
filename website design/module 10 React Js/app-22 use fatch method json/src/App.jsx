import React from 'react'
import useFetch from 'react-fetch-hook' //useFetch() is also called customHooks
function App()
{
    // destructuring of data using useFetch
    const{data:posts, isLoading, error}=useFetch('https://jsonplaceholder.typicode.com/users');//fake api
    // show a loading messages (conditional rendaring)
    if(isLoading)
    {
        return <h1>Your data is loading.....</h1>
    }
    if(error)
    {
        return <div className='err'>Errors while loading api please check networks connections</div>
    }

    return (
        <>
          {/* applied map functions */}
          {posts && posts.map((row)=>{
              return (
                  <>
                      <h4>Name of users is :{row.name}</h4>
                      <p>Email of users is :{row.email}</p>
                  </>
              )
          })}
        </>
    )
}

export default App


// data: The fetched data, which is renamed to posts.
// isLoading: A boolean indicating whether the data is still being loaded.
// error: Any error that occurred during the fetch.

// First posts: The first posts && acts as a guard to check (not null, undefined, or false).
// Second posts: The second occurrence of posts is where the map function is actually called to iterate over the array and render the JSX.