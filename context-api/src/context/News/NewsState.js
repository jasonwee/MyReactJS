import React, { useReducer } from "react";
import axios from "axios";

import NewsContext from "./NewsContext";
import NewsReducer from "./NewsReducer";
import { GET_NEWS, GET_DESCRIPTION } from "../types";

const NewsState = (props) => {
  let initialState = {
    news: [],
    activeNews: null,
  };

  const [state, dispatch] = useReducer(NewsReducer, initialState);

  const getNews = async () => {
    try {
      let res = await axios.get("https://node-hnapi.herokuapp.com/news");
      let { data } = res;

      dispatch({ type: GET_NEWS, payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  const getDescription = async (id) => {
    try {
      let res = await axios.get(`https://node-hnapi.herokuapp.com/item/${id}`);
      let { data } = res;

      dispatch({ type: GET_DESCRIPTION, payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <NewsContext.Provider
      value={{
        news: state.news,
        activeNews: state.activeNews,
        getNews,
        getDescription,
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsState;
