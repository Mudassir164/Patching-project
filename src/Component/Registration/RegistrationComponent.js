import "./Style.css";
export const Logo = () => {
  return (
    <div className="w-[100%]">
      <img src="" className="w-[100%]" alt="" />
    </div>
  );
};

export const Heading = () => {
  return (
    <div className="w-[100%]">
      <h1 className="text-3xl text-center">Register a new account!</h1>
      <p className="text-lg text-center">This is just one time hastle</p>
    </div>
  );
};

export const UnderlineHeading = ({ title }) => {
  return (
    <h6 className="under-line text-center mt-5 font-bold after:w-[10%]">
      {title}
    </h6>
  );
};
