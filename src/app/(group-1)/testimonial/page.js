import PageTitle from "@/components/sections/pageTitle";
import SubscribeTwo from "@/components/sections/subscribes/subscribeTwo";
import TestimonialOne from "@/components/sections/testimonials/testimonialOne";
import TestimonialThree from "@/components/sections/testimonials/testimonialThree";
import TestimonialTwo from "@/components/sections/testimonials/testimonialTwo";

export const metadata = {
  title: "MRZ Tech",
  description: "",
};
const Testimonial = () => {
  return (
    <main>
      <PageTitle pageName={"Testimonials"} breadcrumbLink={"Testimonials"} />
      <TestimonialOne />
      <TestimonialTwo />
      <TestimonialThree />
      <SubscribeTwo />
    </main>
  );
};

export default Testimonial;
