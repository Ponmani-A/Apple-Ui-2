import { Section, Card, Copy, PlayButton } from "../ShopMacCards/ShopMacCards";
import compareImg from "../../assets/macbook.jpg";
import womanImg from "../../assets/iphone14.jpg";
import tradeImg from "../../assets/macbook.jpg";
import payImg from "../../assets/macbook.jpg";
import appleCardImg from "../../assets/phonecard.jpg";
import customizeImg from "../../assets/macbook.jpg";
import ScrollRow from "../ScrollRow/ScrollRow";

function ShopMacGuides() {
  return (
    <>
      <Section
        dark="Shopping guides."
        light="Can’t decide? Start here."
        id="guides"
      >
        <ScrollRow>
          <Card>
            <Copy
              label="Compare all models"
              title="Which Mac is right for you?"
              small
            />
            <img
              src={compareImg}
              alt=""
              className="absolute bottom-0 right-0 h-[220px] w-[85%] object-contain object-right-bottom lg:h-[341px]"
            />
          </Card>

          <Card>
            <Copy
              label="Watch and learn"
              title="Need help choosing a MacBook?"
            />
            <p className="absolute bottom-[30px] left-[30px] max-w-[290px] text-[13px] leading-[19px] lg:text-[15px] lg:leading-[20px]">
              Get a one-minute guide from Maria on choosing what’s right for
              you.
            </p>
            <PlayButton />
          </Card>

          <Card>
            <Copy
              label="Online shopping help"
              title="Shop one on one with a Mac Specialist."
            />
            <img
              src={womanImg}
              alt=""
              className="absolute bottom-0 right-0 h-[260px] w-[60%] object-cover object-top lg:h-[330px]"
            />
          </Card>
        </ScrollRow>
      </Section>

      <Section dark="Ways to save." light="Find what works for you." id="save">
        <ScrollRow>
          <Card width="lg:w-[398px]">
            <Copy
              label="Apple Trade In"
              title="Trade in your device, get credit toward a new one.¹"
              small
            />
            <img
              src={tradeImg}
              alt=""
              className="absolute bottom-0 left-0 h-[230px] w-full object-cover object-top lg:h-[300px]"
            />
          </Card>

          <Card>
            <Copy
              label="Low monthly payments"
              title="Pay 0% APR over 12 months when you choose to check out with Apple Card Monthly Installments.²"
            />
            <img
              src={payImg}
              alt=""
              className="absolute bottom-0 right-[20px] h-[150px] w-[75%] object-contain object-right-bottom lg:h-[260px]"
            />
          </Card>

          <Card width="lg:w-[398px]">
            <Copy
              label="Apple Card"
              title="Get 3% back in Daily Cash with Apple Card.³"
              small
            />
            <img
              src={appleCardImg}
              alt=""
              className="absolute bottom-0 right-0 h-[220px] w-[90%] object-cover object-left-top lg:h-[260px]"
            />
          </Card>
        </ScrollRow>
      </Section>

      <Section
        dark="The Apple Store difference."
        light="Even more reasons to shop with us."
        id="difference"
      >
        <ScrollRow>
          <div className="relative h-[440px] w-[640px] flex-none overflow-hidden rounded-[18px] bg-white text-center sm:w-[760px] lg:h-[500px] lg:w-[978px]">
            <h3 className="pt-[34px] text-[20px] font-semibold leading-[28px] lg:text-[24px]">
              Customize your Mac.
            </h3>
            <p className="mx-auto mt-[8px] max-w-[420px] text-[14px] leading-[22px] lg:text-[16px] lg:leading-[25px]">
              Build it just the way you want. Choose from memory, storage,
              graphics, even color.
            </p>
            <img
              src={customizeImg}
              alt=""
              className="absolute bottom-0 left-0 h-[260px] w-full object-cover object-top lg:h-[343px]"
            />
          </div>
        </ScrollRow>
      </Section>
    </>
  );
}

export default ShopMacGuides;
