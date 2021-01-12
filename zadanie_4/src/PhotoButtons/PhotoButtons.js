import React from "react";

export default function PhotoButtons({ photos, setPhotos }) {
  function shuffleArray(photos) {
    let tmpArray = [...photos];
    let shuffledArray = [];

    for (let i = 0; i < photos.length; i++) {
      shuffledArray.push(tmpArray.splice(Math.random() * tmpArray.length, 1)[0]);
    }

    return shuffledArray;
  }

  return (
    <>
      <button
        onClick={() => {
          photos.sort((a, b) => a.title.localeCompare(b.title));
          setPhotos([...photos]);
        }}
      >
        Sort by Title
      </button>

      <button
        onClick={() => {
          photos.sort((a, b) => parseInt(a.date) - parseInt(b.date));
          setPhotos([...photos]);
        }}
      >
        Sort by Date
      </button>

      <button
        onClick={() => {
          setPhotos(shuffleArray(photos));
        }}
      >
        Shuffle all Photos
      </button>
    </>
  );
}
