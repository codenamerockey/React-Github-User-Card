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
        <h4>Followers</h4>
        <Followers />
      </div>
    );
  }
}

export default App;
