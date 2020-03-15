import React from "react";
import Header from "./components/header";
import Headline from "./components/headline";
import SharedButton from "./components/button";
import ListItem from "./components/listItem";
import { connect } from "react-redux";
import { fetchPosts } from "./actions";

import "./app.scss";

const tempArr = [
  {
    fName: "Joe",
    lName: "Bloggs",
    email: "joebloggs@gmail.com",
    age: 24,
    onlineStatus: true
  }
];

function App({ fetchPosts, posts }) {
  const fetch = () => {
    fetchPosts();
  };

  const configuration = {
    buttonText: "Get posts",
    emitEvent: fetch
  };

  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline
          header="Posts"
          desc="Click the button to render Posts!"
          tempArr={tempArr}
        />
        <SharedButton {...configuration} />
        {posts.length > 0 && (
          <div>
            {posts.map((post, index) => (
              <ListItem key={index} desc={post.body} title={post.title} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(App);
