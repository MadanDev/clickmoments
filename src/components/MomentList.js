import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import MomentDetail from './MomentDetail';

class MomentList extends Component {
  state = { moments: [] };
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ moments: response.data }));
  }
  renderMoments() {
    return this.state.moments.map(moment =>
      <MomentDetail key={moment.title} moment={moment} />
    );
  }
  render() {
    return (
      <ScrollView horizontal>
        {this.renderMoments()}
      </ScrollView>
    );
  }
}

export default MomentList;
