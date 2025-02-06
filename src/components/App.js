import React, { useState } from "react";

function Bgchanger(){
    const [color, setColor] = useState("olive")
    return(
        <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
            <div className="fixed flex flex-wrap justify-center right-12 inset-x-0 px-5 py-10">
                <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
                    <button 
                    onClick={() => setColor("red")}
                    className="outline-none px-4 py-2 text-black shadow-lg rounded-full"
                    style={{backgroundColor:"red"}} 
                    >Red</button>
                    <button 
                    onClick={() => setColor("green")}
                    className="outline-none px-4 py-2 text-black shadow-lg rounded-full"
                    style={{backgroundColor:"green"}}
                    >Green</button>
                    <button 
                    onClick={() => setColor("blue")}
                    className="outline-none px-4 py-2 text-black shadow-lg rounded-full"
                    style={{backgroundColor:"blue"}}
                    >Blue</button>
                    <button 
                    onClick={() => setColor("olive")}
                    className="outline-none px-4 py-2 text-black shadow-lg rounded-full"
                    style={{backgroundColor:"olive"}}
                    >Olive</button>
                    <button 
                    onClick={() => setColor("grey")}
                    className="outline-none px-4 py-2 text-black shadow-lg rounded-full"
                    style={{backgroundColor:"grey"}}
                    >Grey</button>
                    <button 
                    onClick={() => setColor("yellow")}
                    className="outline-none px-4 py-2 text-black shadow-lg rounded-full"
                    style={{backgroundColor:"yellow"}}
                    >Yellow</button>
                    <button 
                    onClick={() => setColor("pink")}
                    className="outline-none px-4 py-2 text-black shadow-lg rounded-full"
                    style={{backgroundColor:"pink"}}
                    >Pink</button>
                    <button 
                    onClick={() => setColor("purple")}
                    className="outline-none px-4 py-2 text-black shadow-lg rounded-full"
                    style={{backgroundColor:"purple"}}
                    >Purple</button>
                    <button 
                    onClick={() => setColor("lavender")}
                    className="outline-none px-4 py-2 text-black shadow-lg rounded-full"
                    style={{backgroundColor:"lavender"}}
                    >Lavender</button>
                    <button 
                    onClick={() => setColor("white")}
                    className="outline-none px-4 py-2 text-black shadow-lg rounded-full"
                    style={{backgroundColor:"white"}}
                    >White</button>
                    <button 
                    onClick={() => setColor("black")}
                    className="outline-none px-4 py-2 text-white shadow-lg rounded-full"
                    style={{backgroundColor:"black"}}
                    >Black</button>
                </div>
            </div>
        </div>
    )
}

export default Bgchanger;