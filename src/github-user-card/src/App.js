import React from 'react';
import axios from 'axios';

import User from './components/User';
import Followers from './components/Followers';
import './App.css';

class App extends React.Component {
  state = {
    user: [],
    followers: []
  };

  componentDidMount() {
    axios.get('https://api.github.com/users/codenamerockey').then(res => {
      this.setState({ user: res.data });
    });
  }

  componentDidUpdate(prevState) {
    // Typical usage (don't forget to compare props):
    if (this.state.followers === prevState.followers) {
      axios
        .get('https://api.github.com/users/codenamerockey/followers')
        .then(res => {
          this.setState({ followers: res.data });
        });
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.doggos !== prevState.doggos) {
  //     if (this.state.doggoText === 'chihuahua') {
  //       fetch('https://dog.ceo/api/breed/husky/images')
  //         .then(res => res.json())
  //         .then(res => this.setState({ doggos: res.message }))
  //         .catch(err => console.log('noooo'));
  //     }
  //   }
  // }
  render() {
    return (
      <div className="App">
        <User githubUser={this.state.user} />
        <Followers githubFollowers={this.state.followers} />
      </div>
    );
  }
}

export default App;
