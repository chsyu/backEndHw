import React, { Component } from 'react';
import MainImg from '../containers/main-img';
import MenuList from '../containers/menu-list';
import { Link } from 'react-router';
import WorkDetail from '../containers/work-detail';
import Connect from '../containers/connect-form';
class Main extends Component {
    render() {
        return (
            <div className="page-wrap">

                <MenuList />

                <section className="main">
                    <MainImg />
                    <section className="galleries">

                    </section>
                    <Connect />

                </section>
            </div>
        );
    }

}
export default Main;