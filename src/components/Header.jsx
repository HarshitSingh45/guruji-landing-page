import React, {useState} from 'react'
import {motion} from 'framer-motion';
import {BiRupee, BiWalletAlt} from 'react-icons/bi'
import {AiOutlineDown, AiOutlineMenu} from 'react-icons/ai'

export default function Header() {
    const [isMenu, setIsMenu] = useState(false);
    const [lang, setLang] = useState(false);

  return (
    <div className='w-screen fixed z-50 p-3 px-4 md:p-6 md:px-16 bg-headerBg'>
    {/* desktop and tablet */}
    <div className='hidden md:flex w-full h-full items-center justify-between'>
        <div className='flex items-center gap-16'>
            <h2 className='text-headingColor text-2xl font-bold'>GURUJI</h2>
            <p className='text-lg'>Talk with astrologers</p>
        </div>
        <div className='flex items-center gap-8 text-lg'>            
            <div className='relative'>
                <div onClick={()=>setLang(!lang)}
                    className='flex items-center justify-center shadow-lg p-2 border-[1px] w-[100px] overflow-hidden border-gray-100 cursor-pointer'>
                    English
                </div>
                {
                    lang && (
                        <motion.div 
                          initial={{opacity:0, scale: 0.6}}
                          animate={{opacity:1, scale: 1}}
                          exit={{opacity:0, scale: 0.6}}
                          className='flex flex-col w-40 bg-headerBg shadow-xl rounded-lg absolute top-10 left-0 '>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base'>English </p>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base'>Hindi </p>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base'>Marathi </p>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base'>Malayalam </p>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base'>Kannada </p>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base'>Tamil </p>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base'>Telugu </p>
                        </motion.div>
                    )
                }
            </div>
            <div  className='flex items-center justify-center shadow-lg p-2 border-[1px] border-gray-100 text-gray-500'>
                <BiWalletAlt className='mr-2'/>
                <BiRupee />
                <p>200</p>
            </div>
            <div className='relative'>
                <motion.img 
                    whileTap={{scale:0.6}} 
                    src= 'https://www.w3schools.com/howto/img_avatar.png'
                    alt="profilePic" 
                    onClick={()=>setIsMenu(!isMenu)}
                    className='rounded-full w-10 min-w-[40px] h-10 min-h-[40px] shadow-2xl cursor-pointer' 
                />
                {
                    isMenu && (
                        <motion.div 
                          initial={{opacity:0, scale: 0.6}}
                          animate={{opacity:1, scale: 1}}
                          exit={{opacity:0, scale: 0.6}}
                          className='flex flex-col w-60 bg-headerBg shadow-xl rounded-lg absolute top-10 right-0 '>
                            <div className='flex flex-col items-center justify-center gap-2 mt-8'>
                                <img 
                                    src= 'https://www.w3schools.com/howto/img_avatar.png'
                                    alt="profilePic" 
                                    className='rounded-full w-10 min-w-[40px] h-10 min-h-[40px] shadow-2xl' 
                                />
                                <p>Philpy</p>
                            </div>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base'>Order History </p>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base'>Recharge History </p>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base'>Followed Astrologer </p>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base'>Account Setting </p>
                            <p className='px-4 py-2 flex items-center justify-center gap-3 text-headingColor cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-base'>Logout </p>
                        </motion.div>
                    )
                }
            </div>
        </div> 
    </div>
    {/* mobile */}
    <div className='flex items-center justify-between md:hidden w-full h-full'>

        <div className='flex items-center gap-16'>
            <h2 className='text-headingColor text-2xl font-bold'>GURUJI</h2>
        </div>
        <div className='flex items-center gap-4 text-lg'>
            <div className='relative'>
                <div onClick={()=>setLang(!lang)}
                    className='flex items-center justify-center shadow-lg p-2 border-[1px] w-[60px] overflow-hidden border-gray-100 cursor-pointer'>
                    En <AiOutlineDown/>
                </div>
                {
                    lang && (
                        <motion.div 
                          initial={{opacity:0, scale: 0.6}}
                          animate={{opacity:1, scale: 1}}
                          exit={{opacity:0, scale: 0.6}}
                          className='flex flex-col w-40 bg-headerBg shadow-xl rounded-lg absolute top-10 right-0 '>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base'>English </p>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base'>Hindi </p>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base'>Marathi </p>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base'>Malayalam </p>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base'>Kannada </p>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base'>Tamil </p>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base'>Telugu </p>
                        </motion.div>
                    )
                }
            </div>
            <div className='relative'>
                <AiOutlineMenu
                    onClick={()=>setIsMenu(!isMenu)}
                    className='text-3xl text-gray-500 shadow-2xl cursor-pointer' 
                />
                {
                    isMenu && (
                        <motion.div 
                          initial={{opacity:0, scale: 0.6}}
                          animate={{opacity:1, scale: 1}}
                          exit={{opacity:0, scale: 0.6}}
                          className='flex flex-col w-60 bg-headerBg shadow-xl rounded-lg absolute top-10 right-0 '>
                            <div className='flex flex-col items-center justify-center gap-2 mt-8'>
                                <img 
                                    src= 'https://www.w3schools.com/howto/img_avatar.png'
                                    alt="profilePic" 
                                    className='rounded-full w-10 min-w-[40px] h-10 min-h-[40px] shadow-2xl' 
                                />
                                <p>Philpy</p>
                            </div>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base'>Order History </p>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base'>Recharge History </p>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base'>Followed Astrologer </p>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base'>Account Setting </p>
                            <p className='px-4 py-2 flex items-center justify-center gap-3 text-headingColor cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-base'>Logout </p>
                        </motion.div>
                    )
                }
            </div>
        </div>
    </div>
    </div>
  )}
