import CompareSection from "../CompareSection/CompareSection";

function Rows({ rows }) {
  return (
    <div className="grid grid-cols-3 gap-x-[30px] gap-y-[23px]">
      {rows.flat().map((t, i) => (
        <p key={i} className="whitespace-pre-line text-[15px] leading-[22px]">
          {t}
        </p>
      ))}
    </div>
  );
}

const audio = [
  ["–", "–", "Active Noise Cancellation"],
  ["–", "–", "Adaptive Transparency"],
  ["–", "Adaptive EQ", "Adaptive EQ"],
  [
    "–",
    "Custom high-excursion Apple driver",
    "Custom high-excursion Apple driver",
  ],
  [
    "–",
    "Custom high dynamic range amplifier",
    "Custom high dynamic range amplifier",
  ],
  [
    "–",
    "Personalized Spatial Audio with dynamic head tracking¹",
    "Personalized Spatial Audio with dynamic head tracking¹",
  ],
  ["–", "–", "Vent system for pressure equalization"],
];

const sensors = [
  ["Dual optical sensors", "Skin-detect sensor", "Skin-detect sensor"],
  [
    "Motion-detecting accelerometer",
    "Motion-detecting accelerometer",
    "Motion-detecting accelerometer",
  ],
  [
    "Speech-detecting accelerometer",
    "Speech-detecting accelerometer",
    "Speech-detecting accelerometer",
  ],
  ["Double-tap", "Force sensor", "Touch control"],
];

const mics = [
  [
    "Dual beamforming microphones",
    "Dual beamforming microphones",
    "Dual beamforming microphones",
  ],
  ["", "Inward-facing microphone", "Inward-facing microphone"],
];

const chip = [
  ["H1 headphone chip", "H1 headphone chip", "H2 headphone chip"],
  ["–", "–", "Apple U1 chip in MagSafe Charging Case"],
];

const inBox = [
  [
    "AirPods (2nd generation)",
    "AirPods (3rd generation)",
    "AirPods Pro (2nd generation)",
  ],
  [
    "Lightning Charging Case",
    "Lightning Charging Case",
    "MagSafe Charging Case with speaker and lanyard loop",
  ],
  [
    "Lightning to USB-A Cable",
    "Lightning to USB-C Cable",
    "Lightning to USB-C Cable",
  ],
  ["Documentation", "Documentation", "Documentation"],
  ["–", "–", "Silicone ear tips (four sizes: XS, S, M, L)"],
];

const access = [
  ["Live Listen audio⁶", "Live Listen audio⁶", "Live Listen audio⁶"],
  ["Headphone levels", "Headphone levels", "Headphone levels"],
  [
    "Headphone Accommodations",
    "Headphone Accommodations",
    "Headphone Accommodations",
  ],
  ["–", "–", "Conversation Boost"],
];

const sysReq = [
  "iPhone and iPod touch models with the latest version of iOS",
  "iPad models with the latest version of iPadOS",
  "Apple Watch models with the latest version of watchOS",
  "Mac models with the latest version of macOS",
  "Apple TV models with the latest version of tvOS",
].map((t) => [t, t, t]);

// Controls: green dot icons
const green = "bg-[#8ad200]";
function Dots({ n }) {
  return (
    <span className="flex w-[34px] shrink-0 gap-[3px] pt-[5px]">
      {Array.from({ length: n }).map((_, i) => (
        <span key={i} className={`h-[9px] w-[9px] rounded-full ${green}`} />
      ))}
    </span>
  );
}
const Pill = () => (
  <span
    className={`mt-[7px] h-[8px] w-[34px] shrink-0 rounded-full ${green}`}
  />
);
const Mic = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[22px] w-[34px] shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <rect x="9" y="2" width="6" height="12" rx="3" />
    <path d="M5 11a7 7 0 0 0 14 0M12 18v4" />
  </svg>
);
const Swipe = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[22px] w-[34px] shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M12 3v6M9 6l3-3 3 3M12 21v-6M9 18l3 3 3-3" />
  </svg>
);

function Control({ icon, text }) {
  return (
    <div className="flex items-start gap-4">
      {icon}
      <p className="text-[15px] leading-[22px]">{text}</p>
    </div>
  );
}

const HEY_SIRI =
  "Say “Hey Siri” to do things like play a song, make a call, or get directions";

function Dims({ title, h, w, d, wt }) {
  return (
    <div className="text-[15px] leading-[25px]">
      <p className="mb-3 text-[17px] font-semibold leading-snug">{title}</p>
      <p className="font-semibold">Height:</p>
      <p>{h}</p>
      <p className="font-semibold">Width:</p>
      <p>{w}</p>
      <p className="font-semibold">Depth:</p>
      <p>{d}</p>
      <p className="font-semibold">Weight:</p>
      <p>{wt}</p>
    </div>
  );
}

function Block({ title, lines }) {
  return (
    <div>
      <p className="mb-4 text-[17px] font-semibold leading-snug">{title}</p>
      <div className="space-y-5">
        {lines.map((l) => (
          <p key={l} className="text-[15px] leading-[22px]">
            {l}
          </p>
        ))}
      </div>
    </div>
  );
}

function CompareSpecs() {
  return (
    <>
      <CompareSection title="Audio Technology">
        <Rows rows={audio} />
      </CompareSection>
      <CompareSection title="Sensors">
        <Rows rows={sensors} />
      </CompareSection>
      <CompareSection title="Microphones">
        <Rows rows={mics} />
      </CompareSection>
      <CompareSection title="Chip">
        <Rows rows={chip} />
      </CompareSection>

      <CompareSection title="Controls">
        <div className="grid grid-cols-3 gap-x-[30px] [&>div]:space-y-5 [&>div:not(:first-child)]:border-l [&>div:not(:first-child)]:border-[#d2d2d7] [&>div:not(:first-child)]:pl-[30px] [&>div]:pb-[60px]">
          <div>
            <Control
              icon={<Dots n={2} />}
              text="Double-tap to play, skip forward, or answer a phone call"
            />
            <Control icon={<Mic />} text={HEY_SIRI} />
          </div>
          <div>
            <Control
              icon={<Dots n={1} />}
              text="Press once to play, pause, or answer a phone call"
            />
            <Control icon={<Dots n={2} />} text="Press twice to skip forward" />
            <Control
              icon={<Dots n={3} />}
              text="Press three times to skip back"
            />
            <Control icon={<Pill />} text="Press and hold for Siri" />
            <Control icon={<Mic />} text={HEY_SIRI} />
          </div>
          <div>
            <Control
              icon={<Dots n={1} />}
              text="Press once to play, pause, or answer a phone call"
            />
            <Control icon={<Dots n={2} />} text="Press twice to skip forward" />
            <Control
              icon={<Dots n={3} />}
              text="Press three times to skip back"
            />
            <Control
              icon={<Pill />}
              text="Press and hold to switch between Active Noise Cancellation and Adaptive Transparency"
            />
            <Control
              icon={<Swipe />}
              text="Swipe up or down to adjust volume"
            />
            <Control icon={<Mic />} text={HEY_SIRI} />
          </div>
        </div>
      </CompareSection>

      <CompareSection title="Size and Weight" sup="5">
        <div className="grid grid-cols-3 gap-x-[30px] gap-y-10">
          <Dims
            title="AirPods (2nd generation)"
            h="1.59 inches (40.5 mm)"
            w="0.65 inch (16.5 mm)"
            d="0.71 inch (18.0 mm)"
            wt="0.14 ounce (4 grams)"
          />
          <Dims
            title="AirPods (3rd generation)"
            h="1.21 inches (30.79 mm)"
            w="0.72 inch (18.26 mm)"
            d="0.76 inch (19.21 mm)"
            wt="0.15 ounce (4.28 grams)"
          />
          <Dims
            title="AirPods Pro (2nd generation)"
            h="1.22 inches (30.9 mm)"
            w="0.86 inch (21.8 mm)"
            d="0.94 inch (24.0 mm)"
            wt="0.19 ounce (5.3 grams)"
          />
          <Dims
            title="Lightning Charging Case"
            h="2.11 inches (53.5 mm)"
            w="1.74 inches (44.3 mm)"
            d="0.84 inch (21.3 mm)"
            wt="1.35 ounces (38.2 grams)"
          />
          <Dims
            title="Lightning Charging Case"
            h="1.83 inches (46.40 mm)"
            w="2.14 inches (54.40 mm)"
            d="0.84 inch (21.38 mm)"
            wt="1.34 ounces (37.91 grams)"
          />
          <Dims
            title="MagSafe Charging Case"
            h="1.78 inches (45.2 mm)"
            w="2.39 inches (60.6 mm)"
            d="0.85 inch (21.7 mm)"
            wt="1.79 ounces (50.8 grams)"
          />
        </div>
      </CompareSection>

      <CompareSection title="Battery" sup="3">
        <div className="grid grid-cols-3 gap-x-[30px] gap-y-10">
          <Block
            title="AirPods (2nd generation)"
            lines={[
              "Up to 5 hours of listening time with a single charge",
              "Up to 3 hours of talk time with a single charge",
            ]}
          />
          <Block
            title="AirPods (3rd generation)"
            lines={[
              "Up to 6 hours of listening time with a single charge (up to 5 hours with Spatial Audio enabled)",
              "Up to 4 hours of talk time with a single charge",
            ]}
          />
          <Block
            title="AirPods Pro (2nd generation)"
            lines={[
              "Up to 6 hours of listening time with a single charge (up to 5.5 hours with Spatial Audio and Head Tracking enabled)",
              "Up to 4.5 hours of talk time with a single charge",
            ]}
          />
          <Block
            title="AirPods (2nd generation) with Lightning Charging Case"
            lines={[
              "More than 24 hours of listening time",
              "Up to 18 hours of talk time",
              "15 minutes in the case provides up to 3 hours listening time or up to 2 hours talk time",
            ]}
          />
          <Block
            title="AirPods (3rd generation) with Lightning Charging Case"
            lines={[
              "Up to 30 hours of listening time",
              "Up to 20 hours of talk time",
              "5 minutes in the case provides around 1 hour of listening time or around 1 hour of talk time",
            ]}
          />
          <Block
            title="AirPods Pro (2nd generation) with MagSafe Charging Case"
            lines={[
              "Up to 30 hours of listening time",
              "Up to 24 hours of talk time",
              "5 minutes in the case provides around 1 hour of listening time or around 1 hour of talk time",
            ]}
          />
        </div>
      </CompareSection>

      <CompareSection title="Sweat and Water Resistance" sup="2">
        <Rows
          rows={[
            [
              "–",
              "Sweat and water resistant (IPX4): AirPods and charging case",
              "Sweat and water resistant (IPX4): AirPods Pro and charging case",
            ],
          ]}
        />
      </CompareSection>

      <CompareSection title="Connectivity">
        <Rows rows={[["Bluetooth 5.0", "Bluetooth 5.0", "Bluetooth 5.3"]]} />
      </CompareSection>

      <CompareSection title="In the Box">
        <Rows rows={inBox} />
      </CompareSection>
      <CompareSection title="Accessibility">
        <Rows rows={access} />
      </CompareSection>
      <CompareSection title="System Requirements" sup="7">
        <Rows rows={sysReq} />
      </CompareSection>
    </>
  );
}

export default CompareSpecs;
