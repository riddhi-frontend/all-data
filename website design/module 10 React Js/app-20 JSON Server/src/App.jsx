// script add: "json-server": "json-server --watch (data base name) --port 8000"
// npm run json-server
// cheque proper view in firefox
import React from "react";
function App()
{
    return (
        <>
            <h2>Examples of json JsonServer</h2>
            <h3>What is json ?</h3>
            <p>Json stands for javascript object notations </p>
            <p>Json is manage to call an api</p>
            <p>Json used some function to convert any json data in object or string</p>
            <p>JSON is a lightweight format for storing and transporting data</p>
            <p>JSON is often used when data is sent from a server to a web page</p>
            <p>JSON is self-describing and easy to understand</p>
                1) JSON.stringify();
                    Example:
                        {/* 
                            <p>examples :  {
                                "employees":[
                                    {"firstName":"John", "lastName":"Doe"},
                                    {"firstName":"Anna", "lastName":"Smith"},
                                    {"firstName":"Peter", "lastName":"Jones"}
                                ]
                                }
                            </p> */}
                2) JSON.object();
                Example:
                    {/* <p>examples :  {
                        "employees":[
                            {"firstName":"John", "lastName":"Doe"},
                            {"firstName":"Anna", "lastName":"Smith"},
                            {"firstName":"Peter", "lastName":"Jones"}
                            ]
                            }
                            </p> */}

            <h3>What is api ?</h3>
            <p>api stands for applications programming language</p>
            <p>api get data in format of json</p>
            <p>json file extension is .json</p>
    <p>api generated url :  http://localhost:8000/contact-us</p>

        </>
    )
}

export default App