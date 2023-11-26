import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailerById from "../../hooks/useMovieTrailerById";
import styles from "./videoBackGround.module.css";
import { Box } from "@mui/material";

const VideoBackGround = (props) => {
  const trailerKey = useSelector((store) => store?.movies?.trailerId);
  useMovieTrailerById(props);

  return (
    <>
      <div
        style={{
          overflow: "hidden",
          height: "100vh",
        }}
      >
        <iframe
          className={styles.video}
          src={`https://www.youtube.com/embed/${trailerKey?.key}?si=dsg_THkjcZe1iInJ&autoplay=1&mute=1`}
          title="YouTube video player"
          allow=" autoplay; clipboard-write;web-share"
          allowFullScreen={true}
        ></iframe>
      </div>
    </>
  );
};

export default VideoBackGround;
