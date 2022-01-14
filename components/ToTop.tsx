import { BiArrowToTop } from 'react-icons/bi';

const ToTop = () => {
  return (
    <button id="to-top" className="text-black fixed right-[50px] bottom-[50px] w-[65px] h-[65px]
                                   bg-white rounded-full hover:bg-black hover:text-white
                                    flex items-center justify-center transition-all duration-100 ease-linear">
      <BiArrowToTop size="25px" />
    </button>
  );
}

export default ToTop;