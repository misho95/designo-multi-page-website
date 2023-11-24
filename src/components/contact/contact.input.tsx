import iconError from "../../assets/contact/desktop/icon-error.svg";

interface PropsType {
  type: string;
  placeHolder: string;
  input: string;
  setInput: (arg: string) => void;
  error: boolean;
}

const ContactInput = ({
  type,
  placeHolder,
  input,
  setInput,
  error,
}: PropsType) => {
  return (
    <label className="relative w-full">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type={type}
        placeholder={placeHolder}
        className="w-full bg-transparent text-white border-b-[1px] border-white py-[6px] placeholder-white/50 focus:border-b-[2px] focus:outline-none"
      />
      {error && (
        <span className="absolute right-[6px] top-1/2 -translate-y-1/2 italic flex gap-[8px] items-center justify-center">
          <p>Can’t be empty</p> <img src={iconError} />
        </span>
      )}
    </label>
  );
};

export default ContactInput;
