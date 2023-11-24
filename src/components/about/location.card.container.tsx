import { locations } from "../shared/data.helper";
import LocationCard from "./location.card";

const LocationCardContainer = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around select-none gap-[20px]">
      {locations.map((l) => {
        return <LocationCard key={l.id} img={l.img} title={l.name} />;
      })}
    </div>
  );
};

export default LocationCardContainer;
