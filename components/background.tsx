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

// TODO fix console error

export default function PixelBackground() {
  return (
    <>
      <div className="absolute w-full top-0 z-[-2] flex flex-wrap">
        {[...Array(80)].map((e, i) => (
          <div
            key={i}
            className={`w-[5%] dark:bg-[white] bg-[black] pt-[5%] ${opacityValues[Math.floor(Math.random() * opacityValues.length)]}`}
          ></div>
        ))}
      </div>
      <div className="absolute w-full top-0 z-[-1] flex flex-wrap pt-[20%] background-gradient"></div>
    </>
  );
}
