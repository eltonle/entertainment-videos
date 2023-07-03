import React from "react";
import Pagination from "@mui/material/Pagination";

const CustomPagination = ({ setPage, numberOfPages = 10 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <Pagination
        color="secondary"
        count={numberOfPages}
        onChange={(e) => {
          handlePageChange(e.target.textContent);
        }}
      />
    </div>
  );
};

export default CustomPagination;
