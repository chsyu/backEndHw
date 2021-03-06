import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div className=" col-md-6 text-primary title" class="detailtext">Select a book to get started.</div>;
    }

    return (
      <div className=" col-md-6 detail" class="detail">
        
        <div><h3 className="title" >{this.props.book.title}</h3></div>
        <div class="date"><h3 className="date" >{this.props.book.date}</h3></div>
        <hr></hr>
        <a>
          <img src={this.props.book.img} width="600"></img>
        </a>
      </div>
      
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
