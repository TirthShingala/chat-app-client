import React, { useState } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { Grid } from "@giphy/react-components";
import ResizeObserver from "react-resize-observer";

import "./GifsContainer.css";

const giphyFetch = new GiphyFetch(process.env.REACT_APP_GIPHY_API);

export default function GifsContainer({ gifSearchP, sendGif }) {
  const [width, setWidth] = useState(window.innerWidth);

  const onGifClick = (gif, e) => {
    e.preventDefault();
    sendGif(gif.url);
  };

  const fetchGifs = (offset) =>
    giphyFetch.search(gifSearchP, {
      offset,
      limit: 10,
    });
  return (
    <div className='gifsContainer'>
      <Grid
        onGifClick={onGifClick}
        fetchGifs={fetchGifs}
        width={width}
        columns={3}
        gutter={6}
      />
      <ResizeObserver
        onResize={({ width }) => {
          setWidth(width);
        }}
      />
    </div>
  );
}
