import { HeartOutlined } from "@ant-design/icons";

function Card({ title, image, type, year, onClick }) {
  return (
    <div
      className="relative bg-gray-900 text-white rounded-lg shadow-md overflow-hidden
                 w-full sm:w-[14rem] md:w-[16rem] lg:w-[17rem]
                 h-[400px] sm:h-[450px] md:h-[500px]
                 hover:shadow-xl transition-shadow duration-300 flex flex-col"
    >
      {/* Heart icon */}
      <div className="bg-gray-800 flex justify-end items-center p-2">
        <HeartOutlined className="text-red-400 text-xl cursor-pointer hover:text-red-500 transition" />
      </div>

      {/* Image */}
      <div onClick={onClick} className="flex-1 cursor-pointer overflow-hidden flex justify-center items-center">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4 bg-gray-800 text-start">
        <h2 className="text-base sm:text-lg md:text-xl font-semibold truncate">{title}</h2>
        <p className="text-gray-300 text-sm sm:text-base">Year: {year}</p>
        <p className="text-gray-300 text-sm capitalize sm:text-base">Type: {type}</p>
      </div>
    </div>
  );
}

export default Card;
