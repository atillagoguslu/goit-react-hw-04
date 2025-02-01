import "./App.css";
import Header from "./components/Header/Header.jsx";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import getImages from "./components/fetchers/getimages.js";
import searchImages from "./components/fetchers/searchimages.js";
import AnImageCard from "./components/gallery/AnImageCard.jsx";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const perPage = 10;

  // Component Section
  const Gallery = ({ toGallery }) => {
    return (
      <ul className="galleryUL">
        {toGallery.map((image) => (
          <li key={image.id}>
            <AnImageCard image={image} />
          </li>
        ))}
      </ul>
    );
  };

  useEffect(() => {
    const fetchRandomImages = async () => {
      try {
        setIsLoading(true);
        const resimler = await getImages();
        setImages(resimler);
        setHasMore(resimler.length === perPage);
      } catch (error) {
        setIsError(true);
        console.error("Error fetching random images:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRandomImages();
  }, []);

  const fetchSearchedImages = async (searchTerm, page = 1, perPage) => {
    try {
      setIsLoading(true);
      setSearchTerm(searchTerm);
      setCurrentPage(1);
      const resimler = await searchImages(searchTerm, page, perPage);
      setImages(resimler);
      setHasMore(resimler.length === perPage);
    } catch (error) {
      setIsError(true);
      console.error("Error fetching searched images:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchMoreImages = async () => {
    if (!hasMore || isLoading) return;

    try {
      setIsLoadingMore(true);
      const nextPage = currentPage + 1;
      const moreImages = await searchImages(searchTerm, nextPage, perPage);

      if (moreImages.length === 0) {
        setHasMore(false);
        return;
      }

      setImages((prevImages) => [...prevImages, ...moreImages]);
      setCurrentPage(nextPage);
      setHasMore(moreImages.length === perPage);
    } catch (error) {
      setIsError(true);
      console.error("Error fetching more images:", error);
    } finally {
      setIsLoadingMore(false);
    }
  };

  return (
    <>
      <Toaster />
      <Header fetchSearchedImages={fetchSearchedImages} />

      {isError ? (
        <p className="error-message">Error fetching images</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : images.length === 0 ? (
        <p className="no-images-found">No images found</p>
      ) : (
        <div>
          <Gallery toGallery={images} />
          {hasMore && (
            <button
              onClick={fetchMoreImages}
              disabled={isLoadingMore}
              style={{
                display: "block",
                margin: "20px auto",
                padding: "10px 20px",
                backgroundColor: "#3498db",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: isLoadingMore ? "not-allowed" : "pointer",
              }}
            >
              {isLoadingMore ? "Loading..." : "Load More"}
            </button>
          )}
        </div>
      )}
    </>
  );
}

export default App;
