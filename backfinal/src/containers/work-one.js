import React, { Component } from 'react';
import { connect } from 'react-redux';


class WorkOne extends Component {

  renderListOne() {
    return this.props.oneworks.map((work) => {
      return (
        <div
          key={work.title}
          onClick={() => this.props.selectWork(work)}
          className="media ">

          <a href={work.fullimg} className="one">
            <img src={work.img}></img>
          </a>
        </div>
      );
    });
  }
   renderListTwo() {
    return this.props.twoworks.map((work) => {
      return (
        <div
          key={work.title}
          onClick={() => this.props.selectWork(work)}
          className="media ">

          <a href={work.fullimg} className="two">
            <img src={work.img}></img>
          </a>
        </div>
      );
    });
  }
  render() {
   
    if(this.props.selecttwo){
      return (

        <div className=" content">
          {this.renderListTwo()}
        </div>

      );
    }else if(this.props.selectone){
      return (

        <div className=" content">
          {this.renderListOne()}
        </div>

      );
     
    } else{
      
      return <div className="content" >Select a work to get started.</div>;

    } 
      
    

  }
}

function mapStateToProps(state) {
  return {
    selectone: state.selectone,
    selecttwo:state.selecttwo,
    oneworks:state.oneworks,
    twoworks:state.twoworks,
  };
}

export default connect(mapStateToProps)(WorkOne);