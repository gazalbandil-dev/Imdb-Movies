import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from 'react-redux';
import { addMovieToWishlist } from '../redux/wishlistSlice';
import Noimage from '../assests/Noimage.jpg'
import { Tooltip } from 'antd';

function Card({ id, title, image, type, year, onClick }) {

  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);

  const isWishlisted = wishlist.some((item) => item.id === id);

  const handleClick = () => {
    dispatch(addMovieToWishlist({ id, title, image, type, year }));
  };

  return (
    <div
      className="relativetext-white rounded-xl overflow-hidden
                 w-[9rem] sm:w-[11rem] md:w-[13rem] lg:w-[15rem]
                 h-[240px] sm:h-[300px] md:h-[350px] lg:h-[400px]
                 hover:shadow-xl transition-shadow duration-300 flex flex-col
                 bg-white/10 backdrop-blur-md border border-white/20"
    >
      <div
        onClick={onClick}
        className="flex-1 cursor-pointer overflow-hidden relative flex justify-center items-center"
      >
        <img
          src={image || Noimage}
          alt={title}
          className="w-full p-3 h-full transition-transform duration-300 hover:scale-105 rounded-lg"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = Noimage;
          }}
        />

        <div
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
          className="absolute m-3 top-2 right-2 flex justify-end items-center p-1 bg-white/20 backdrop-blur-sm rounded-full"
        >
          {isWishlisted ? (
            <HeartFilled className="text-red-500 text-lg hover:text-red-400" />
          ) : (
            <HeartOutlined className="text-red-500 text-lg cursor-pointer hover:text-red-700 transition" />
          )}
        </div>
      </div>

      <div className="p-2 sm:p-3 md:p-4 bg-black/20 font-inter text-start space-y-2 rounded-b-lg">
        <Tooltip title={title} placement="top" color="dark">
          <h2 className="text-white text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold truncate cursor-pointer">{title}</h2>
        </Tooltip>
        <div className="flex justify-between">
        <p className="text-white text-[8px] font-light sm:text-[10px] md:text-xs lg:text-sm truncate cursor-pointer">{year}</p>
        <p className="text-white text-[8px] font-light sm:text-[10px] md:text-xs lg:text-sm cursor-pointer capitalize">🎬 {type}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
