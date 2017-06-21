import React, { Component } from 'react';
import { connect } from 'react-redux';

class WorkDetail extends Component {
  render() {
    if (!this.props.work) {
      return <div className=" col-md-6 text-primary title" class="detailtext">Select a book to get started.</div>;
    }

    return (
      <div className=" col-md-6 detail" class="detail">
        
        <div><h3 className="title" >{this.props.work.title}</h3></div>
        <div class="date"><h3 className="date" >{this.props.work.date}</h3></div>
        <hr></hr>
        <a>
          <img src={this.props.work.img} width="600"></img>
        </a>
      </div>
      
    );
  }
}

function mapStateToProps(state) {
  return {
    work: state.activeWork
  };
}

export default connect(mapStateToProps)(WorkDetail);