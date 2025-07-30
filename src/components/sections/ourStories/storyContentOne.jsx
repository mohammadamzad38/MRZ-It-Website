import { FaPhoneVolume } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";

const StoryContentOne = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 pt-28 pb-20 text-gray-800">
      <div className="space-y-16 mx-10">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1B449C] mb-4">
            About MRZ Tech
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover who we are, what we stand for, and why global brands trust
            us.
          </p>
        </div>

        {/* Who We Are */}
        <div>
          <h2 className="text-2xl font-bold text-[#1B449C] mb-2">
            Who We Are?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            MRZ Tech is a global software and digital services company
            headquartered in Dhaka, Bangladesh. Since our inception, we’ve
            helped businesses of all sizes—from local startups to Fortune‑level
            enterprises—transform ideas into powerful digital experiences. Our
            multidisciplinary team of strategists, designers, developers, and
            marketers delivers end‑to‑end solutions that accelerate growth and
            unlock new value.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold text-[#1B449C] mb-2">
              Our Mission
            </h2>
            <p className="text-gray-700">
              To make advanced technology simple, affordable, and impactful for
              every organization we serve.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#1B449C] mb-2">
              Our Vision
            </h2>
            <p className="text-gray-700">
              A world where innovative software empowers people and businesses
              everywhere to achieve more.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div>
          <h2 className="text-2xl font-bold text-[#1B449C] mb-2">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            MRZ Tech started with a small group of problem‑solvers who believed
            that great software can be both world‑class and locally grown. What
            began as a boutique web‑development studio has evolved into a
            full‑stack technology partner with a global client base, multiple
            vertical specialties, and an unwavering commitment to excellence.
          </p>
        </div>

        {/* What We Do */}
        <div>
          <h2 className="text-2xl font-bold text-[#1B449C] mb-4">
            What We Do?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong>Web Design & Development</strong> – Responsive websites,
              CMS portals, and custom web apps.
            </li>
            <li>
              <strong>eCommerce Solutions</strong> – Scalable online stores,
              payment integration, and retail platforms.
            </li>
            <li>
              <strong>Mobile App Development</strong> – Native and
              cross‑platform apps for Android, iOS, and more.
            </li>
            <li>
              <strong>Enterprise & Industry Software</strong> – ERP, POS,
              healthcare, and custom solutions.
            </li>
            <li>
              <strong>Digital Marketing & Growth</strong> – SEO, SEM, SMM,
              email, and content strategies that convert.
            </li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div>
          <h2 className="text-2xl font-bold text-[#1B449C] mb-4">
            Why Choose MRZ Tech?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong>360° Expertise:</strong> From discovery to deployment, all
              in one place.
            </li>
            <li>
              <strong>Agile Delivery:</strong> Transparent, iterative
              development.
            </li>
            <li>
              <strong>Tailored Solutions:</strong> Custom-fit for your goals and
              budget.
            </li>
            <li>
              <strong>Global Perspective:</strong> Multilingual support across
              five continents.
            </li>
            <li>
              <strong>Lasting Partnerships:</strong> 85% of clients return or
              refer others.
            </li>
          </ul>
        </div>

        {/* Core Values */}
        <div>
          <h2 className="text-2xl font-bold text-[#1B449C] mb-4">
            Core Values
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <p>
              <strong>Innovation:</strong> We challenge conventions and push
              boundaries.
            </p>
            <p>
              <strong>Integrity:</strong> Honesty and accountability in every
              step.
            </p>
            <p>
              <strong>Excellence:</strong> Pixel‑perfect code and measurable
              results.
            </p>
            <p>
              <strong>Collaboration:</strong> Great ideas thrive in inclusive
              teams.
            </p>
            <p>
              <strong>Impact:</strong> We use tech to solve real-world problems.
            </p>
          </div>
        </div>

        {/* Global Footprint */}
        <div>
          <h2 className="text-2xl font-bold text-[#1B449C] mb-2">
            Our Global Footprint
          </h2>
          <p className="text-gray-700 leading-relaxed">
            MRZ Tech operates through a distributed delivery model with
            development hubs in Dhaka and satellite teams in North America,
            Europe, and the Middle East. This structure enables cost-efficiency,
            24/7 productivity, and localized insights.
          </p>
        </div>

        {/* Meet Our Team */}
        <div>
          <h2 className="text-2xl font-bold text-[#1B449C] mb-2">
            Meet Our Team
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our 120+ specialists include certified project managers, UX/UI
            designers, full‑stack developers, QA engineers, data analysts, and
            growth marketers—all passionate about using technology to improve
            lives.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <h3 className="text-xl font-bold text-[#1B449C] mb-4">
            Let’s Build the Future Together
          </h3>
          <p className="text-gray-700 mb-6">
            Whether launching a new venture, modernizing legacy systems, or
            scaling fast— MRZ Tech is ready to bring your vision to life.
          </p>
          <div className="text-2xl flex flex-col items-center pt-10 gap-8 font-medium text-gray-800">
            <div className="flex gap-10">
              <MdMarkEmailUnread className="text-6xl " />
              <a
                href="mailto:info@mrztech.com"
                className="hover:text-blue-300 font-bold"
              >
                info@mrztech.com
              </a>
            </div>

            <div className="flex gap-10">
              <FaPhoneVolume className="text-5xl " />
              <a
                className="hover:text-blue-300 font-bold"
                href="tel:+880 1991-198312"
              >
                +880 1991-198312
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryContentOne;
