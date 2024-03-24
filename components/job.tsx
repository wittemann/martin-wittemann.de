export default function Job({ data }) {
  return (
    <>
      <p className={'font-extrabold pt-4'}>
        {data.title}{' '}
        <span className="font-thin text-sm italic">@ {data.company}</span>
      </p>
      <sup>{data.date}</sup>
      <p>{data.description}</p>
      <ul className="list-disc list-inside mt-2 text-sm">
        {data.details.map((detail: string, index: number) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <ul className="mt-2 flex flex-wrap">
        {data.tags.map((tag: string, index: number) => (
          <li
            key={index}
            className="mr-1.5 mt-2 flex items-center rounded-full bg-primary/20 px-3 py-1 text-xs leading-5"
          >
            {tag}
          </li>
        ))}
      </ul>
    </>
  );
}
