import React from 'react'
import PageTitle from '@/components/sections/pageTitle'
import LostPassword from '@/components/sections/lostPassword'

export const metadata = {
  title: "NextPro | Register",
  description: "NextPro is a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
};

const RegisterPage = () => {
  return (
    <main>
      <PageTitle pageName={"Register"} breadcrumbLink={"Register"}/>
      <LostPassword color={"text-white"} inputColor={"bg-transparent border-white border text-white placeholder:text-white"}/>
    </main>
  )
}

export default RegisterPage