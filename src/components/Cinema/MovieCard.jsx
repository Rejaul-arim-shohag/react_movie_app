/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { getImgUrl } from "../../utils/cine-utility";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";
import { MovieContext } from "../../context";

export default function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelecetedMovie] = useState(null);
  const { state, dispatch } = useContext(MovieContext);
  const handleAddToCart = (event, movie) => {
    event.stopPropagation();
    const found = state.cartData?.find((item) => item.id === movie.id);
    if (!found) {
      dispatch({
        type: "ADD_TO_CART",
        payLoad: {
          ...movie,
        },
      });
    } else {
      console.error(`The movie ${movie.title} has been added to the cart already`);
    }
  };
  const handleModalClose = () => {
    setSelecetedMovie(null);
    setShowModal(false);
  };
  const handleMovieSelection = (movie) => {
    setSelecetedMovie(movie);
    setShowModal(true);
  };
  return (
    <>
      {showModal && <MovieDetailsModal movie={selectedMovie} onClose={handleModalClose} onCartAdd={handleAddToCart} />}

      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => handleMovieSelection(movie)}>
          <img className="w-full object-cover" src={getImgUrl(movie.cover)} alt="" />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie?.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie?.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddToCart(e, movie)}
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
}
