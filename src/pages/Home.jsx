import React from "react";

const cards = [
  {
    imgUrl:
      "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/BO6-SEASON-04-NARRATIVE-TOUT.jpg",
    date: "May 20, 2025",
    title: "Stitch Returns in Season 04",
    description:
      "Following a daring jailbreak conducted by his former adversary, Stitch’s clandestine resurrection is achieved and he returns to the fray with orders to crack the codes needed to uncover the Pantheon moles. Get the backstory on his intense rivalry turned uneasy alliance with Russell Adler and deploy as the menacing ex-Perseus agent arriving in the Season 04 Battle Pass.",
  },
  {
    imgUrl:
      "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/body/code/CODE-MAM-GY6-TOUT.jpg",
    date: "May 15, 2025",
    title: "Support C.O.D.E. Military Appreciation Month with USAA",
    description:
      "The Call of Duty Endowment Military Appreciation Month 2025 presented by USAA honors veterans with the C.O.D.E. United Force: Tracer Pack and the C.O.D.E. Got Your Six Event.",
  },
  {
    imgUrl:
      "https://www.tonyhawkthegame.com/content/dam/atvi/tony-hawk/blog/chicago/el-rey-blog/THPS-ELREY-IMAGE-TOUT.jpg",
    date: "May 09, 2025",
    title: "Tony Hawk’s Pro Skater 3 + 4: THPS Fest at El Rey Theatre",
    description:
      "THPS Fest at the El Rey Theater in Los Angeles celebrated the return of Tony Hawk’s Pro Skater 3 + 4 by providing a closer look at some of the levels, skaters, and other new features coming to the game. See what the event was all about, including previously revealed content arriving at launch on July 11.",
  },
  {
    imgUrl:
      "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/body/ricochet/bo6-season-03-ricochet/COD-BO6-RICOCHET-S03R-TOUT-A.webp",
    date: "May 07, 2025",
    title: "#TeamRICOCHET Season 03 Recap for Black Ops 6 and Warzone",
    description: "#TeamRICOCHET Season 03 Recap and Update.",
  },
  {
    imgUrl:
      "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/body/code/CODE-MAM-2025-IMAGE-TOUT.webp",
    date: "May 01, 2025",
    title: "C.O.D.E. celebrates Military Appreciation Month with USAA",
    description:
      "The Call of Duty Endowment Military Appreciation Month 2025 presented by USAA honors veterans with the C.O.D.E. United Force: Tracer Pack, the C.O.D.E. Got Your Six Event, Kane Brown High Road Challenge, and more.",
  },
  {
    imgUrl:
      "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/bo6/BO6-S03R-ANNOUNCEMENT-TOUT.webp",
    date: "Apr 29, 2025",
    title: "Black Ops 6 Season 03 Reloaded: All the Details",
    description:
      "Season 03 Reloaded brings two new Multiplayer maps, Directed Mode for Shattered Veil, and new updates to Verdansk. Get new Loadout items like the Vendetta Perk and the Ladra SMG and participate in new events and more when the mid-season update launches on May 1!",
  },
];
cards;
function Home() {
  return (
    <>
      <div className=" h-15 bg-black"></div>
      <section className="relative flex items-center justify-center h-[100vh] overflow-hidden px-5 md:px-20 lg:px-36">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="https://www.activision.com/cdn/crash/crash_team_rumble.mp4"
        />
        <div className="relative z-10 flex flex-col items-start w-full gap-5">
          <img
            className="object-contain cursor-pointer hover:scale-105 transition-all duration-300 h-[40vh] w-[70vh]"
            src="https://www.activision.com/content/dam/atvi/Crash/crash-touchui/lava/common/crash-team-rumble-logo.png"
            alt=""
          />
          <p className="text-white text-sm md:text-base lg:text-xl font-medium">
            Get ready to dash, jump, slide, and bounce\ninto an all-new way to
            Crash
          </p>
          <div className=" flex flex-col md:flex-row gap-5">
            <button className="bg-sky-700/50 border border-sky-600 text-white font-medium py-2 rounded-3xl hover:bg-sky-600/50 hover:border-sky-500 cursor-pointer w-55">
              GET NOW
            </button>
            <button className="bg-transparent border border-white text-white font-medium py-2  rounded-3xl hover:bg-sky-700/50 hover:border-sky-500 cursor-pointer w-55">
              VISIT SITE
            </button>
          </div>
        </div>
      </section>
      <section className="flex flex-col bg-[#111] text-white items-center gap-8  py-5   md:py-10  lg:py-20 px-5 md:px-10 lg:px-20">
        <h1 className="text-2xl md:text-4xl font-bold">
          LATEST NEWS & ARTICLES
        </h1>
        <div className=" flex justify-center gap-5 border-y-2 border-neutral-700 w-full flex-wrap">
          <h1 className="text-xl font-bold bg-sky-800/30 py-5 px-4 border-b-4 border-sky-500 cursor-pointer">
            ALL ITEMS
          </h1>
          <img
            className=" hover:bg-sky-800/30 py-3 px-2 hover:border-b-4 border-sky-500 cursor-pointer transition-all duration-300 hover:scale-95 contrast-20 hover:contrast-100 h-20 w-40"
            src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/activision-logo-small.svg"
            alt=""
          />
          <img
            className=" hover:bg-sky-800/30 py-3 px-2 hover:border-b-4 border-sky-500 cursor-pointer transition-all duration-300 hover:scale-95 contrast-20 hover:contrast-100 h-20 w-40"
            src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/cod-logo.svg"
            alt=""
          />
          <img
            className=" hover:bg-sky-800/30 py-3 px-2 hover:border-b-4 border-sky-500 cursor-pointer transition-all duration-300 hover:scale-95 contrast-20 hover:contrast-100 h-20 w-40"
            src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/THPS3+4_Logo.svg"
            alt=""
          />
          <img
            className=" hover:bg-sky-800/30 py-3 px-2  hover:border-b-4 border-sky-500 cursor-pointer transition-all duration-300 hover:scale-95 contrast-20 hover:contrast-100 h-20 w-40"
            src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/crash-bandicoot-logo.png"
            alt=""
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 justify-items-center  gap-5 mt-5">
          {cards.map((card, index) => {
            return (
              <>
                <div
                  key={index}
                  className="bg-[#222] h-auto pb-5 rounded-lg hover:scale-105 transition-all duration-300"
                >
                  <img
                    src={card.imgUrl}
                    alt={card.title}
                    className="w-full h-4/12 md:h-5/12 object-cover rounded-t-lg mb-3"
                  />
                  <div className="h-8/12 md:h-7/12  flex flex-col gap-3 p-3">
                    <p className="text-sm">{card.date}</p>
                    <h2 className="text-base font-bold">{card.title}</h2>
                    <p className="text-sm">{card.description}</p>
                    <p className="text-base hover:text-blue-500 cursor-pointer">
                      READ MORE
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <button className="bg-transparent border border-white text-white font-medium py-2  rounded-3xl hover:bg-sky-700/50 hover:border-sky-500 cursor-pointer w-55">
          VIEW ALL
        </button>
      </section>
      <section
        className="flex  items-center justify-between space-y-5  py-5  md:space-y-10  md:py-5  lg:py-10  bg-center bg-no-repeat bg-cover text-white px-5 md:px-20 lg:px-36 "
        style={{
          backgroundImage: "url('help.png')",
        }}
      >
        <div className="flex flex-col gap-3">
          <h1 className="text-xl md:text-3xl font-bold text-white">
            WE'RE HERE TO HELP!
          </h1>
          <p className="text-lg text-white w-6/12">
            Get answers to frequently asked questions, check server status, and
            engage with a support expert{" "}
          </p>
          <button className="bg-transparent border border-white text-white font-medium py-3 mt-3 rounded-3xl hover:bg-sky-700/50 hover:border-sky-500 cursor-pointer w-55">
            VISIT SUPPORT
          </button>
        </div>
      </section>
      <section
        className="flex flex-col md:flex-row  items-center justify-between space-y-5  py-5  md:space-y-10  md:py-5  lg:py-10 bg-center bg-no-repeat bg-cover text-white px-5 md:px-20 lg:px-36"
        style={{
          backgroundImage: "url('banner-img-spyro.png')",
        }}
      >
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

export default Home;
