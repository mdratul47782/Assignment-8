import React from 'react'

function Cast() {
  return (
    <div className="mb-6">
    <h3 className="text-gray-400 mb-2">Cast</h3>
    <div className="flex flex-wrap gap-4">
      <div className="text-center">
        <img src="https://image.tmdb.org/t/p/original/6OLe7TskbEvYpo36eITfX91VoCP.jpg" alt="Naomi Scott"
          className="w-24 h-24 rounded-full object-cover mb-2" />
        <p className="text-sm">Naomi Scott</p>
      </div>

      <div className="text-center">
        <img src="https://image.tmdb.org/t/p/original/44sxIdGtYN24R14OmnZbCpcd8J8.jpg" alt="Rosemarie DeWitt"
          className="w-24 h-24 rounded-full object-cover mb-2" />
        <p className="text-sm">Rosemarie DeWitt</p>
      </div>

      <div className="text-center">
        <img src="https://image.tmdb.org/t/p/original/j7Zub5J9PgCnsfgEC5QCr160JtH.jpg" alt="Lukas Gage"
          className="w-24 h-24 rounded-full object-cover mb-2" />
        <p className="text-sm">Lukas Gage</p>
      </div>
    </div>
  </div>
  )
}

export default Cast