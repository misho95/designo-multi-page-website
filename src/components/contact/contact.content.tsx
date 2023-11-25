import LocationCardContainer from "../about/location.card.container";
import pattern from "../../assets/shared/desktop/bg-pattern-small-circle.svg";
import ContactInput from "./contact.input";
import { useState } from "react";
import Button from "../shared/button";

const ContactContent = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [message, setMessage] = useState("");

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name === "") {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (email === "") {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (phone === "") {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }

    return;
  };

  return (
    <>
      <div className="bg-Peach text-white relative h-[764px] sm:h-[711px] lg:h-[480px] rounded-xl flex flex-col justify-center items-center lg:flex-row overflow-hidden gap-[20px]">
        <img
          src={pattern}
          className="object-cover absolute bottom-0 w-[640px] h-[640px]"
        />
        <div className="w-11/12 sm:w-full lg:w-1/2 flex justify-center items-center">
          <span className="flex flex-col gap-[20px] w-[480px]">
            <h1 className="text-[48px]">Contact Us</h1>
            <p>
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </p>
          </span>
        </div>
        <div className="w-11/12 sm:w-full lg:w-1/2 flex justify-center items-center">
          <form
            onSubmit={submitForm}
            className="w-[380px] h-[371px] flex flex-col gap-[20px] justify-center items-center sm:items-end"
          >
            <ContactInput
              type={"text"}
              placeHolder={"Full Name"}
              input={name}
              setInput={setName}
              error={nameError}
            />
            <ContactInput
              type={"email"}
              placeHolder={"Email Address"}
              input={email}
              setInput={setEmail}
              error={emailError}
            />
            <ContactInput
              type={"text"}
              placeHolder={"Phone"}
              input={phone}
              setInput={setPhone}
              error={phoneError}
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={"Your Message"}
              className="w-full h-[102px] bg-transparent text-white border-b-[1px] border-white py-[6px] placeholder-white/50 focus:border-b-[2px] focus:outline-none resize-none"
            />
            <Button title={"SUBMIT"} />
          </form>
        </div>
      </div>
      <LocationCardContainer />
    </>
  );
};

export default ContactContent;
