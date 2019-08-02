import React, { Component } from "react";
import { render } from "react-dom";

// Import components
import Header from './components/header/index';
import Card from './components/card/';

// import style
import './styles/geral.css'

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'Diego Fernandes',
        avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
        time: 'há 3 min',
        body:
          'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis',
      },
      {
        id: 2,
        name: 'Rocketseat',
        avatar: 'https://avatars2.githubusercontent.com/u/5257225?s=460&v=4',
        time: 'há 30 min',
        body:
          'Pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum.',
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <div>
        <Header />
        {posts && posts.map(post => <Card key={post.id} data={post} />)}
      </div>
    )
  }
}

render(<App />, document.querySelector("#app"));
