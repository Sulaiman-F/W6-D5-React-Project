import React from "react";

const Footerlinks = [
  {
    title: "ACTIVISION.COM",
    list: [
      "ABOUT US",
      "CAREERS",
      "PRESS CENTER",
      "RATINGS & RESOURCES",
      "INVESTOR RELATIONS",
      "NEWS",
    ],
  },
  {
    title: "SUPPORT",
    list: [
      "GAMES",
      "SUPPORT OPTIONS",
      "GAME MANUALS",
      "SOFTWARE LICENSE AGREEMENTS",
      "TWITTER",
    ],
  },
  {
    title: "PRIVACY",
    list: [
      "LEGAL",
      "TERMS OF USE",
      "PRIVACY POLICY",
      "COOKIE POLICY",
      "COOKIE SETTINGS",
      "ESRB.ORG",
    ],
  },
];

function Footer() {
  return (
    <div>
      <footer className="bg-[#121212] grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-5 px-5 md:px-24 text-sm font-medium py-5">
        {Footerlinks.map((item, index) => {
          return (
            <ul key={index} className=" flex flex-col items-start space-y-1.5">
              <li className="text-white pb-1">{item.title}</li>
              {item.list.map((link, i) => {
                return (
                  <li
                    key={i}
                    className="text-xs text-neutral-700  hover:text-white cursor-pointer"
                  >
                    {link}
                  </li>
                );
              })}
            </ul>
          );
        })}
        <div className="flex flex-wrap space-x-1.5">
          <img
            className="object-contain"
            src="https://support.activision.com/content/dam/atvi/support/common/footer/esrb-rating.png"
            alt=""
          />
          <img
            className="object-contain"
            src="https://support.activision.com/content/dam/atvi/support/common/footer/usk-18.png"
            alt=""
          />
          <img
            className="object-contain"
            src="https://support.activision.com/content/dam/atvi/support/common/footer/pegionline.png"
            alt=""
          />
          <img
            className="object-contain"
            src="https://support.activision.com/content/dam/atvi/support/common/footer/pegi-18.png"
            alt=""
          />
          <img
            className="object-contain"
            src="https://support.activision.com/content/dam/atvi/support/common/footer/esrb-privacy.gif"
            alt=""
          />
        </div>
        <div className="flex flex-col items-start space-y-1.5">
          <img
            className="h-15 object-contain"
            src="https://support.activision.com/content/dam/atvi/support/common/footer/atvilogo-wht-footer.png"
            alt=""
          />
          <p className="text-[0.7rem] font-extralight text-white bg-neutral-900 py-2 px-4">
            Copyright 2025 Activision Publishing, Inc.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
