const Header = () => {
  return (
    <header className="relative flex flex-row w-full bg-white z-50 transition-all duration-200 ease-linear rounded-xl">
      <h1 id="category" className="text-[2.8rem] opacity-70 font-normal pointer-events-none relative">Latest Posts</h1>

      <div className="ml-auto my-auto flex flex-row items-center mr-[1rem]">
        <div className="mr-8 py-[2px] px-[22px] border-[1px] border-gray-700 rounded-lg text-base
                        cursor-pointer hover:font-medium hover:scale-[101%]">
          <p className="pointer-events-none">Post</p>
        </div>

        <div id="profile-picture" className="w-10 h-10 bg-gray-600 text-white
                        cursor-pointer rounded-full flex hover:scale-[1.05]">
          <p className="m-auto font-medium pointer-events-none">T</p>
        </div>

        <div id="profile-hover" className="absolute right-[5rem] top-1/2 -translate-y-1/2 bg-gray-700
                        transition-all duration-[80ms] ease-linear opacity-0 pointer-events-none
                      text-white py-1 px-3 rounded-lg after:bg-gray-700 after:content-['']
                        after:block after:w-2 after:h-2 after:absolute after:right-0
                        after:translate-x-1/2 after:top-1/2 after:-translate-y-1/2 after:rotate-45">
          <p>TerThesz</p>
        </div>
      </div>
    </header>
  );
}

export default Header;