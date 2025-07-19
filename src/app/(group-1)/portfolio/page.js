import React from 'react'
import PageTitle from '@/components/sections/pageTitle'
import ProjectsTab from '@/components/sections/projectsTab'

export const metadata = {
    title: "NextPro | Portfolio",
    description: "NextPro is a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
};

const Portfolio = () => {
    return (
        <main>
            <PageTitle pageName={"Projects"} breadcrumbLink={"Projects"} />
            <ProjectsTab />
        </main>
    )
}

export default Portfolio