import React from 'react'
import  cfather from '../assets/fatherImg/Savarimuthu.jpg'
const C2Father = () => {
  return (
<section className=" w-full h-[100vh] md:h-[85vh] flex  flex-col md:flex-row-reverse">
      <div className="bg-green md:w-[40vw] h-full flex relative justify-center">
        <img
          src={cfather}
          alt="father-1"
          className="w-[250px] h-[300px] md:w-[300px] md:h-[400px] absolute top-30 md:top-30 md:left-[-60px]  rounded "
        />
      </div>
      <div className=" md:w-[60vw] h-full flex justify-center items-center ">
        <header className="flex text-center flex-col justify-start items-center capitalize gap-3  ">
          <h1 className="text-5xl font-bold font-sans ">savarimuthu Arokiataj</h1>
          <p className="font-bold">
            - father of st. joseph the worker
          </p>
          
          <button className="border-2 w-fit  border-green p-1 bg-green text-white cursor-pointer rounded capitalize"> read more!</button>
        </header>
      </div>
    </section>

   
  )
}

export default C2Father
