import { locationData } from "../shared/data.helper";
import LocationContentCard from "./location.content.card";

const LocationContent = () => {
  return (
    <>
      {locationData.map((l, index) => {
        return (
          <LocationContentCard
            key={l.id}
            align={index % 2 === 0 ? "right" : "left"}
            title={l.title}
            pHead={l.pHead}
            pText={l.pText}
            pHead2={l.pHead2}
            pText2={l.pText2}
            img={l.img}
          />
        );
      })}
    </>
  );
};

export default LocationContent;
