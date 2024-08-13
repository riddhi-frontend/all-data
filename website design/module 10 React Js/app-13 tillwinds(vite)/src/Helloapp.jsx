import React from "react";
function Helloapp(){
    return(
        <>
        <div className="bg-teal-400">
            <h1 className="text-5xl hover:text-3xl">Hello world!</h1>
            <p className="italic text-fuchsia-700 Class font-bold hover:not-italic">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore maiores perferendis aspernatur doloribus atque nesciunt consectetur numquam cum, adipisci eveniet molestiae molestias laboriosam rerum soluta ab? Adipisci dignissimos laudantium earum.</p>
        </div>

        <button type="btn" className="mt-6 ml-5 p-5 w-32 h-20 bg-gradient-to-r from-sky-500 to-indigo-500 ">click me</button>
        </>
    )
}
export default Helloapp