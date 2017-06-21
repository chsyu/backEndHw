import React, { Component } from 'react';
import { connect } from 'react-redux';


class WorkOne extends Component {

  renderList() {
    return this.props.twoworks.map((work) => {
      return (
        <div
          key={work.title}
          onClick={() => this.props.selectWork(work)}
          className="media ">

          <a href="#">
            <img src={work.img}></img>
          </a>
        </div>
      );
    });
  }
  render() {
    if (!this.props.works) {
      
      return <div className="content" >Select a work to get started.</div>;

    } 
      return (

        <div className=" content">
          {this.renderList()}
        </div>

      );
    

  }
}

function mapStateToProps(state) {
  return {
    works: state.selectone,
    twoworks:state.twoworks
  };
}

export default connect(mapStateToProps)(WorkOne);