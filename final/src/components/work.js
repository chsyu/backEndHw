import React, { Component } from 'react';
import HeaderInfo from '../containers/header';
import WorkList from '../containers/work-list';
import WorkDetail from '../containers/work-detail';
class Work extends Component {
    render() {
        return (<div>
            <div>
                <HeaderInfo />
            </div>
            <div className="row">
                <WorkList />
                <WorkDetail />
            </div>

        </div>);
    }

}
export default Work;