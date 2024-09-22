const ButtonHover = (props) => {
    return (
      <>
        <button className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-xl border-1 dark:border-[#65e276] border-[#59c95f]  font-medium">
          <div className="inline-flex h-12 translate-y-0 items-center justify-center px-6  bg-gradient-to-r dark:from-[#85c475] dark:to-[#58af72] dark:text-gray-800 transition duration-500 group-hover:-translate-y-[150%]">
            {props.text}
          </div>
          <div className="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-gray-600 transition duration-500 group-hover:translate-y-0">
            <span className="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-[#68ff6f] dark:bg-[#7aff8c] transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
                <span className="z-10">{props.text}</span>
          </div>
        </button>
      </>
    )
  }
  
  export default ButtonHover
  