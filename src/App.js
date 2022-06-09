import { useState, useEffect } from "react";
import "./styles/index.scss";
import axios from "axios";
import Container from "./Components/Container";

import PostsList from "./Components/PostsList";
import Loading from "./Components/Loading";

import Header from "./Components/Header";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const refresh = () => {
    setLoading(true);
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setLoading(false);
      setPosts(res.data);
    });
  };
  // Get posts
  useEffect(() => {
    refresh();
  }, []);

  return (
    <div className="App">
      <Container style={{ marginTop: "10vh", marginBottom: "10vh" }}>
        <Header refresh={refresh} />
        <Loading loading={loading}>
          <PostsList posts={posts} />
        </Loading>
      </Container>
    </div>
  );
}

export default App;
