import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import logo from './Sigle UTAP.jpg';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import PostDetails from './components/PostDetails';
import DeletePost from './components/DeletePost';
import EditPost from './components/EditPost';
import AdList from './components/ads/AdList';
import NewsList from './components/news/NewsList';
import NewsDetails from './components/news/NewsDetails';

import './App.css';

const App = () => {
    return (
        <BrowserRouter>

           <nav className="navbar navbar-expand-lg navbar-light bg-light">
           
                <NavLink to="/" className="navbar-brand"> <img className="App-logo" src={logo} alt="Logo"   /></NavLink>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" activeStyle={{ fontWeight: 'bold' }} to="/" exact>Gestion des  produits</NavLink>
                        </li>
                      

                        <li className="nav-item">
                            <NavLink className="nav-link" activeStyle={{ fontWeight: 'bold' }} to="/ads">Gestion de la Banière</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeStyle={{ fontWeight: 'bold' }} to="/news">Gestion des Actualités</NavLink>
                        </li>
                       
                    </ul>
                </div>
            </nav>
            <div className="container">
                <br />
                <Route path="/" exact component={PostList}></Route>
                <Route path="/create" exact component={CreatePost}></Route>
                <Route path="/details/:id" exact component={PostDetails}></Route>
                <Route path="/delete/:id" exact component={DeletePost}></Route>
                <Route path="/edit/:id" exact component={EditPost}></Route>

           
                <Route path="/ads" exact component={AdList}></Route>
                <Route path="/news" exact component={NewsList}></Route>
                <Route path="/news/:id" exact component={NewsDetails}></Route>
              
                
            </div>
        </BrowserRouter>
    );
}

export default App;