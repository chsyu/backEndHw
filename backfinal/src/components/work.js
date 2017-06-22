import React, { Component } from 'react';
import HeaderInfo from '../containers/header';
import MenuList from '../containers/menu-list';
import WorkList from '../containers/work-list';
import WorkOne from '../containers/work-one';
class Work extends Component {
    render() {
        return (
            <div className="page-wrap">
                <MenuList />
                <section className="main">
                    <header className="header">
                        <div>Work of <span>I-chin Li</span></div>
                    </header>
                    <section className="galleries">
                        <div className="gallery">
                           <header>
                               <h1>Gallery</h1>
                                <WorkList />
                             </header>
                                <WorkOne />
                                
                                
                            
                        </div>
                    </section>
                </section>
            </div>
        );
    }

}
export default Work;