import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import education from "./edu";

function Education() {
  return (
    <div id="education" className="mt-[10em] lg:mt-[17em]">
      <div className="lg:pl-[12em]">
        <h3 className="text-3xl font-bold border-b-[5px] pb-1 mb-12 lg:mb-1 ml-[1em] lg:ml-0 border-solid w-fit pr-1 rounded-r-lg">
          Education
        </h3>
      </div>

      <VerticalTimeline className="text-white mt-24">
        {education.map((e) => (
          <VerticalTimelineElement
            key={e.key}
            date={e.date}
            dateClassName="text-white"
            iconStyle={{
              background: "linear-gradient(black, purple)",
              color: "#fff",
            }}
            contentStyle={{
              fontSize: "14px",
              background: "transparent",
              border: "2px solid white",
              borderBottom: "none",
            }}
            contentArrowStyle={{ borderRight: "15px solid #fff" }}
            className="lmt-32"
          >
            <h1 className="font-bold text-2xl tracking-wider">{e.title}</h1>
            <h3 className="font-semibold tracking-wider pt-2">{e.school}</h3>
            <h4 className="font-semibold tracking-wider pt-2">{e.location}</h4>
            <p className="font-medium tracking-wider pt-2">{e.desc}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Education;
