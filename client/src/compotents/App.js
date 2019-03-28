import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    render() {
        console.log('test console.log');
        return (
            <React.Fragment>
            <header>
                    <nav>
                        <a href="#">about</a>
                        <a href="#" className="home">HOME</a>
                        <a href="#">basket</a>
                        <span>
                            <a href="">sign in</a>
                            <a className="sign-up" href="">sign up</a>
                            <a href="">logout</a>
                        </span>
                    </nav>
                </header>

                <section>
                    <div className="search-container">
                        <div className="search-wrapper">
                            <input type="text" />
                        </div>
                    </div>

                    <div className="category-container">
                        <div className="category-item-wrapper">
                            <div className="category-item-content">
                                <img src="./assets/img/icon/category/butovay_texnika.svg" alt="" />
                                <a href="#">category</a>
                            </div>
                        </div>
                        <div className="category-item-wrapper">
                            <div className="category-item-content">
                                {/* <img src="butovay_texnika.svg" alt="" /> */}
                                <a href="#">category</a>
                            </div>
                        </div>
                        <div className="category-item-wrapper">
                            <div className="category-item-content">
                                {/* <img src="butovay_texnika.svg" alt="" /> */}
                                <a href="#">category</a>
                            </div>
                        </div>
                        <div className="category-item-wrapper">
                            <div className="category-item-content">
                                {/* <img src="butovay_texnika.svg" alt="" /> */}
                                <a href="#">category</a>
                            </div>
                        </div>
                        <div className="category-item-wrapper">
                            <div className="category-item-content">
                                {/* <img src="butovay_texnika.svg" alt="" /> */}
                                <a href="#">category</a>
                            </div>
                        </div>
                        <div className="category-item-wrapper">
                            <div className="category-item-content">
                                {/* <img src="butovay_texnika.svg" alt="" /> */}
                                <a href="#">category</a>
                            </div>
                        </div>
                    </div>
                </section>

                <footer>

                </footer>
            </React.Fragment>
        );
    }
}

export default App;