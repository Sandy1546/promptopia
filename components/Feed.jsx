"use client";

import { useState, useEffect } from "react";

import PromptCardList from "./PromptCardList";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  //Search states
  const [searchText, setSearchText] = useState("");
  const [searchedResults, setSearchedResults] = useState([]);
  const [searchTimeout, setSearchTimeout] = useState(null);

  const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    // console.log(response);
    const data = await response.json();
    // console.log(data);

    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    // const a = posts.filter((item) => {
    // console.log(item);
    // regex.test(item.creator.userName) ||
    // regex.test(item.tag);
    // regex.test(item.prompt);
    // });
    // console.log(e);

    return posts.filter((item) => {
      // console.log(item);
      regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt);
    });
  };

  const handleSearchChange = (e) => {
    console.log(e);
    // clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    // setSearchTimeout(
    // setTimeout(() => {
    const searchResult = filterPrompts(e.target.value);
    setSearchedResults(searchResult);
    // }, 500)
    // );

    // const searchResult = filterPrompts(e.target.value);
    // // console.log(searchResult);
    // setSearchedResults(searchResult);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex_center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      {/* All prompts */}
      {searchText ? (
        <PromptCardList data={searchedResults} handleTagClick={() => {}} />
      ) : (
        <PromptCardList data={posts} handleTagClick={() => {}} />
      )}
    </section>
  );
};
export default Feed;
