import PageTitle from "@/components/sections/pageTitle";

export const metadata = {
  title: "MRZ Tech | Terms and Conditions",
  description: "",
};

const page = () => {
  return (
    <div>
      <PageTitle pageName={"Terms & Conditions"} breadcrumbLink={"Terms"}/>
      <section className="max-w-5xl py-[100px] mx-auto">
        <div className="space-y-8 text-black">
          <h1 className="text-3xl font-bold text-[#1B449C]">Welcome to MRZ Tech Services</h1>
          <p>
            These terms and conditions outline the rules and regulations for the
            use of our website and services.
          </p>
          <p>
            By accessing this website and using our services, you accept these
            terms and conditions. Do not continue to use MRZ Tech Services if
            you do not agree to all of the terms stated on this page.
          </p>
          <h2 className="font-bold text-xl text-[#1B449C]">1. Definitions</h2>
          <div className="space-y-2 pl-15">
            <li>
              "Company," "We," "Our," or "Us" refers to MRZ Tech Services.
            </li>
            <li>
              "Client," "You," or "Your" refers to the user accessing our
              website and using our services.
            </li>
            <li>
              {" "}
              "Services" refers to all products and services provided by MRZ
              Tech Services including but not limited to software development,
              web design, digital marketing, and related IT services.
            </li>
          </div>

          <h2 className="font-bold text-xl text-[#1B449C]">
            2. Services We provide a range of IT and software solutions
            including:
          </h2>

          <div className="space-y-2 pl-15">
            <li>Web Design and Development</li>
            <li>eCommerce Website Solutions</li>
            <li>Mobile App Development (Android and iOS)</li>
            <li>Software Development (ERP, POS, Healthcare, etc.)</li>
            <li>Digital Marketing (SEO, SEM, SMM, Email Marketing)</li>
          </div>
          <h2 className="font-bold text-xl text-[#1B449C]">3. Use of Our Services</h2>
          <p>
            You agree to use our services only for lawful purposes and in a way
            that does not infringe the rights of others or restrict their use
            and enjoyment of the services.
          </p>
          <h2 className="font-bold text-xl text-[#1B449C]">4. Payments</h2>
          <p>
            All services provided by MRZ Tech are subject to payment terms
            agreed upon in the service agreement or proposal. Late payments may
            incur additional charges.
          </p>
          <h2 className="font-bold text-xl text-[#1B449C]">5. Intellectual Property</h2>
          <p>
            All content, design, and intellectual property developed by MRZ Tech
            Services remain our property unless otherwise agreed in writing.
          </p>
          <h2 className="font-bold text-xl text-[#1B449C]">6. Confidentiality</h2>
          <p>
            Both parties agree to maintain the confidentiality of proprietary
            information and not disclose such information to any third party
            without prior consent.
          </p>
          <h2 className="font-bold text-xl text-[#1B449C]">7. Termination</h2>
          <p>
            Either party may terminate the agreement by giving written notice.
            Upon termination, all outstanding dues must be settled immediately.
          </p>
          <h2 className="font-bold text-xl text-[#1B449C]">8. Limitation of Liability</h2>
          <p>
            MRZ Tech Services shall not be liable for any indirect, incidental,
            or consequential damages arising out of or related to the use of our
            services.
          </p>
          <h2 className="font-bold text-xl text-[#1B449C]">9. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Continued
            use of the website and services indicates acceptance of the updated
            terms.
          </p>
          <h2 className="font-bold text-xl text-[#1B449C]">10. Governing Law</h2>
          <p>
            These terms shall be governed and interpreted in accordance with the
            laws of Bangladesh.
          </p>
          <p className="text-2xl py-10 text-center ">
            If you have any questions about these Terms and Conditions, please
            contact us at
            <a
              href="mailto:info@mrztech.com"
              className="font-bold text-xl ml-5 hover:text-[#0963DD]"
            >
              info@mrztech.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
