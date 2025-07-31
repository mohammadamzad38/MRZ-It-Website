"use client";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { FaHouseChimney } from "react-icons/fa6";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Button } from "../ui/button";
import Highlight from "../ui/highlight";
import Title from "../ui/title";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import SocialIcons from "../ui/socialIcons";

const ContactMap = () => {
  const icon = L.icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
  });

  return (
    <section className="lg:py-15 py-9">
      <div className="container">
        <div>
          <div className="flex flex-col items-center">
            <Button variant="secondary">Contact Us</Button>
            <Title size={"5xl"} className="max-w-[832px] pt-6 text-center">
              {" "}
              Discover <Highlight>Our Location</Highlight> and Plan Your Visit
            </Title>
          </div>
        </div>
        <div>
          <div className="lg:pt-12.5 pt-7.5 relative z-[1] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[calc(100%-160px)] after:bg-gray after:rounded-[30px] after:z-[-1]">
            <div className="shadow-[0px_4px_46.9px_0px_rgba(9,25,40,0.1)] rounded-[30px] max-w-[1320px] mx-auto relative">
              <MapContainer
                className="w-full max-w-[1320px] min-h-[510px] h-full rounded-[30px]"
                center={[53.483318, -2.2386225]}
                zoom={18}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[53.483318, -2.2386225]} icon={icon}>
                  <Popup>
                    <div className="border border-border rounded-2xl p-4">
                      <h5 className="text-lg font-bold text-muted-foreground">
                        MRZ Tech UK
                      </h5>
                      <p>
                        23 Church Street, Manchester, Greater Manchester, UK
                      </p>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
            <div className="flex flex-wrap justify-between  mx-60 py-20">
              <div className="space-y-10">
                <FaHouseChimney className="text-7xl" />
                <div className="space-y-5">
                  <div className="space-y-3">
                    <h2 className="font-bold text-xl">Address UK</h2>
                    <p>
                      23 Church Street, Manchester, <br /> Greater Manchester,
                      UK
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h2 className="font-bold text-xl">Head Quater</h2>
                    <p>
                      Level: 1&2, House: 11/A2, Road-41, <br /> Gulshan-2,
                      Dhaka-1212, Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-10">
                <BsFillTelephoneForwardFill className="text-7xl" />
                <div className="space-y-3">
                  <h2 className="font-bold text-xl">Contact</h2>
                  <p>
                    <span className="font-bold">Phone: </span>
                    <a
                      href="tel:+880 1991-198312"
                      className="hover:text-[#0963DD]"
                    >
                      +880 1991-198312
                    </a>
                  </p>
                  <p>
                    <span className="font-bold">Email: </span>
                    <a
                      href="mailto:info@mrztech.com"
                      className="hover:text-[#0963DD]"
                    >
                      info@mrztech.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="my-25 space-y-5">
                <h2 className="text-xl font-bold">Social</h2>
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
