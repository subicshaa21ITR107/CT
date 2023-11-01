import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import React from 'react';
import Header from './Header';
import Signup from './Signup';
import LoginPage from './LoginPage';
import Home from './Home';
import Filter from './Filter';
import Jobs from './Jobs';
import PostJob from './PostJob';
import Savejobs from './Savejobs';
import Applyjobs from './Applyjobs';
import Discussion from './discussion';
import CommentCard from './commentCard';
import Editor from './editor';
import Reply from './reply';
import StarRating from './rating';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Header/>}/>
          <Route path='/Signup'element={<Signup/>}/>
          <Route path='/LoginPage' element={<LoginPage/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Filter' element={<Filter/>}/>
          <Route path='/Jobs' element={<Jobs/>}/>
          <Route path='/PostJob' element={<PostJob/>}/>
          <Route path='/Savejobs' element={<Savejobs/>}/>
          <Route path='/Applyjobs' element={<Applyjobs/>}/>
          <Route path='/discussion' element={<Discussion/>}/>
          <Route path='/commentCard' element={<CommentCard/>}/>
          <Route path='/editor' element={<Editor/>}/>
          <Route path='/reply' element={<Reply/>}/>
          <Route path='/rating' element={<StarRating/>}/>
          </Routes>
          </BrowserRouter>
  );
}

export default App;
