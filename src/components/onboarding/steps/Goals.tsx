import React from "react";
import { useContext } from "react";
// import { StepperContext } from "@/contexts/OnboardingContext";

function Situation() {
  // const { userData, setUserData } = useContext(StepperContext);
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUserData({ ...userData, [name]: value });
  // };
  return (
    <div className="flex flex-col">
      <div className=" font-bold  text-xl text-center md:w-full w-3/4 mx-auto">
        How can we assist you with your career goals?
      </div>
      <div className="text-core-red text-center text-m w-3/4 md:w-full mx-auto mt-2">Select all that apply </div>
      <div id="checkboxes" className="pt-5 flex flex-wrap gap-4 justify-center">
        <input type="checkbox" name="rGroup" value="1" id="r1" />
        <label className="whatever" htmlFor="r1">
          Professional Clothes
        </label>
        <input type="checkbox" name="rGroup" value="2" id="r2" />
        <label className="whatever" htmlFor="r2">
          Resume Help{" "}
        </label>
        <input type="checkbox" name="rGroup" value="3" id="r3" />
        <label className="whatever" htmlFor="r3">
          Interview Help{" "}
        </label>
      </div>
    </div>
  );
}

export default Situation;
