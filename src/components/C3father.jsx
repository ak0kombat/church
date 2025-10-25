import React from 'react'
import  cfather from '../assets/fatherImg/father3.jpg'

const C3Father = () => {
  return (
    <section className=" w-full h-[100vh] md:h-[85vh] flex flex-col md:flex-row  ">
      <div className="bg-green md:w-[40vw] h-full flex relative justify-center">
        <img
          src={cfather}
          alt="father-1"
          className="w-[250px] h-[320px] md:w-[300px] md:h-[400px] absolute top-25 md:top-30 md:right-[-60px]  rounded "
        />
      </div>
      <div className=" md:w-[60vw] h-full flex justify-center items-center ">
        <header className="flex flex-col text-center  items-center capitalize gap-3  ">
          <h1 className="text-5xl font-bold font-sans ">Fr. Jerome gnana prabu</h1>
          <p className="font-bold">
           - Parish prest
          </p>
         
          <button className="border-2 w-fit  border-green p-1 bg-green cursor-pointer text-white rounded capitalize"> read more!</button>
        </header>
      </div>
    </section>
  )
}

export default C3Father
