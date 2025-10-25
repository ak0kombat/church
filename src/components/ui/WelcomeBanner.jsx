import React from "react";
import { MdOutlineEvent } from "react-icons/md";
import { SiMaterialformkdocs } from "react-icons/si";
import { FaUser } from "react-icons/fa";
import CardForWelcome from "./CardForWelcome";
import { MdWifiCalling } from "react-icons/md";

export const WelcomeBanner = () => {
  return (
    <section className="w-full minimum-h-[50vh] mt-2 mb-7 ">
      <div className="flex flex-col justify-center gap-3 items-center text-gray-800 font-bold font-new p-2">
        <h1 className=" capitalize text-center font-sans text-3xl font-bold ">
          Welcome to church of st.joseph{" "}
        </h1>
        <p className="text-gray-1000 text-center font-thin">
          A place of worship, community, and spiritual growth. Join us as we
          walk together in faith, serving God and our community with love and
          dedication.
        </p>

        <section className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-2 sm:0 md:gap-20 mt-5 mb-10 ">
          <CardForWelcome
            icon={<FaUser />}
            box_name={"our father"}
            paragraph={
              "meet our dedicated clearly members who guide our spiritual journey."
            }
            link={"/fathers"}
            />
          <CardForWelcome
            icon={<MdOutlineEvent />}
            box_name={"Mass Timings"}
            paragraph={
              "stay updated with our upcoming services, events, and activities. so stay tuned."
            }
            link={"/Mass_Timings"}
            
            />
          <CardForWelcome
            icon={<SiMaterialformkdocs />}
            box_name={"Donations for New church constructions"}
            paragraph={
              "support our church building project with your generous contributions."
            }
            link={"/material"}
            />
          <CardForWelcome
            icon={<MdWifiCalling />}
            box_name={"contact us"}
            paragraph={
              "contact us, if you have any queries or anything to the provided details. "
            }
            link={"/contact"}
            />
        </section>
      </div>
    </section>
  );
};

export default WelcomeBanner;

