const useGenres = (selectedGenres) => {
  if (selectedGenres.lenght < 1) return "";

  const GenreIds = selectedGenres.map((g) => g.id);
  return GenreIds.reduce((acc, curr) => acc + "," + curr, "");
};

export default useGenres;
