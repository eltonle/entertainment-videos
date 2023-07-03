import React from "react";
import "./SingleContent.css";
import { img_300, unavailable } from "../../config/config";
import { Badge } from "@mui/icons-material";
import ContentModal from "../ContentModel/ContentModal";

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    // <ContentModal className="media">
    <ContentModal media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "danger" : "primary"}
      />
      {/* <Badge badgeContent={4} color="primary" overlap="circular" /> */}
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </ContentModal>
  );
};

export default SingleContent;
