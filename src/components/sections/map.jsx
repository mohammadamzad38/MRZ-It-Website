"use client";
import Image from "next/image";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import content_icon from "../../../public/images/shapes/content-writing-icon.png";
import team_icon from "../../../public/images/shapes/dynamic-team-icon.png";
import skills_icon from "../../../public/images/shapes/skills-icon.png";
import SlideUp from "../animations/slideUp";
import { Button } from "../ui/button";
import Highlight from "../ui/highlight";
import SocialIcons from "../ui/socialIcons";
import Title from "../ui/title";
// import { MapContainer, TileLayer, Marker, Popup } from 'https://cdn.esm.sh/react-leaflet'
import L from "leaflet";
import "leaflet/dist/leaflet.css";

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
            <div className="lg:pt-[46px] pt-4 flex lg:flex-row flex-col justify-between max-w-[1320px] mx-auto pb-12.5 px-3 lg:px-0">
              <Card
                icon={team_icon}
                title={"Address"}
                isIcon={false}
                desc={"23 Church Street, Manchester, Greater Manchester, UK"}
              />

              <Card
                icon={skills_icon}
                title={"Contact"}
                isIcon={false}
                desc={`                       
                             <p> <span class='font-semibold'>Email:</span> <a href={"mailto:info@mrztech.com"} class='relative hover-underline after:h-[1px] after:bg-muted'> info@mrztech.com</a> </p>
                             <p> <span class='font-semibold'>Call us:</span> <a href={"tal:+8801991198312"} class='relative hover-underline after:h-[1px] after:bg-muted'>+8801991-198312</Link> </p>
                             `}
              />
              <Card
                icon={content_icon}
                title={"Social"}
                desc={<SocialIcons prantBorder={"text-2xl mt-[22px]"} />}
                isSocalIcon={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;

// --------------- Card
const Card = ({ id, icon, title, desc, isSocalIcon }) => {
  return (
    <SlideUp>
      <div className="flex items-center gap-7 pt-7 lg:pt-0">
        <div className="xl:min-w-[75px] min-w-16 max-w-16 xl:min-h-[75px] min-h-16 max-h-16 p-3 xl:p-0 shadow-[0px_4px_20px_0px_rgba(0,31,63,0.1019607843)] bg-white rounded-lg flex justify-center items-center">
          <Image src={icon} alt="icon" />
        </div>
        <div className="lg:max-w-[450px]">
          <Title size={"2xl"}>{title}</Title>
          {isSocalIcon ? (
            <div>{desc}</div>
          ) : (
            <p
              className="max-w-[311px] "
              dangerouslySetInnerHTML={{ __html: desc }}
            />
          )}
        </div>
      </div>
    </SlideUp>
  );
};
