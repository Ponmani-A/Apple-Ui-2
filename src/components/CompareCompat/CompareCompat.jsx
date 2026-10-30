import CompareSection from "../CompareSection/CompareSection";

const iphoneBase = [
  "iPhone 14",
  "iPhone 14 Plus",
  "iPhone 14 Pro",
  "iPhone 14 Pro Max",
  "iPhone 13 mini",
  "iPhone 13",
  "iPhone 13 Pro",
  "iPhone 13 Pro Max",
  "iPhone 12 mini",
  "iPhone 12",
  "iPhone 12 Pro",
  "iPhone 12 Pro Max",
  "iPhone 11",
  "iPhone 11 Pro",
  "iPhone 11 Pro Max",
  "iPhone XS",
  "iPhone XS Max",
  "iPhone XR",
  "iPhone X",
  "iPhone 8",
  "iPhone 8 Plus",
  "iPhone 7⁸",
  "iPhone 7 Plus⁸",
];
const iphone1 = [
  ...iphoneBase,
  "iPhone SE (3rd generation)",
  "iPhone SE (2nd generation)",
  "iPhone SE (1st generation)⁸",
  "iPhone 6s⁹",
  "iPhone 6s Plus⁹",
  "iPhone 6⁹",
  "iPhone 6 Plus⁹",
  "iPhone 5s⁹",
];
const iphone23 = [
  ...iphoneBase,
  "iPhone 6s⁸",
  "iPhone 6s Plus⁸",
  "iPhone SE (3rd generation)",
  "iPhone SE (2nd generation)",
  "iPhone SE (1st generation)⁸",
];

const ipadBase = [
  "iPad Pro 12.9-inch (5th generation)",
  "iPad Pro 12.9-inch (4th generation)",
  "iPad Pro 12.9-inch (3rd generation)",
  "iPad Pro 12.9-inch (2nd generation)",
  "iPad Pro 12.9-inch (1st generation)⁸",
  "iPad Pro 11-inch (3rd generation)",
  "iPad Pro 11-inch (2nd generation)",
  "iPad Pro 11-inch (1st generation)",
  "iPad Pro 10.5-inch",
  "iPad Pro 9.7-inch⁸",
  "iPad (9th generation)",
  "iPad (8th generation)",
  "iPad (7th generation)",
  "iPad (6th generation)",
  "iPad (5th generation)",
  "iPad Air (5th generation)",
  "iPad Air (4th generation)",
  "iPad Air (3rd generation)",
  "iPad Air 2⁸",
];
const ipad1 = [
  ...ipadBase,
  "iPad Air (1st generation)⁸",
  "iPad mini (6th generation)",
  "iPad mini (5th generation)",
  "iPad mini 4⁸",
  "iPad mini 3⁹",
  "iPad mini 2⁹",
];
const ipad23 = [
  ...ipadBase,
  "iPad mini (6th generation)",
  "iPad mini (5th generation)",
  "iPad mini 4⁸",
];

const watch = [
  "Apple Watch Ultra",
  "Apple Watch Series 8",
  "Apple Watch Series 7",
  "Apple Watch Series 6",
  "Apple Watch SE (2nd generation)",
  "Apple Watch SE (1st generation)",
  "Apple Watch Series 5",
  "Apple Watch Series 4",
  "Apple Watch Series 3",
  "Apple Watch Series 2",
  "Apple Watch Series 1",
];
const mac = [
  "MacBook (Retina, 12-inch, Early 2015–2017)",
  "MacBook Air (11-inch, Mid 2012–Early 2015)",
  "MacBook Air (13-inch, Mid 2012–2017)",
  "MacBook Air (Retina, 13-inch, 2018–2020)",
  "MacBook Air (M1, 2020)",
  "MacBook Air (M2, 2022)",
  "MacBook Pro (Retina, 13-inch, Late 2012–Early 2015)",
  "MacBook Pro (Retina, 15-inch, Mid 2012–Mid 2015)",
  "MacBook Pro (13-inch, Mid 2012–2020)",
  "MacBook Pro (15-inch, Mid 2012–2019)",
  "MacBook Pro 13-inch (2020, two ports)",
  "MacBook Pro 13-inch (2020, four ports)",
  "MacBook Pro 13-inch (M1, 2020)",
  "MacBook Pro 13-inch (M2, 2022)",
  "MacBook Pro 14-inch (2021)",
  "MacBook Pro 16-inch (2021)",
  "MacBook Pro (16-inch, 2019)",
  "iMac (21.5-inch, Late 2012–2017)",
  "iMac (27-inch, Late 2012–Late 2013)",
  "iMac (Retina 4K, 21.5-inch, Late 2015–2019)",
  "iMac (Retina 5K, 27-inch, Late 2014–2020)",
  "iMac (24-inch, M1, 2021)",
  "iMac Pro (2017)",
  "Mac mini (Late 2012–Late 2018)",
  "Mac mini (M1, 2020)",
  "Mac Studio (2022)",
  "Mac Pro (Late 2013–2019)",
];

const groups = [
  {
    titles: ["iPhone Models", "iPhone Models", "iPhone Models"],
    lists: [iphone1, iphone23, iphone23],
  },
  {
    titles: ["iPad Models", "iPad Models", "iPad Models"],
    lists: [ipad1, ipad23, ipad23],
  },
  {
    titles: ["iPod Models", "iPod Models", "iPod Models"],
    lists: [
      ["iPod touch (7th generation)", "iPod touch (6th generation)⁹"],
      ["iPod touch (7th generation)"],
      ["iPod touch (7th generation)"],
    ],
  },
  {
    titles: [
      "Apple Watch Models⁸",
      "Apple Watch Models⁸",
      "Apple Watch Models⁸",
    ],
    lists: [watch, watch, watch],
  },
  {
    titles: ["Mac Models⁸", "Mac Models⁸", "Mac Models⁸"],
    lists: [mac, mac, mac],
  },
  {
    titles: ["Apple TV Models⁸", "Apple TV Models", "Apple TV Models"],
    lists: [
      ["Apple TV 4K", "Apple TV HD"],
      ["Apple TV 4K", "Apple TV HD⁸"],
      ["Apple TV 4K", "Apple TV HD"],
    ],
  },
];

function CompareCompat() {
  return (
    <CompareSection title="Compatibility">
      <div className="grid grid-cols-3 gap-x-[30px] gap-y-[40px]">
        {groups.map((g) =>
          g.lists.map((list, col) => (
            <div key={`${g.titles[0]}-${col}`}>
              <p className="text-[17px] font-semibold leading-6">
                {g.titles[col]}
              </p>
              <ul className="mt-0.5">
                {list.map((item) => (
                  <li key={item} className="text-[15px] leading-6">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )),
        )}
      </div>
    </CompareSection>
  );
}

export default CompareCompat;
