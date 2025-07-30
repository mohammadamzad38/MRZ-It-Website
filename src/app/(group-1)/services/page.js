import PageTitle from "@/components/sections/pageTitle";
import ServiceThree from "@/components/sections/services/servicesThree";
import SubscribeTwo from "@/components/sections/subscribes/subscribeTwo";

export const metadata = {
  title: "MRZ Tech | Services",
  description:
    "NextPro is a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
};
const Services = () => {
  return (
    <main>
      <PageTitle pageName={"Services"} breadcrumbLink={"Services"} />
      <ServiceThree />

      <SubscribeTwo />
    </main>
  );
};

export default Services;
