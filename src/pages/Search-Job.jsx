import React from "react";

const imgSrc = [
  {
    src: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem11-1710455685013.png",
  },
  {
    src: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem12-1710455727924.png",
  },

  {
    src: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem13-1710455855824.png",
  },
  {
    src: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem14-1710456001039.png",
  },
  {
    src: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem15-1710456129634.png",
  },
  {
    src: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem16-1710456257523.png",
  },
  {
    src: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem17-1710456307621.png",
  },
  {
    src: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem18-1710456364531.png",
  },
  {
    src: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem19-1710456408214.png",
  },
];
const CardList = [
  {
    src: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691566582196_PenFactory-1665997299565.jpg",
    title: "Our Locations",
  },
  {
    src: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691566670572_PenFactory2-1665997596145.jpg",
    title: "DE&I",
  },
  {
    src: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691566841083_EarlyCareersAP-1666643219491.jpg",
    title: "Early Careers",
  },
  {
    src: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/Capture4-1716042103068.png",
    title: "Mission & Talent Brand",
  },
];

const BrandimgSrc = [
  {
    src: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691575580503_logo_treyarch-1666638610775.png",
  },
  {
    src: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691575949128_logo_infinityward-1666638609622.png",
  },
  {
    src: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691576204660_logo_highmoon-studios-1666638608448.png",
  },
  {
    src: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691576477943_logo_sledgehammer-1666639102046.png",
  },
  {
    src: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691576731685_logo_raven-1666639100736.png",
  },
  {
    src: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691576931380_logo_atvi-shanghai-studio-1666639104346.png",
  },
  {
    src: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691577081915_logo_demonware-1666639103123.png",
  },
  {
    src: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691577163163_ss-logo-labeled-1670261765680.png",
  },
  {
    src: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/DLE-Logo-White2-1709023761211.png",
  },
  {
    src: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/central_tech_text_7201-1709023955618.png",
  },
  {
    src: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/Beenox3-1710257100788.png",
  },
];

const jobs = [
  {
    title: "Senior Gameplay Engineer - High Moon Studios",
    category: "Programming/Software Engineering",
    reqId: "R024108",
    description:
      "Collaborate with designers and animators to create new gameplay systems and expand existing ones. Spearhead the development of innovative gameplay experiences. Proficiency in 3D math, related to game...",
  },
  {
    title: "Lead Analytics Engineer",
    category: "Data Analytics",
    reqId: "R024154",
    description:
      "You'll work closely with engineers, product managers, and analytics peers to build a foundational data layer that helps derive meaningful insights and recommendations, as well as furthering self-service analytics capabilities.",
  },
  {
    title: "Expert Animation Engineer - Infinity Ward",
    category: "Programming/Software Engineering",
    reqId: "R024307",
    description:
      "Infinity Ward is looking for a dedicated Expert Animation Engineer with a strong interest in crafting high fidelity, scalable animation systems and behaviors. Develop and upgrade workflows to allow the team to create high quality animations.",
  },
  {
    title: "Senior AI Animator - Infinity Ward",
    category: "Animation",
    reqId: "R022959",
    description:
      "Use motion capture and hand-keyed techniques to create high-fidelity NPC Animations that are genre-defining. A strong ability in hand-keyed animation. Strong Maya animation experience. A strong passion for creating believable character performances.",
  },
  {
    title: "Level Designer",
    category: "Game/Level Design",
    reqId: "R025221",
    description:
      "Work with design leadership, artists, and other level designers to deliver environments that embody the creative vision of the game. Work alongside other designers, artists, animators and engineers to...",
  },
];

function SearchJob() {
  return (
    <>
      <div className=" h-15 bg-black"></div>
      <section className="relative flex items-center justify-center h-[100vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="https://assets.phenompeople.com/CareerConnectResources/prod/ACPUUS/videos/EVPCareersiteherovideo5-1710271231185.mp4"
        />
        <div className="relative z-10 flex flex-col items-center w-full">
          <button className="bg-neutral-700 text-white border-2 py-2 px-8 cursor-pointer text-lg border-green-700 rounded-lg hover:bg-green-700">
            SEARCH JOB
          </button>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center bg-[#121212] space-y-5 py-5  md:space-y-10  md:py-10 lg:space-y-20 lg:py-20">
        <h1 className="text-white text-base md:text-2xl font-bold">
          START YOUR GAME CHANGING CAREER
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 px-5 md:px-20 lg:px-36">
          {imgSrc.map((img, index) => (
            <img
              key={index}
              className="object-contain cursor-pointer hover:scale-105 transition-all duration-300"
              src={img.src}
              alt=""
            />
          ))}
        </div>
      </section>
      <section className="flex flex-col justify-center bg-[#121212] space-y-5 pb-5  md:space-y-10  md:pb-10 lg:space-y-20 lg:pb-20">
        <h1 className="text-white text-2xl md:text-4xl font-bold px-5 md:px-20 lg:px-36">
          EXPLORE OUR WORLD
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5 px-5 md:px-20 lg:px-36">
          {CardList.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-8 pb-8 rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300 bg-black"
            >
              <img
                src={card.src}
                alt={card.title}
                className="object-cover w-full rounded-t-2xl"
              />
              <h2 className="text-white text-lg font-bold">{card.title}</h2>
              <button className="bg-neutral-900 text-white border-2 py-2 px-4 cursor-pointer text-lg border-white rounded-2xl hover:bg-white hover:text-black transition-all duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>
      <section>
        <video
          autoPlay
          loop
          muted
          playsInline
          src="https://www.activision.com/cdn/videos/game-ap-look.mp4"
          className="w-full"
        />
      </section>
      <section className="flex flex-col items-center justify-center bg-[#121212] space-y-5 py-5  md:space-y-10  md:py-10 lg:space-y-20 lg:py-20">
        <h1 className="text-white text-base md:text-2xl font-bold">
          START YOUR GAME CHANGING CAREER
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 px-10 md:px-20 lg:px-36">
          {BrandimgSrc.map((img, index) => (
            <img
              key={index}
              className="object-contain cursor-pointer hover:scale-105 transition-all duration-300 h-20 w-70"
              src={img.src}
              alt=""
            />
          ))}
        </div>
      </section>

      <section className="flex flex-col justify-center bg-[#121212] space-y-5 pb-5  md:space-y-10  md:pb-10 lg:space-y-20 lg:pb-20">
        <h1 className="text-white text-2xl md:text-4xl font-bold px-5 md:px-20 lg:px-36">
          Be the First to Apply
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-5 px-5 md:px-10 lg:px-40">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-neutral-100 p-4 rounded-lg shadow-lg space-y-3"
            >
              <h2 className="text-black md:text-lg lg:text-2xl font-bold">
                {job.title}
              </h2>
              <p className="text-neutral-800 text-sm md:text-base lg:text-lg">
                {job.category} {job.reqId}
              </p>
              <p className="text-neutral-800 text-sm md:text-base lg:text-lg">
                {job.description}
              </p>
              <button className="bg-black hover:bg-green-700 text-white py-3 px-2 w-40 rounded-lg cursor-pointer transition-all duration-300 ">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>
      <section className=" bg-[#121212]">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center border-b border-neutral-300 pb-1 gap-5 px-5 md:px-20 lg:px-36 ">
          <h1 className="text-white text-lg   hover:no-underline underline cursor-pointer">
            Cookie Settings
          </h1>
          <h1 className="text-white text-lg   hover:underline cursor-pointer">
            Personal Information
          </h1>
        </div>
        <div className="flex flex-col justify-center space-y-4 px-5 md:px-10 lg:px-20 py-5">
          <h1 className="text-white md:text-lg lg:text-2xl font-bold ">
            Equal Opportunity Employer
          </h1>
          <p className="text-white text-xs md:text-base">
            Activision is an Equal Opportunity Employer. All qualified
            applicants will receive consideration for employment without regard
            to race, color, religion, sex, sexual orientation, gender identity,
            gender expression, national origin, protected veteran status, or any
            other basis protected by applicable law, and will not be
            discriminated against on the basis of disability.{" "}
            <span className="underline cursor-pointer">
              Equal Employment Opportunity Policy
            </span>
          </p>
          <p className="text-white text-xs md:text-base">
            While we strive to provide competitive offers to successful
            candidates, new hire compensation is negotiable.
          </p>
          <h1 className="text-white md:text-lg lg:text-2xl font-bold ">
            Accommodation Request
          </h1>
          <p className="text-white text-xs md:text-base">
            We are committed to working with and providing reasonable assistance
            to individuals with physical and mental disabilities. If you are a
            disabled individual requiring an accommodation to apply for an open
            position, please email your request to
            <span className="underline cursor-pointer">
              accommodationrequests@activisionblizzard.com
            </span>
            . General employment questions cannot be accepted or processed here.
            Thank you for your interest.
          </p>
          <p className="text-white text-xs md:text-base">
            This site uses cookies. By continuing to browse the site you are
            agreeing to our use of cookies. Find out more here.
          </p>
        </div>
      </section>
    </>
  );
}

export default SearchJob;
