import Spinner from "./spinner";

const Loader = ({ className }) => {
  return (
    <div className="fixed inset-0 z-50 bg-opacity-50 bg-gray-500 flex justify-center items-center">
      <div className="relative w-[50px] h-[50px] flex items-center justify-center rounded-full">
        <div className="bg-white w-full h-full rounded-full flex items-center justify-center">
          {/* <Spinner /> */}
        </div>

        <div className="absolute w-full h-full border-[8px] border-transparent border-t-[#964B00] rounded-full animate-spin" />
      </div>
    </div>
  );
};

export default Loader;
