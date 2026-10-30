import { Section, Card, Copy, PlayButton } from "../ShopMacCards/ShopMacCards";
import transferImg from "../../assets/macbook.jpg";
import sessionImg from "../../assets/fitnes.jpg";
import experienceImg1 from "../../assets/ipad.jpg";
import experienceImg2 from "../../assets/macbook.jpg";
import icloudImg from "../../assets/macbook.jpg";
import eduImg from "../../assets/macbook.jpg";
import bizImg from "../../assets/tedlesso.jpg";
import govImg from "../../assets/banner.jpg";
import ScrollRow from "../ScrollRow/ScrollRow";

function ShopMacMore() {
  return (
    <>
      <Section
        dark="Setup and support."
        light="Our Specialists are here to help."
        id="support"
      >
        <ScrollRow>
          <Card>
            <Copy
              label="Easy data transfer"
              title="New Mac? See how easy it is to move your content over."
            />
            <img
              src={transferImg}
              alt=""
              className="absolute bottom-0 left-0 h-[170px] w-full object-cover object-top lg:h-[230px]"
            />
          </Card>

          <Card>
            <Copy
              label="Watch and learn"
              title="It’s no problem with AppleCare+."
            />
            <p className="absolute bottom-[30px] left-[30px] max-w-[290px] text-[13px] leading-[19px] lg:text-[15px] lg:leading-[20px]">
              Learn how to protect your Mac in this 30-second video.
            </p>
            <PlayButton />
          </Card>

          <Card>
            <Copy
              label="Online personal session"
              title="Get to know your new Mac. From the basics to the best new features."
            />
            <img
              src={sessionImg}
              alt=""
              className="absolute bottom-0 right-0 h-[200px] w-[80%] object-cover lg:h-[250px]"
            />
          </Card>
        </ScrollRow>
      </Section>

      <Section
        dark="The Mac experience."
        light="Designed to connect with everything Apple."
        id="experience"
      >
        <ScrollRow>
          <Card>
            <Copy
              label="Why Mac"
              title="Incredible power. Incredibly simple."
              small
            />
            <img
              src={experienceImg1}
              alt=""
              className="absolute bottom-0 left-0 h-[200px] w-full object-contain object-bottom lg:h-[290px]"
            />
          </Card>

          <Card>
            <Copy
              label="macOS"
              title="Works smarter. Plays harder. Goes further. Discover macOS Ventura."
              small
            />
            <img
              src={experienceImg2}
              alt=""
              className="absolute bottom-0 left-0 h-[200px] w-full object-contain object-bottom lg:h-[290px]"
            />
          </Card>

          <Card>
            <Copy
              label="iCloud+"
              title="Get more storage, great new ways to protect your privacy."
              small
            />
            <img
              src={icloudImg}
              alt=""
              className="absolute bottom-0 left-0 h-[200px] w-full object-contain object-bottom lg:h-[290px]"
            />
          </Card>
        </ScrollRow>
      </Section>

      <Section
        dark="Special stores."
        light="Exclusive savings for businesses, school, and more."
        id="special"
      >
        <ScrollRow>
          <Card width="lg:w-[399px]">
            <Copy
              label="Education"
              title="Save on a new Mac with special education pricing.³"
              small
            />
            <img
              src={eduImg}
              alt=""
              className="absolute bottom-0 left-0 h-[220px] w-full object-contain object-bottom lg:h-[290px]"
            />
          </Card>

          <Card width="lg:w-[399px]" dark>
            <Copy
              dark
              label="Business"
              title="From enterprise to small business, we’ll work with you.³"
              small
            />
            <img
              src={bizImg}
              alt=""
              className="absolute bottom-0 left-0 h-[220px] w-full object-cover lg:h-[290px]"
            />
          </Card>

          <Card width="lg:w-[399px]" dark>
            <Copy
              dark
              label="Government"
              title="Special pricing is available for state, local, and federal agencies.³"
              small
            />
            <img
              src={govImg}
              alt=""
              className="absolute bottom-0 left-0 h-[220px] w-full object-cover lg:h-[290px]"
            />
          </Card>
        </ScrollRow>
      </Section>
    </>
  );
}

export default ShopMacMore;
