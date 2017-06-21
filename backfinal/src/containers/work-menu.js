import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectWork } from '../actions/index';
import { bindActionCreators } from 'redux';

class WorkList extends Component {
  renderList() {
    return this.props.works.map((work) => {
      return (

        
        <ul
          key={work.title}
          onClick={() => this.props.selectWork(work)}
          className="tabs ">
          <li>< a href="#"  className="button">
            {work.title}
          </a>
          </li>
        </ul>



      );
    });
  }

  render() {
    return (
      <div className="tabs-con">

        {this.renderList()}
      </div>
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