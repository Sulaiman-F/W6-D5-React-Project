import React from "react";

const LeadershipTeam = [
  {
    member: "Rob Kostich",
    role: "President",
    profilePic:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/rob-kostich.jpg",
  },
  {
    member: "Josh Taub",
    role: "Chief Operating Officer",
    profilePic:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/josh-taub.jpg",
  },
  {
    member: "Suzie Carr",
    role: "Chief People Officer",
    profilePic:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/suzie-carr.jpg",
  },
  {
    member: "Terri Durham",
    role: "SVP & General Counsel",
    profilePic:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/terri-durham.jpg",
  },
  {
    member: "David Stohl",
    role: "Head of Development, Call of Duty",
    profilePic:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/dave-stohl.jpg",
  },
  {
    member: "Pat Kelly",
    role: "Head of Creative, Call of Duty",
    profilePic:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/patt-kelly.jpg",
  },
  {
    member: "Tyler Bahl",
    role: "SVP, Head of Marketing",
    profilePic:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/tyler-bahl.jpg",
  },
  {
    member: "Natasha Tatarchuk",
    role: "SVP, Chief Technology Officer",
    profilePic:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/natasha.jpg",
  },
  {
    member: "Matt Cox",
    role: "GM, Call of Duty",
    profilePic:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/matt-cox.jpg",
  },
];

const games = [
  {
    game: "Call of Duty Black Ops 6",
    age: "Mature 17+",
    imgUrl:
      "https://www.activision.com/content/dam/atvi/support/contact-us/BO6-FOB.jpg",
  },
  {
    game: "Call of Duty®: Warzone",
    age: "Mature 17+",
    imgUrl:
      "https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/warzone/common/wz-boxart.jpg",
  },
  {
    game: "Call of Duty Modern Warfare III",
    age: "Mature 17+",
    imgUrl:
      "https://www.activision.com/content/dam/atvi/activision/games/call-of-duty/call-of-duty-modern-warfare-iii/mwiii-boxart.jpg",
  },
  {
    game: "Crash Team Rumble",
    age: "Everyone 10+",
    imgUrl:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/crash-bandicoot/crash-team-rumble/CTRumble_KEYART_SEASON2_1080X1350_AVAILABLE_NOW.jpg",
  },
  {
    game: "Tony Hawk's™ Pro Skater™ 1 + 2",
    age: "Teen",
    imgUrl:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/tony-hawk/tony-hawk-pro-skater-1-2/thps-1-2-boxart.png",
  },
  {
    game: "Call of Duty®: Mobile",
    age: "Mature 17+",
    imgUrl:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/call-of-duty/mobile/codm-boxart.jpg",
  },
  {
    game: "Sekiro®: Shadows Die Twice",
    age: "Mature 17+",
    imgUrl:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/sekiro/shadows-die-twice/sekiro-boxart.jpg",
  },
  {
    game: "Spyro® Reignited Trilogy",
    age: "Everyone 10+",
    imgUrl:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/spyro/reignited-trilogy/spyro-boxart.png",
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
    src: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_beenox.png",
  },
  {
    src: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691576477943_logo_sledgehammer-1666639102046.png",
  },
  {
    src: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691576731685_logo_raven-1666639100736.png",
  },
  {
    src: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo-toysforbob.png",
  },
  {
    src: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_atvi-shanghai-studio.png",
  },
  {
    src: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_demonware.png",
  },
];

function About() {
  return (
    <>
      <div className=" h-15 bg-black"></div>

      <section className="bg-[url('./public/activision-hero.png')]  bg-center bg-no-repeat bg-cover h-[50vh]"></section>
      <section className="flex flex-col items-center justify-center space-y-3  py-5  md:space-y-5  md:py-10 lg:space-y-10 lg:py-20 bg-black text-white px-5 md:px-20 lg:px-36">
        <h1 className="text-2xl md:text-4xl font-bold">Our Mission</h1>
        <hr className=" border-neutral-600 w-full" />
        <p className="text-sm md:text-base lg:text-lg text-center ">
          At Activision, we strive to create the most iconic brands in gaming
          and entertainment. We’re driven by our mission to deliver unrivaled
          gaming experiences for the world to enjoy, together. Home to iconic
          franchises like Call of Duty®, Crash Bandicoot™, and Tony Hawk’s™ Pro
          Skater™, we're a global leader in interactive entertainment. Our goal?
          Delight millions with innovative, fun, and engaging games. With a
          legacy of success, we're pushing boundaries with cutting-edge
          technology and inclusive practices. Join us in delivering
          unforgettable entertainment and seize the chance to level up your
          career.
        </p>
      </section>
      <section className="flex flex-col items-center justify-center space-y-3  py-5  md:space-y-5  md:py-10 lg:space-y-10 lg:py-20 bg-black text-white px-5 md:px-20 lg:px-36">
        <h1 className="text-2xl md:text-4xl font-bold">Activate Your Future</h1>
        <hr className=" border-neutral-600 w-full" />
        <p className="text-sm md:text-base lg:text-lg leading-8 md:leading-10 lg:leading-14 text-center line-h">
          We unite our global player community with epic entertainment, focusing
          on three core pillars: <br />
          People - fostering talent and learning opportunities. <br />
          Innovation - consistently pushing to iterate and evolve. <br />
          Excellence - delivering high-quality games, consistently year in and
          year out. <br />
          Join us at Activision, where inclusivity thrives, and together we
          shape the future of entertainment for our players. Explore open roles
          now!
        </p>
      </section>
      <section className="flex flex-col items-center justify-center space-y-3  py-5  md:space-y-5  md:py-10 lg:space-y-10 lg:py-20 bg-black text-white px-5 md:px-20 lg:px-36">
        <h1 className="text-2xl md:text-4xl font-bold">Our Values</h1>
        <hr className=" border-neutral-600 w-full" />
        <div className="flex flex-col items-center">
          <img
            className=""
            src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/values/atvi-values.png"
            alt=""
          />
          <button className="bg-sky-700/50 border border-sky-600 text-white font-medium py-2 rounded-3xl hover:bg-sky-600/50 hover:border-sky-500 cursor-pointer w-55">
            LEARN MORE
          </button>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center space-y-5  py-5  md:space-y-10  md:py-10 lg:space-y-20 lg:py-20 bg-black text-white px-5 md:px-20 lg:px-20">
        <h1 className="text-2xl md:text-4xl font-bold">Our Leadership Team</h1>
        <hr className=" border-neutral-600 w-full" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-15 ">
          {LeadershipTeam.map((member, index) => {
            return (
              <>
                <div
                  key={index}
                  className="flex flex-col gap-3 items-center w-full m-0"
                >
                  <img
                    className="size-70 rounded-full"
                    src={member.profilePic}
                    alt={member.member}
                  />
                  <h2 className="text-lg font-bold">{member.member}</h2>
                  <p className="text-sm">{member.role}</p>
                </div>
              </>
            );
          })}
        </div>
      </section>
      <section className="flex flex-col items-center justify-center space-y-5  py-5  md:space-y-10  md:py-10 lg:space-y-20 lg:py-20 bg-black text-white px-5 md:px-20 lg:px-20">
        <h1 className="text-2xl md:text-4xl font-bold">Our Games</h1>
        <hr className=" border-neutral-600 w-full" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 ">
          {games.map((game, index) => {
            return (
              <>
                <div
                  key={index}
                  className="flex flex-col gap-3 items-center w-full"
                >
                  <img
                    className="object-cover h-90 w-full rounded-xl cursor-pointer hover:scale-105 transition-all duration-300"
                    src={game.imgUrl}
                    alt={game.game}
                  />
                  <div className="flex flex-col w-full">
                    <h2 className="text-lg font-bold">{game.game}</h2>
                    <p className="text-sm text-neutral-600">{game.age}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
      <section className="flex flex-col items-center justify-center space-y-5  py-5  md:space-y-10  md:py-10 lg:space-y-20 lg:py-20 bg-black text-white px-5 md:px-20 lg:px-20">
        <h1 className="text-2xl md:text-4xl font-bold">Our Games</h1>
        <hr className=" border-neutral-600 w-full" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 gap-x-20 justify-items-center">
          {BrandimgSrc.map((img, index) => (
            <img
              key={index}
              className="object-contain cursor-pointer contrast-20 hover:contrast-100 transition-all duration-300 h-30 w-80 m-0"
              src={img.src}
              alt=""
            />
          ))}
        </div>
      </section>
      <section className="flex flex-col md:flex-row  items-center justify-between space-y-5  py-5  md:space-y-10  md:py-5  lg:py-10 bg-[url('./public/banner-img-spyro.png')] bg-center bg-no-repeat bg-cover text-white px-5 md:px-20 lg:px-36">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl md:text-5xl font-bold text-sky-700">
            HAVE FUN
          </h1>
          <p className="text-lg text-white">
            Learn more about job opportunities
          </p>
          <button className="bg-transparent border border-white text-white font-medium py-3 mt-5 rounded-3xl hover:bg-sky-700/50 hover:border-sky-500 cursor-pointer w-55">
            JOIN US
          </button>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-xl md:text-3xl font-bold">Our Teams</h1>
          <div className="flex gap-10 ml-3">
            <ul className="flex flex-col gap-1">
              <li>Game Design</li>
              <li>Art & Animation</li>
              <li>Brand Management</li>
              <li>Production</li>
              <li>Quality Assurance</li>
            </ul>
            <ul className="flex flex-col gap-1">
              <li>Customer Support</li>
              <li>Studio Operations</li>
              <li>Programming</li>
              <li>Finance & Accounting</li>
              <li>Human Resources</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
