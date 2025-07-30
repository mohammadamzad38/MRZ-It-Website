import Approach from "@/components/sections/approach";
import BlogTwo from "@/components/sections/blogs/blogTwo";
import HeroVideo from "@/components/sections/heroes/heroVideo";
import StoryFour from "@/components/sections/ourStories/storyFour";
import PlatformRating from "@/components/sections/platformRating";
import ServiceFour from "@/components/sections/services/serviceFour";
import ServiceThree from "@/components/sections/services/servicesThree";
import SubscribeTwo from "@/components/sections/subscribes/subscribeTwo";
import TestimonialTwo from "@/components/sections/testimonials/testimonialTwo";

export const metadata = {
  title: "MRZ Tech | Leading Web & Software Development Company in Bangladesh",
  description:
    "MRZ Tech is a global IT company based in Dhaka, Bangladesh, specializing in web design, software development, mobile apps, digital marketing, ERP solutions, and more. Empowering businesses worldwide with cutting-edge technology.",
};

const HomeFive = () => {
  return (
    <main>
      <HeroVideo />
      <PlatformRating />
      <div className="lg:pb-15 pb-9"></div>
      <ServiceFour />
      <StoryFour />
      <ServiceThree />
      <Approach />
      <TestimonialTwo />
      <SubscribeTwo />
      <BlogTwo />
    </main>
  );
};

export default HomeFive;
