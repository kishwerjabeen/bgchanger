import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <h1 className="text-white flex justify-center pt-20 text-5xl">Kishwar J.</h1>
        <div className="fixed flex flex-wrap
        justify-center bottom-12 inset-x-0 px-2">


          

          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">

            <button
              onClick={() => setColor("red")}

              className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{ backgroundColor: "red" }}>
              Red
            </button>


            <button 
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{ backgroundColor: "green" }}>
              Green
            </button>


            <button 
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{ backgroundColor: "Blue" }}>
              Blue
            </button>

            <button 
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{ backgroundColor: "Black" }}>
              Black
            </button>

            <button 
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{ backgroundColor: "Orange" }}>
              Orange
            </button>


            <button 
            onClick={() => setColor("Purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{ backgroundColor: "Purple" }}>
              Purple
            </button>



          </div>

        </div>
      </div>
    </>
  )
}

export default App
