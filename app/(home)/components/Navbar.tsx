/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "lucide-react";
import React from "react";
import { SiGithub } from "react-icons/si";
import { DiGithubAlt } from "react-icons/di";


export default function Navbar() {

    const socials = [
        {
            link: "github.com/void-code",

            label:"Github",

            Icon: SiGithub,

        },

      
    ]
    return ( 
    
    <nav className="py-10 flex justify-between ">
        
        <h1 className="text-3xl font-bold underline underline-offest-8 decoration-green-500 -rotate-2">Linus 🧑‍💻</h1>
        <div className="flex items-center-gap-5">
            {socials.map((social, index) => {
                
                const Icon = social.Icon

                return <Link href={social.link} key={index} aria-label={social.label}>
                    
                    <Icon className="w-5 h-5 hover:scale-125 transition-all"/>
                     </Link>
            })}
            
        </div>
        
        </nav>
        
)}