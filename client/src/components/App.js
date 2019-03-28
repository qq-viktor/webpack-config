import React from 'react';
import CategoryItem from './CategoryItem'
import testData from './data/category-data'

class App extends React.Component{
    render() {
        console.log('test console.log');
        console.log(testData);
        return (
            <React.Fragment>
            <header>
                    <nav>
                        <a href="#">about</a>
                        <a href="#" className="home">HOME</a>
                        <a href="#">cart</a>
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
                        {testData.map(item => <CategoryItem key={item.id} category={item}/>)}
                        <div className="category-item-wrapper">
                            <div className="category-item-content">
                                <img src="../assets/img/icon/category/butovay_texnika.svg" alt="" />
                                <a href="#">category-7</a>
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