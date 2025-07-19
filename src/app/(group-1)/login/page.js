import React from 'react'
import PageTitle from '@/components/sections/pageTitle'
import LoginForm from '@/components/sections/loginForm'

export const metadata = {
  title: "NextPro | login",
  description: "NextPro is a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
};

const loginPage = () => {
  return (
    <main>
      <PageTitle pageName={"Login"} breadcrumbLink={"Login"}/>
      <LoginForm color={"text-white"} inputColor={"bg-transparent border-white border text-white placeholder:text-white"}/>
    </main>
  )
}

export default loginPage