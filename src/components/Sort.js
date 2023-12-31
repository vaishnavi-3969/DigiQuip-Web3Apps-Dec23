import down from '../assets/angle-down-solid.svg';

const Sort = () => {
  return (
    <div className="sort bg-gradient-to-r from-[#12e0b7] via-[#a6c0fe] to-[#fbcfe8] p-6 rounded-md shadow-md">
      <div className="sort__select">
        <p className="text-lg font-semibold text-gray-800">Select Category</p>
        <img src={down} alt="Dropdown" className="ml-2 h-4 w-4" />
      </div>

      <div className="sort__select mt-4">
        <p className="text-lg font-semibold text-gray-800">Select Your Dates</p>
        <img src={down} alt="Dropdown" className="ml-2 h-4 w-4" />
      </div>

      <div className="sort__select mt-4">
        <p className="text-lg font-semibold text-gray-800">Select Your Distance</p>
        <img src={down} alt="Dropdown" className="ml-2 h-4 w-4" />
      </div>
    </div>
  );
};

export default Sort;
