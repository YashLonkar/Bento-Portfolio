import React from 'react'
import "./Bento.css"
import profilePic from "../assets/profile-pic.png"
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"
import Profile from './Profile'

export const Bento = () => {
  return (

    <div className='Container min-h-screen text-zinc-50'>
      <div className='Grid mx-auto grid max-w-4xl grid-cols-12 gap-4'>

        {/* --------------- CARD-HELLO --------------------------- */}

        <div className='card-hello bg-red-900 p-4 col-span-8'>
          <div className='card-hello-head'>
            <div className='card-hello-title'>
              <div className='profile-pic'>
                <img src={profilePic} alt="Profile" className="profile-image" />
              </div>
              <div>
                <div className='Name'> Hi, I'm Yash</div>
                <div className='Bio'>Front-end Developer</div>
              </div>
            </div>
            <div className='Socials'>
              <div><FaTwitter className='twitter' /></div>
              <div><FaLinkedin className='LinkedIn' /></div>
              <div><FaGithub className='Github' /></div>
            </div>
          </div>

          {/* CARD-HELLO-PARA */}

          <div className='card-hello-bottom'>
            <div className='Description1'>
              Passionate to pursue the technology
            </div>
            <div className='Description2'>
              I enjoy learning new things and try to overcome new challenges while analyzing how I improved through them.
            </div>

          </div>
        </div>
        <div className='Profile-card bg-red-300 p-4 col-span-4'>
          <Profile className='ProfilePic'/>
        </div>
        <div className='bg-red-300 p-4 col-span-6'></div>
        <div className='bg-red-300 p-4 col-span-6'></div>
        <div className='bg-red-300 p-4 col-span-6'></div>
        <div className='bg-red-300 p-4 col-span-6'></div>
        <div className='bg-red-300 p-4 col-span-6'></div>
        <div className='bg-red-300 p-4 col-span-6'></div>
        <div className='bg-red-300 p-4 col-span-9'></div>
        <div className='bg-red-300 p-4 col-span-3'></div>
      </div>

    </div>
  )
}

export default Bento
