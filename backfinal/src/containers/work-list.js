import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectWork } from '../actions/index';
import { selectOne } from '../actions/index';
import { selectTwo } from '../actions/index';
import { bindActionCreators } from 'redux';

class WorkList extends Component {

  renderList() {
    return this.props.works.map((work) => {
      return (

<ul className="tabs">
        <li key={work.title1}
          onClick={() =>{this.props.selectOne(work)}} >
          < a href="#" className="button">
            {work.title1}
          </a>
        </li>
        <li key={work.title2}
          onClick={() =>{this.props.selectTwo(work)}} >
          < a href="#" className="button">
            {work.title2}
          </a>
        </li>
        <li key={work.title3}
          onClick={() =>{this.props.selectOne(work)}} >
          < a href="#" className="button">
            {work.title3}
          </a>
        </li>
</ul>


      );

    });
  }
  render() {
    return (
      <header>
        
          {this.renderList()}
        
      </header>
    )
  }
}
function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of BookList
  return {
    works: state.workmenu,
  };
}

// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed to all of our reducers
  return bindActionCreators({ selectOne: selectOne,selectTwo:selectTwo}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(WorkList);