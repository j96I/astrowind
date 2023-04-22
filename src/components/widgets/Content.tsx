export interface OwnProps {
  header: string;
  content?: JSX.Element;
}
  
export default function Content({header, content} : OwnProps) {
  return(
    <section className="flex justify-center px-4 sm:px-20 mx-auto max-w-3xl my-3">
      <div className="grid gap-6 bg-black/[0.5] rounded-lg">
        <div className="py-4 md:pr-16 mb-4 ml-8 md:mb-0">
          <h2 className="mb-5 text-xl lg:text-l font-bold font-heading text-white">{header}</h2>
          <div className="w-[19rem] sm:w-full h-px dark:bg-slate-400 bg-slate-400 -translate-y-4"></div>
          {content}
        </div>
      </div>
    </section>
  )
}