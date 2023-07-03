export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      //   "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDEyM2Y3YTJkMWY0Nzg2NGM2N2VkN2ZhZmE5NGE3YyIsInN1YiI6IjY0OWM4NjExODI4OWEwMDBjNTgxNDkxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Cl1CZXveMHgVC7KTEIQSnQT_zQPGTAbg1c0nJvu-EdU",
      `Bearer ${process.env.REACT_APP_API_KEY}`,
  },
};
