import React from "react";
import Separator from "../../common/separator";
import { WorkData } from "../../data/work";
import WorkCard from "./work-card";
import "./work.css";

// function Work() {
//   const data = WorkData;
//   return (
//     <div className="work">
//       <label className="section-title">Work</label>
//       <Separator />
//       <div className="work-list">
//         {data.map((item) => {
//           return <WorkCard item={item} />;
//         })}
//       </div>
//     </div>
//   );
// }

function Work() {
  const data = WorkData;
  return (
    <div className="work" id="work">
      <h2 className="section-title">Work Experience</h2>
      <Separator />
      <div className="work-list">
        {data.map((item, index) => (
          <WorkCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Work;
