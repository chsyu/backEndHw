import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectWork } from '../actions/index';
import { bindActionCreators } from 'redux';

class WorkList extends Component {
  renderList() {
    return this.props.works.map((work) => {
      return (
        <li 
          key={work.title}
          onClick={() => this.props.selectWork(work)}
          className="list-group-item ">
          <div className="title">
          {work.title}
          </div>
          <div className="date">
          {work.date}
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4 nav nav-pills nav-stacked">
        
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of BookList
  return {
    works: state.works
  };
}

// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed to all of our reducers
  return bindActionCreators({ selectWork: selectWork }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkList);