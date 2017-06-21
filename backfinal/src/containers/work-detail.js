import React, { Component } from 'react';
import { connect } from 'react-redux';

class WorkDetail extends Component {
  render() {
    if (!this.props.work) {
      return <div className=" col-md-6 text-primary title" class="detailtext">Select a work to get started.</div>;
    }

    return (
      <div className=" content">
      <div className="media">
        <a>
          <img src={this.props.work.img} width="600"></img>
        </a>
      </div>
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