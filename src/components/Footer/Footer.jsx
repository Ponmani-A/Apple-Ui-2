const firstHeading = "mb-2 text-xs font-semibold text-[#1d1d1f]";
const heading = "mb-2 mt-5 text-xs font-semibold text-[#1d1d1f]";
const link = "block py-1 text-xs text-[#424245] hover:underline";
const blueLink = "text-[#06c] underline";
const legalText = "mb-2.5";
const legalLink = "px-2.5 text-[#424245] hover:underline";
const legalLinkBorder =
  "border-l border-[#d2d2d7] px-2.5 text-[#424245] hover:underline";

function Footer() {
  return (
    <footer className="mt-10 bg-[#f5f5f7] py-5 text-xs leading-[1.33] text-[#6e6e73]">
      <div className="mx-auto max-w-[980px] px-5">
        <div className="border-b border-[#d2d2d7] pb-3.5">
          <p className={legalText}>
            1. Trade-in values will vary based on the condition, year, and
            configuration of your eligible trade-in device. Not all devices are
            eligible for credit. You must be at least 18 years old to be
            eligible to trade in for credit or for an Apple Gift Card. Trade-in
            value may be applied toward qualifying new device purchase, or added
            to an Apple Gift Card. Actual value awarded is based on receipt of a
            qualifying device matching the description provided when estimate
            was made. Sales tax may be assessed on full value of a new device
            purchase. In-store trade-in requires presentation of a valid photo
            ID (local law may require saving this information). Offer may not be
            available in all stores, and may vary between in-store and online
            trade-in. Some stores may have additional requirements. Apple or its
            trade-in partners reserve the right to refuse or limit quantity of
            any trade-in transaction for any reason. More details are available
            from Apple’s trade-in partner for trade-in and recycling of eligible
            devices. Restrictions and limitations may apply.
          </p>
          <p className={legalText}>
            2. Apple Fitness+ requires iPhone 8 or later, or Apple Watch Series
            3 or later paired with iPhone 6s or later. New subscribers only.
            $9.99/month after trial. Plan automatically renews until cancelled.{" "}
            <a href="#" className={blueLink}>
              Terms
            </a>{" "}
            apply.
          </p>
          <p className={legalText}>
            A subscription is required for Apple Fitness+.
          </p>
          <p className={legalText}>
            Apple Fitness+ requires an iPhone 8 or later with iOS 16.1.
          </p>
          <p className={legalText}>
            Apple Fitness+ requires an Apple Watch Series 3 or later. Available
            when paired with iPhone 6s or later with iOS 14.5 or later.
          </p>
          <p className={legalText}>
            Fitness app on iPad requires iPadOS 14.3 or later.
          </p>
          <p className={legalText}>
            To get the newest features, make sure your devices are running the
            latest software version.
          </p>
          <p className={legalText}>
            To access and use all the features of Apple Card, you must add Apple
            Card to Wallet on an iPhone or iPad with the latest version of iOS
            or iPadOS. Update to the latest version by going to Settings &gt;
            General &gt; Software Update. Tap Download and Install.
          </p>
          <p className={legalText}>
            Available for qualifying applicants in the United States.
          </p>
          <p className={legalText}>
            Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City
            Branch.
          </p>
          <p className={legalText}>
            Learn more about how Apple Card applications are evaluated at{" "}
            <a href="#" className={blueLink}>
              support.apple.com/kb/HT209218
            </a>
            .
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 pb-2 pt-[18px] md:grid-cols-3 lg:grid-cols-5">
          <div>
            <h4 className={firstHeading}>Shop and Learn</h4>
            <a href="#" className={link}>
              Store
            </a>
            <a href="#" className={link}>
              Mac
            </a>
            <a href="#" className={link}>
              iPad
            </a>
            <a href="#" className={link}>
              iPhone
            </a>
            <a href="#" className={link}>
              Watch
            </a>
            <a href="#" className={link}>
              AirPods
            </a>
            <a href="#" className={link}>
              TV & Home
            </a>
            <a href="#" className={link}>
              AirTag
            </a>
            <a href="#" className={link}>
              Accessories
            </a>
            <a href="#" className={link}>
              Gift Cards
            </a>
            <h4 className={heading}>Apple Wallet</h4>
            <a href="#" className={link}>
              Wallet
            </a>
            <a href="#" className={link}>
              Apple Card
            </a>
            <a href="#" className={link}>
              Apple Pay
            </a>
            <a href="#" className={link}>
              Apple Cash
            </a>
          </div>

          <div>
            <h4 className={firstHeading}>Account</h4>
            <a href="#" className={link}>
              Manage Your Apple ID
            </a>
            <a href="#" className={link}>
              Apple Store Account
            </a>
            <a href="#" className={link}>
              iCloud.com
            </a>
            <h4 className={heading}>Entertainment</h4>
            <a href="#" className={link}>
              Apple One
            </a>
            <a href="#" className={link}>
              Apple TV+
            </a>
            <a href="#" className={link}>
              Apple Music
            </a>
            <a href="#" className={link}>
              Apple Arcade
            </a>
            <a href="#" className={link}>
              Apple Fitness+
            </a>
            <a href="#" className={link}>
              Apple News+
            </a>
            <a href="#" className={link}>
              Apple Podcasts
            </a>
            <a href="#" className={link}>
              Apple Books
            </a>
            <a href="#" className={link}>
              App Store
            </a>
          </div>

          <div>
            <h4 className={firstHeading}>Apple Store</h4>
            <a href="#" className={link}>
              Find a Store
            </a>
            <a href="#" className={link}>
              Genius Bar
            </a>
            <a href="#" className={link}>
              Today at Apple
            </a>
            <a href="#" className={link}>
              Apple Camp
            </a>
            <a href="#" className={link}>
              Apple Store App
            </a>
            <a href="#" className={link}>
              Certified Refurbished
            </a>
            <a href="#" className={link}>
              Apple Trade In
            </a>
            <a href="#" className={link}>
              Financing
            </a>
            <a href="#" className={link}>
              Carrier Deals at Apple
            </a>
            <a href="#" className={link}>
              Order Status
            </a>
            <a href="#" className={link}>
              Shopping Help
            </a>
          </div>

          <div>
            <h4 className={firstHeading}>For Business</h4>
            <a href="#" className={link}>
              Apple and Business
            </a>
            <a href="#" className={link}>
              Shop for Business
            </a>
            <h4 className={heading}>For Education</h4>
            <a href="#" className={link}>
              Apple and Education
            </a>
            <a href="#" className={link}>
              Shop for K-12
            </a>
            <a href="#" className={link}>
              Shop for College
            </a>
            <h4 className={heading}>For Healthcare</h4>
            <a href="#" className={link}>
              Apple in Healthcare
            </a>
            <a href="#" className={link}>
              Health on Apple Watch
            </a>
            <a href="#" className={link}>
              Health Records on iPhone
            </a>
            <h4 className={heading}>For Government</h4>
            <a href="#" className={link}>
              Shop for Government
            </a>
            <a href="#" className={link}>
              Shop for Veterans and Military
            </a>
          </div>

          <div>
            <h4 className={firstHeading}>Apple Values</h4>
            <a href="#" className={link}>
              Accessibility
            </a>
            <a href="#" className={link}>
              Education
            </a>
            <a href="#" className={link}>
              Environment
            </a>
            <a href="#" className={link}>
              Inclusion and Diversity
            </a>
            <a href="#" className={link}>
              Privacy
            </a>
            <a href="#" className={link}>
              Racial Equity and Justice
            </a>
            <a href="#" className={link}>
              Supplier Responsibility
            </a>
            <h4 className={heading}>About Apple</h4>
            <a href="#" className={link}>
              Newsroom
            </a>
            <a href="#" className={link}>
              Apple Leadership
            </a>
            <a href="#" className={link}>
              Career Opportunities
            </a>
            <a href="#" className={link}>
              Investors
            </a>
            <a href="#" className={link}>
              Ethics & Compliance
            </a>
            <a href="#" className={link}>
              Events
            </a>
            <a href="#" className={link}>
              Contact Apple
            </a>
          </div>
        </div>

        <p className="mt-2 border-y border-[#d2d2d7] py-3.5">
          More ways to shop:{" "}
          <a href="#" className={blueLink}>
            Find an Apple Store
          </a>{" "}
          or{" "}
          <a href="#" className={blueLink}>
            other retailer
          </a>{" "}
          near you. Or call 1-800-MY-APPLE.
        </p>

        <div className="flex flex-col items-start gap-2 pt-3.5 lg:flex-row lg:items-center lg:justify-between">
          <span>Copyright © 2023 Apple Inc. All rights reserved.</span>

          <div className="flex flex-wrap">
            <a href="#" className={legalLink + " pl-0 lg:pl-2.5"}>
              Privacy Policy
            </a>
            <a href="#" className={legalLinkBorder}>
              Terms of Use
            </a>
            <a href="#" className={legalLinkBorder}>
              Sales and Refunds
            </a>
            <a href="#" className={legalLinkBorder}>
              Legal
            </a>
            <a href="#" className={legalLinkBorder}>
              Site Map
            </a>
          </div>

          <span>United States</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
