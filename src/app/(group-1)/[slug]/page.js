import ContactForm from "@/components/sections/contactForm";
import PageTitle from "@/components/sections/pageTitle";
import ServiceArtical from "@/components/sections/services/serviceArtical";
import { servicesDataThree } from "@/lib/fackData/servicesDataTree";

export const metadata = {
  title: "MRZ Tech | Service-Details",
  description:
    "NextPro is a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
};

// ✅ Required for static export
export async function generateStaticParams() {
  return servicesDataThree.map((service) => ({
    slug: service.slug,
  }));
}

const ServicesDetails = ({ params }) => {
  const service = servicesDataThree.find((s) => s.slug === params.slug);

  if (!service) {
    return (
      <main className="text-center py-20">
        <h1 className="text-2xl font-bold">Service Not Found</h1>
      </main>
    );
  }

  return (
    <main>
      <PageTitle
        pageName={service.service_name}
        breadcrumbLink={"services"}
        breadcrumbCurrent={service.service_name}
      />
      <ServiceArtical service={service} />
      <ContactForm
        color={"text-white"}
        inputColor={
          "bg-transparent border-white border text-white placeholder:text-white"
        }
      />
      <div className="lg:pb-15 pb-9"></div>
    </main>
  );
};

export default ServicesDetails;
