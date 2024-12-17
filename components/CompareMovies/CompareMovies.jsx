"use client";
import React, { useState } from "react";
import Image from "next/image";
import MovieSearchModal from "./MovieSearchModal";

function CompareMovies() {
  // Initialize with one movie slot
  const [movieSlots, setMovieSlots] = useState([
    { id: Date.now() }, // Initial slot with unique ID
  ]);

  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle adding a movie slot
  const addMovieSlot = () => {
    setMovieSlots([
      ...movieSlots,
      {
        id: Date.now(), // Unique ID for each movie slot
      },
    ]);
  };

  // Function to handle removing a movie slot
  const removeMovieSlot = (id) => {
    setMovieSlots(movieSlots.filter((slot) => slot.id !== id));
  };

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Pass modal visibility state and close handler to MovieSearchModal */}
      <MovieSearchModal isOpen={isModalOpen} onClose={closeModal} />
      
      <main className="container mx-auto px-4 pt-24 pb-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Compare Movies</h1>
          <button
            onClick={addMovieSlot}
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors"
          >
            Add Movie +
          </button>
        </div>

        {/* Movie Comparison Container */}
        <div className="grid gap-6 md:grid-cols-2">
          {movieSlots.map((slot) => (
            <div
              key={slot.id}
              className="bg-zinc-900 rounded-lg p-4 flex flex-col min-h-[400px]"
            >
              <div className="flex justify-end mb-4">
                {/* Only show remove button if more than one slot exists */}
                {movieSlots.length > 1 && (
                  <button
                    onClick={() => removeMovieSlot(slot.id)}
                    className="text-gray-400 hover:text-white"
                  >
                    ✕
                  </button>
                )}
              </div>
              <div className="flex-grow flex flex-col items-center justify-center">
                <button
                  onClick={openModal} // Open modal when clicked
                  className="bg-zinc-800 text-white px-6 py-3 rounded hover:bg-zinc-700 transition-colors cursor-pointer"
                >
                  Select Movie
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default CompareMovies;
