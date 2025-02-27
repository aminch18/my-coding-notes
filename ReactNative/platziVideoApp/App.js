/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Text } from 'react-native';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import API from './src/api';
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestionList: []
  }
  async componentDidMount() {
    const movies = await API.getSuggestion(10);
    this.setState({
      suggestionList: movies
    })
  }

  render() {
    return (
      <Home>
        <Header>
        </Header>
        <Text>Buscador</Text>
        <Text>Categorias</Text>
        <Text>Sugerencias</Text>
        <SuggestionList 
          list={this.state.suggestionList}/>
      </Home>      
    );
  }
}