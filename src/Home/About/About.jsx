import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="pb-32">
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <img src={person} className="w-2/3 rounded-lg shadow-2xl " />
            <img
              src={parts}
              className="w-1/2 rounded-lg shadow-2xl absolute right-5 border-8 border-white top-1/2"
            />
          </div>
          <div className="lg:w-1/2 space-y-5">
            <h3 className="text-lg font-bold text-orange-500">About Us</h3>
            <h1 className="text-5xl font-bold">
              We are qualified & of experience in this field
            </h1>
            <p className="">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which do not look even
              slightly believable.
            </p>
            <p className="">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which do not look even
              slightly believable.
            </p>
            <button className="btn btn-warning bg-orange-500">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
