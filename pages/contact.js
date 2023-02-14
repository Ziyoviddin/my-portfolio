import Head from "next/head" 
import Image from "next/image"
import myImg from "../public/assets/myPic.jpg"
import {BsFillHandIndexThumbFill} from "react-icons/bs"

const contact = () => {
    return(
        <div className="w-screen ">
            <Head>
                <title>contact</title>
            </Head>

            <div className="flex flex-col mx-auto  pt-10 max-[350px]:ml-10">
                <Image src={myImg} alt='My Portret' className="bg-[#edf8fa] rounded-full h-60 w-60 mx-auto mt-20"/>
                <h1 className="text-[#16071c] text-4xl font-bold tracking-wide mx-auto py-3">Contact Me</h1>
                <p className="font-mono mx-auto py-2 ">Connection options with me!</p>
                <hr className="w-40 border-2  border-green-700 rounded-lg mx-auto max-[350px]:hidden"/> 
                <p className=" mx-auto py-1"><span className='font-bold'>Phone:</span> <span className="underline decoration-green-500 tracking-widest">+905539571583</span></p>
                <p className=" mx-auto py-1"><span className='font-bold'>Current Location:</span> Turkey, Sakarya</p>
                <p className=" mx-auto py-1"><span className='font-bold'>WhatsApp:</span > <span className="underline decoration-green-500 tracking-widest">+905524295996</span></p>
                <p className=" mx-auto py-1"><span className='font-bold'>Email:</span> ziyoviddinakramov@gmail.com</p>
                <div className=" mx-auto py-2 flex flex-row"> <BsFillHandIndexThumbFill className="text-yellow-400"/><p className="pl-2 decoration-orange-500 underline">Connect</p></div>
               
            </div>
        </div>
    )
}

export default contact