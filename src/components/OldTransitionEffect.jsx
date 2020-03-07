import React, { Component } from 'react';

import { CSSTransition } from "react-transition-group"
import "../style.css"
export class TransitionEffect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: true
    }
  }


  changeVisible = () => {
    const { isShow } = this.state;
    this.setState({
      isShow: !isShow
    })
  }
  render() {
    return (
      <div>
        <CSSTransition in={this.state.isShow} timeout={1000} classNames="my-node">
          <div>Assan</div>
        </CSSTransition>
        <button onClick={this.changeVisible}>切 换</button>
      </div>
    );
  }
}

export default TransitionEffect;
