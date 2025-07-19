import React from "react";
import Input from '../ui/input'
import { Button } from '../ui/button'
import Title from '../ui/title'
import Textarea from '../ui/textarea'
import SlideUp from '../animations/slideUp'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import BracketLogin from "../../../public/icons/bracketLogin";
import Link from "next/link";

const loginForm = ({ color, inputColor }) => {
    // color and inputColor props come from home page 3
    const currentYear = new Date().getFullYear();
    return (
        <section className='container lg:mt-15 mt-9'>
            <div className={`max-w-[1320px] mx-auto bg-primary lg:rounded-[30px] rounded-2xl px-3 relative z-[1]`}>
                <div className='absolute top-0 left-0 w-full h-full bg-contain bg-no-repeat opacity-20 z-[-1]' style={{ backgroundImage: `url(/images/background/services-bg1-1.png)` }}></div>
                <div className={`py-[50px] lg:py-[60px] px-[24px] lg:px-[35px] rounded-[30px]`}>
                    <div className='flex lg:flex-row flex-col justify-between items-center gap-12.5'>
                        <div className='lg:w-[40%] w-full lg:pb-11'>
                            <SlideUp>
                                <div className={`w-[75px] h-[75px] rounded-lg flex justify-center items-center drop-shadow-3xl bg-white mb-3 text-primary`}>
                                    <BracketLogin width={42} height={40} fill={"currentColor"} className={`text-primary`}/>
                                </div>
                                <Title size={"5xl"} className={`md:leading-[140%] ${color}`}>Welcome <br/> back to NextPro</Title>
                                <p className={`mt-4 ${color}`}>Crafting NextPro Designing and Masterpieces Interior Wonders, Join us on a journey marked by accolades and distinctions as we carve our path in the world of design.</p>
                                <p className={`mt-4 ${color}`}>&copy; {currentYear}, NextPro, All Rights Reserved</p>
                            </SlideUp>
                        </div>
                        <div className='lg:w-[54%] w-full'>
                            <SlideUp>
                                <form >
                                    <div className='flex sm:flex-row flex-col items-center gap-4 mb-7.5'>
                                        <div className='w-full'>
                                            <label className={`block mb-1 ${color}`} htmlFor={"username"}>Username or Email Address*</label>
                                            <Input id={'username'} type={"text"} className={`w-full border-2 bg-primary ${inputColor}`} />
                                        </div>
                                        <div className='w-full'>
                                            <label className={`block mb-1 ${color}`} htmlFor={"password"}>Password*</label>
                                            <Input id={"password"} type={"password"} className={`w-full border-2 bg-primary ${inputColor}`} />
                                        </div>
                                    </div>
                                    <div className='mb-7.5 flex items-start'>
                                        <input type='checkbox' id='checkbox' className='w-4 h-4 accent-primary' />
                                        <label htmlFor="checkbox" className='pl-3 -mt-2 font-medium text-white'>Remember Me</label>
                                    </div>
                                    <div className='flex justify-end w-full'>
                                        <Button variant={"outline"} className="border-white border text-white hover:text-primary-foreground hover:bg-white w-full">Log In</Button>
                                    </div>

                                    <div>
                                        <p className="text-center mt-[1rem] opacity-50">
                                            <Link className={`underline ${color}`} href={'/lost-password'}>Lost Password?</Link>
                                        </p>
								        <p className={`create-account mt-[1.5rem] text-center ${color}`}>
                                            <span>Don't have an account? </span>
                                            <Link className={`underline ${color}`} href={'/register'}>SignUp</Link>
                                        </p>
                                    </div>
                                </form>
                            </SlideUp>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default loginForm;
