import { Link } from "react-router-dom";

interface PropsType {
  title: string;
  url: string;
}

const SharedLink = ({ title, url }: PropsType) => {
  return (
    <Link
      to={url}
      className="bg-white text-Black active:bg-LightPeach active:text-white w-[152px] h-[56px] rounded-lg duration-150 flex justify-center items-center"
    >
      {title}
    </Link>
  );
};

export default SharedLink;
