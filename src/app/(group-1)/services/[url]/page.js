import PageTitle from "@/components/sections/pageTitle";
import { servicesDataThree } from "@/lib/fackData/servicesDataTree";
import Image from "next/image";

export async function generateStaticParams() {
  return servicesDataThree.map((service) => ({
    url: service.url,
  }));
}

export async function generateMetadata({ params }) {
  const { url } = params;
  const service = servicesDataThree.find((b) => b.url === url);

  if (!service) {
    return {
      title: "Service Not Found - MRZ Tech",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: service.service_name,
    description: service.metaDescription,
  };
}

const Page = ({ params }) => {
  const { url } = params;
  const service = servicesDataThree.find((b) => b.url === url);

  if (!service) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-20">Service not found.</div>
    );
  }

  return (
    <div>
      <PageTitle
        pageName={service.metaTitle || service.service_name}
        breadcrumbLink={service.service_name}
      />

      <div className="max-w-5xl mx-auto px-[15px] py-10">
        <div className="relative w-full h-[472px] rounded-[30px] overflow-hidden mb-8">
          <Image
            src={service.image}
            alt={service.service_name}
            fill
            className="object-cover"
          />
        </div>

        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{
            __html:
              service.description || "<p>Service description not found.</p>",
          }}
        />
      </div>
    </div>
  );
};

export default Page;
