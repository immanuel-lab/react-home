import amazon from './amazon.jpg';
import React,{useState} from   "react"

function Nav1(){
    const [show,setShow]=useState(false);
    return(
        <div className="relative  h-20 bg-gray-500 mx-auto flex ">
        
        <div className="hidden md:flex text-2xl py-4 uppercase  list-none 
        justify-between gap-x-14 items-center">
        
        <div className="rounded-full overflow-hidden ">
        <img src={amazon} className="object-scale-down h-20 w-18"/>
        </div>

    <div className=" flex gap-20  ml-64">
        <li className=" hover:bg-gray-900 hover:text-white cursor-pointer hover:ease-in duration-300">home</li>
        <li className=" hover:bg-gray-900 hover:text-white cursor-pointer hover:ease-in duration-300">about</li>
        <li className=" hover:bg-gray-900 hover:text-white cursor-pointer hover:ease-in duration-300">visit</li>
        <li className=" hover:bg-gray-900 hover:text-white cursor-pointer hover:ease-in duration-300">contact</li>
        <div className="">
        <li onMouseOver={()=>setShow(true)} onMouseOut={()=>setShow(false)} className="block hover:bg-gray-900 hover:text-white cursor-pointer hover:px-2 hover:ease-in duration-300">features </li>
            {show ?
           <div className="absolute bg-gray-400   hover:text-white px-5   ">
            <li onMouseOver={()=>setShow(true)} onMouseOut={()=>setShow(false)} className="text-gray-900 hover:bg-gray-900  border-b-2  border-gray-900 hover:text-white hover:cursor-pointer py-2 ">convertor</li>
            <li onMouseOver={()=>setShow(true)} onMouseOut={()=>setShow(false)} className="text-gray-900 hover:bg-gray-900  border-b-2 border-gray-900 hover:text-white  hover:cursor-pointer py-2">shop</li>
            <li onMouseOver={()=>setShow(true)} onMouseOut={()=>setShow(false)} className="text-gray-900 hover:bg-gray-900  border-b-2  border-gray-900 hover:text-white mb-2  hover:cursor-pointer py-2">sell</li>
            </div>:null}
        </div>

            
       </div>
            </div>
        </div>    


    )
}
export default Nav1;
