import Link from "next/link"
import {BsFillSendFill, BsTelephoneOutbound} from "react-icons/bs"
import {BiMessageDetail} from "react-icons/bi"
const Footer = () => {
  return (
    <footer className="mt-16 ">
       <div className="container mx-auto px-4">
        
         <div className="flex flex-wrap gap-16 items-center justify-between">
            <div className="flex-1">
            <Link href='/' className="font-black text-tertiary-dark">
         <h4 className="font-semibold text-[38px] pb-5">StayCraft</h4></Link>
                <div className="flex items-center pb-4">
                    <BsFillSendFill />
                    <p className="ml-2">Bipasha</p>
                </div>
                <div className="flex items-center pb-4">
                    <BsTelephoneOutbound />
                    <p className="ml-2">123-456-7890</p>
                </div>
                <div className="flex items-center">
                    <BiMessageDetail />
                    <p className="ml-2">Bipasha</p>
                </div>
            </div>
            <div className="flex-1 md:text-right">
                <p className="pb-4">Our Story</p>
                <p className="pb-4">Get In Touch</p>
                <p className="pb-4">Our Privacy Commitment</p>
                <p className="pb-4">Terms of Service</p>
                <p>Customer Assistance</p>
            </div>
            <div className="flex-1 md:text-right">
                <p className="pb-4">Dining Experience</p>
                <p className="pb-4">Wellness</p>
                <p className="pb-4">Fitness</p>
                <p className="pb-4">Sports</p>
                <p>Events</p>
            </div>
         </div>
       </div>
        <div className="bg-tertiary-dark h-10 md:h-[50px] mt-10 w-full bottom-0 left-0" /> 
    </footer>
  )
}

export default Footer