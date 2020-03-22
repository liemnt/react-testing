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

const initialState = {
  hideBtn: false
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }
  static defaultProps = {};

  static propTypes = {};

  exampleMethod_updatedState = () => {
    const { hideBtn } = this.state;
    this.setState({
      hideBtn: !hideBtn
    });
  };

  exampleMethod_returnsAValue = number => {
    return number;
  };

  fetch = () => {
    this.props.fetchPosts();
    this.exampleMethod_updatedState();
  };

  configuration = {
    buttonText: "Get posts",
    emitEvent: this.fetch
  };

  render() {
    const { hideBtn } = this.state;
    const { posts } = this.props;
    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render Posts!"
            tempArr={tempArr}
          />
          {!hideBtn && <SharedButton {...this.configuration} />}
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
}

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(App);
