import React, { useState } from "react";
import { Gif } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";

const giphyFetch = new GiphyFetch(process.env.REACT_APP_GIPHY_API);

export default function GifM({ gifId }) {
  const [gif, setGif] = useState(null);
  const gifLoad = async () => {
    const { data } = await giphyFetch.gif(gifId);
    setGif(data);
  };
  gifLoad();
  return gif && <Gif gif={gif} width={200} />;
}
