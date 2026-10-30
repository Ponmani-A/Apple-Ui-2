import setup from "../../assets/airpods.jpg";

const label = "text-[15px] font-semibold lg:text-[18px]";
const h2Big =
  "text-[44px] font-semibold leading-[1.09] sm:text-[64px] lg:text-[110px] lg:leading-[120px]";
const body =
  "text-[17px] font-semibold leading-[1.4] lg:text-[21px] lg:leading-[26px]";
const small =
  "text-[15px] leading-[22px] text-[#6e6e73] lg:text-[17px] lg:leading-6";

function MaxMagic() {
  return (
    <section className="bg-white pb-[60px] pt-[80px] lg:pt-[160px]">
      <div className="mx-auto max-w-[980px] px-5">
        <p className={label}>Magical experience</p>
        <h2 className={`mt-3 ${h2Big}`}>
          Elaborately
          <br />
          simple.
        </h2>
        <p className={`mt-6 lg:ml-[480px] lg:max-w-[470px] ${body}`}>
          AirPods Max inherit all of the wireless, effortless magic of the
          AirPods family. From setup to Siri commands, they make the listening
          experience completely fluid — day to day, device to device.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-[1317px] px-4 lg:mt-[80px] lg:flex lg:items-start lg:px-0">
        <img
          src={setup}
          alt="AirPods Max setup"
          className="w-full lg:ml-[40px] lg:w-[1059px]"
        />
        <div className="mt-6 lg:mt-[190px] lg:w-[250px] lg:pl-6">
          <p className="text-[15px] font-semibold lg:text-[17px]">
            One-tap setup
          </p>
          <p className={`mt-2 ${small}`}>
            AirPods Max connect immediately to your iPhone or iPad. To pair,
            simply place AirPods Max near your device and tap Connect on your
            screen.2
          </p>
        </div>
      </div>

      <div className="mx-auto mt-[80px] max-w-[980px] px-5 lg:mt-[300px]">
        <h2 className="text-center text-[30px] font-semibold leading-[1.15] sm:text-[44px] lg:text-[56px]">
          More magic to play with.
        </h2>
        <div className="mx-auto mt-10 grid max-w-[900px] gap-8 sm:grid-cols-3 lg:mt-[60px] lg:gap-[70px]">
          <div>
            <p className="text-[15px] font-semibold lg:text-[17px]">
              On-head detection
            </p>
            <p className={`mt-2 ${small}`}>
              AirPods Max pause audio when you take them off, and resume
              playback when you put them back on. So you never miss a beat.
            </p>
          </div>
          <div>
            <p className="text-[15px] font-semibold lg:text-[17px]">
              Announce Notifications
            </p>
            <p className={`mt-2 ${small}`}>
              With Announce Notifications, Siri can automatically read important
              notifications from Messages, Phone, Calendar, Reminders, and more
              as they arrive.4 You can even tell Siri to respond — no hands
              required.
            </p>
          </div>
          <div>
            <p className="text-[15px] font-semibold lg:text-[17px]">
              Always-on Siri
            </p>
            <p className={`mt-2 ${small}`}>
              Get directions, check the weather, schedule a meeting, and more
              with a simple “Hey Siri.” With an expansive set of commands, your
              favorite personal assistant is more helpful than ever.4
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MaxMagic;
