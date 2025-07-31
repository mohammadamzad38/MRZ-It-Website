import PageTitle from "@/components/sections/pageTitle";

const Page = () => {
  return (
    <div>
      <PageTitle
        pageName={"MRZ Tech Privacy & Policy"}
        breadcrumbLink={"Privacy Policy"}
      />

      <section className="max-w-5xl mx-auto px-6 py-14 text-gray-800">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-primary-700 mb-3">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Effective Date: <span className="font-semibold">July 30, 2025</span>
        </p>

        <p className="mb-8 leading-relaxed">
          At <strong>MRZ Tech Services</strong>, we value your privacy and are
          committed to safeguarding your personal information. This Privacy
          Policy outlines how we collect, use, and protect your data when you
          interact with our website, services, and applications.
        </p>

        {/* Sections */}
        <PolicySection
          number="1"
          title="Information We Collect"
          content="We may collect and process the following types of information:"
          list={[
            "Personal Identification Information: Name, email, phone number, company name, job title, billing details.",
            "Technical Information: IP address, browser type, operating system, device info, and access times.",
            "Usage Data: Pages visited, time spent, click patterns, and other analytical data.",
            "Cookies and Tracking Technologies: To improve user experience and analyze traffic.",
          ]}
        />

        <PolicySection
          number="2"
          title="How We Use Your Information"
          content="Your data may be used for:"
          list={[
            "Providing and managing our services.",
            "Communicating with you regarding inquiries, projects, or support.",
            "Improving our website, services, and customer experience.",
            "Marketing purposes (with your consent).",
            "Complying with legal obligations.",
          ]}
        />

        <PolicySection
          number="3"
          title="Sharing Your Information"
          content="We do not sell your personal information. We may share your data with:"
          list={[
            "Trusted third-party service providers supporting our operations.",
            "Legal authorities if required by law or to protect our rights.",
            "Affiliates and partners under confidentiality agreements.",
          ]}
        />

        <PolicySection
          number="4"
          title="Data Security"
          content="We use technical and organizational measures such as encryption, firewalls, and secure servers to protect your data."
        />

        <PolicySection
          number="5"
          title="Your Data Rights"
          content="You have the right to:"
          list={[
            "Access, update, or delete your personal data.",
            "Withdraw consent at any time.",
            "Object to or restrict certain data processing.",
            "File a complaint with a data protection authority.",
          ]}
        />

        <PolicySection
          number="6"
          title="International Data Transfers"
          content="If your data is transferred outside your country, we ensure proper data protection measures such as standard contractual clauses."
        />

        <PolicySection
          number="7"
          title="Third-Party Links"
          content="Our website may link to external sites. We are not responsible for their privacy practices."
        />

        <PolicySection
          number="8"
          title="Children's Privacy"
          content="Our services are not directed to individuals under 13. We do not knowingly collect data from children."
        />

        <PolicySection
          number="9"
          title="Changes to This Policy"
          content="We may update this policy periodically. Please review it regularly."
        />

        {/* Contact Section */}
        <div className="mt-16 bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-primary-700 mb-3">
            10. Contact Us
          </h2>
          <p className="mb-4">
            For questions regarding this Privacy Policy or your personal data,
            please contact:
          </p>
          <p className="font-semibold">MRZ Tech Services</p>
          <p>Dhaka, Bangladesh</p>
          <p className="mt-2">
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:info@mrztech.com"
              className="text-blue-600 hover:underline"
            >
              info@mrztech.com
            </a>
          </p>
          <p>
            <span className="font-semibold">Phone:</span>{" "}
            <a
              href="tel:+8801991198312"
              className="text-blue-600 hover:underline"
            >
              +880 1991-198312
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

const PolicySection = ({ number, title, content, list }) => {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold text-primary-700 flex items-center gap-2 mb-3">
        <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded-md text-sm font-bold">
          {number}
        </span>
        {title}
      </h2>
      <p className="mb-4">{content}</p>
      {list && (
        <ul className="list-disc pl-6 space-y-2">
          {list.map((item, i) => (
            <li key={i} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Page;
