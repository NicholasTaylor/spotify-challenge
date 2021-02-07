import React from 'react';
import logo from './logo.svg';
import './bootstrap-reboot.min.css';
import './App.css';
import {connect} from 'react-redux';
import {update_uniques, init_uniques} from './actions/index';
import {WebFonts} from './components/Fonts';
import Panel from './components/Panel';
import {config} from './constants/config';

function FontFamily(){
  if(config.fontFamily){
    return(
      config.fontFamily
    )
  }
  else{
    return(
      '"Helvetica Neue", Helvetica, Arial, sans-serif'
    )
  }
}

class App extends React.Component {
  componentDidMount(){
    this.props.init_uniques();
  }
  render(){
    return(
      <div
        id="content-container"
      >
      <WebFonts />
        <div 
          id="content"
          style={{fontFamily: FontFamily()}}
        >
          <h1>
            Hey There!
          </h1>
          <p
            className="explainer"
          >
            Enter a passage of text in the blank below and this tool will do its magic! It'll remove the maximum amount of unique characters from your passage without bringing your character count below&nbsp;50.
          </p>
          <textarea
            value={this.props.inputPara}
            onChange={(e)=>this.props.update_uniques(e)}
          >
          </textarea>
          <Panel 
            headline="Your Unique Character&nbsp;Set"
            copyClasses="results display uniqueSet"
            copy={this.props.outputUniques}
          />
          <Panel 
            headline="What's Left of Your&nbsp;Passage"
            copyClasses="results display"
            copy={this.props.outputPara}
          />
          <Panel
            headline="Inspiration"
            copyClasses=""
            copy="This tool came about from a challenge posted in a Spotify job&nbsp;description:" 
            quoteCopy="If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below&nbsp;50."
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    inputPara: state.inputPara,
    outputUniques: state.outputUniques,
    outputPara: state.outputPara
  }
}

export default connect(mapStateToProps,{update_uniques,init_uniques})(App);
