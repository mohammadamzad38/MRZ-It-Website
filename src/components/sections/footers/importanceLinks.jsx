"use client"


import { cn } from "@/lib/utils";
import Link from "next/link";

const ImportanceLinks = ({ color, linkHoverColor }) => {
  const importanceLinks = [
    {
      id: 1,
      title: "Company",
      links: [
        {
          id: 1,
          path: "/services",
          label: "Services",
        },
        {
          id: 2,
          path: "/about-us",
          label: "About Us",
        },

        {
          id: 4,
          path: "/contact-us",
          label: "Contact",
        },
      ],
    },
    {
      id: 2,
      title: "Resources",
      links: [
        {
          id: 1,
          path: "/blog",
          label: "Blog",
        },

        {
          id: 2,
          path: "https://calendar.app.google/TEfaKdgKeT3nU23c9",
          label: "Schedule",
        },
      ],
    },
    {
      id: 5,
      title: "Other links",
      links: [
        {
          id: 1,
          path: "/terms",
          label: "Terms",
        },
        {
          id: 2,
          path: "/privacy-policy",
          label: "Privacy Policy",
        },
      ],
    },
  ];
  return (
    <div className="grid md:grid-cols-4 grid-cols-2">
      {importanceLinks.map(({ id, links, title }) => {
        return (
          <div key={id} className="mt-7.5 lg:mt-0">
            <h3 className={cn(`font-semibold text-1xl lg:pb-5 pb-3`, color)}>
              {title}
            </h3>
            <ul>
              {links.map(({ id, label, path }) => (
                <li key={id} className="mt-2.5">
                  <Link
                 
                    href={path}
                    className={cn(
                      `font-semibold text-base hover:text-primary-foreground transition-all duration-500`,
                      color,
                      linkHoverColor
                    )}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default ImportanceLinks;
