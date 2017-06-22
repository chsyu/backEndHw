import React, { Component } from 'react';
import MenuList from '../containers/menu-list';

class Work extends Component {
    render() {
        return (
            <div className="page-wrap">
                <MenuList />
                <section className="main">
                    <header className="header">
                        <div>Snapshot <span>by TEMPLATED</span></div>
                    </header>
                    <section className="galleries">
                        <div className="gallery">
                            <header>
                                <h1>Upload</h1>

                            </header>
                            <div className="uploadimg">
                                <form to="upload/newimg" method="post" enctype="multipart/form-data" name="newimg">
                                    <h2>Upload Image</h2>
                                    <input type="file" name="newImage" />
                                    <input type="submit" className="sumitimg" value="提交" />
                                </form>
                                <div className="imgput"></div>
                            </div>
                            


                        </div>
                    </section>
                </section>
            </div>
        );
    }

}
export default Work;