const opacityValues = [
  'opacity-[0.01]',
  'opacity-[0.02]',
  'opacity-[0.03]',
  'opacity-[0.04]',
  'opacity-[0.05]',
  'opacity-[0.06]',
  'opacity-[0.07]',
  'opacity-[0.08]',
  'opacity-[0.09]',
  'opacity-[0.10]',
];

// The pages are statically generated, so the pattern was always fixed per
// build anyway. A seeded generator makes server and client agree, so the
// render stays pure and there is no hydration mismatch.
function seededRandom(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const random = seededRandom(20240330);
const pixelOpacities = Array.from(
  { length: 80 },
  () => opacityValues[Math.floor(random() * opacityValues.length)],
);

export default function PixelBackground() {
  return (
    <>
      <div className="absolute w-full top-0 z-[-2] flex flex-wrap">
        {pixelOpacities.map((opacity, i) => (
          <div
            key={i}
            className={`w-[5%] dark:bg-[white] bg-[black] pt-[5%] ${opacity}`}
          ></div>
        ))}
      </div>
      <div className="absolute w-full top-0 z-[-1] flex flex-wrap pt-[20%] background-gradient"></div>
    </>
  );
}
