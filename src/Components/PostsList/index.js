import React from "react";
import Post from "../Post";
import AnimatedList from '../AnimatedList'

const PostsList = ({ posts = [] }) => {
  return <AnimatedList list={posts} Element={Post}/>;
};

export default PostsList;
