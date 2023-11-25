interface PropsType {
  title: string;
}

const Button = ({ title }: PropsType) => {
  return (
    <button className="bg-white text-Black active:bg-LightPeach active:text-white w-[152px] h-[56px] rounded-lg duration-150">
      {title}
    </button>
  );
};

export default Button;
