type Item = {
  title?: string;
  description: string;
}

type OwnProps = {
  items: Item[];
}

export default function TextDisplay({items} : OwnProps): JSX.Element {

  return(
    <div>
    {
      items &&
        items.length &&
        items.map(({ title, description }) => (
          <>
            <p className="text-l font-bold dark:text-slate-300 text-slate-300 mt-2"> {title}</p>
            <div className="w-[19rem] sm:w-full pl-5 space-y-2 text-xs mt-1 content-center items-center">
              <div className="flex flex-col">{description}</div>
            </div>
          </>
        ))
    }
  </div>
  )
}