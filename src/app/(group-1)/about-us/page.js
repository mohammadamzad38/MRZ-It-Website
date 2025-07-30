import StoryContentOne from "@/components/sections/ourStories/storyContentOne";
import PageTitle from "@/components/sections/pageTitle";
import SubscribeTwo from "@/components/sections/subscribes/subscribeTwo";
import TestimonialTwo from "@/components/sections/testimonials/testimonialTwo";

export const metadata = {
  title: "About MRZ Tech | Global Software & Digital Solutions Provider",
  description:
    " Learn how MRZ Tech—from Dhaka to the world—delivers web, mobile, eCommerce, ERP & digital-marketing solutions that power business growth.",
};

const About = () => {
  return (
    <main>
      <PageTitle pageName={"About MRZ Tech"} breadcrumbLink={"About"} />
      <StoryContentOne />

      <TestimonialTwo />
      <SubscribeTwo />
    </main>
  );
};

export default About;
