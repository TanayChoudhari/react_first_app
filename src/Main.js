import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BaComponent  from './Components/BusinessAssociates/BaComponent'
import HomeComponent  from './Components/Home/HomeComponent';
import LoginComponent from './Components/Login/LoginComponent';

const Main = () => {
  	return (
    	<div className='mx-4 sm:mx-[10%]'>
      		<Routes>
        		<Route path='/' element={<HomeComponent />}></Route>
        		<Route path='/ba' element={<BaComponent />}></Route>
        		<Route path='/login' element={<LoginComponent />}></Route>
      		</Routes>
    	</div>
  )
}

export default Main;