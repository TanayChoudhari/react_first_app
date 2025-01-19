import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BaComponent  from './Components/BusinessAssociates/BaComponent'
import HomeComponent  from './Components/Home/HomeComponent';
import LoginComponent from './Components/Login/LoginComponent';
import Counter from './Components/Counter';
import CurrencyConverter from './Components/CurrencyConverter';

import Crud from './Components/CRUD/Crud';
import ListUsers from './Components/CRUD/ListUsers';

const Main = () => {
  	return (
    	<div className='mx-4 sm:mx-[10%]'>
      		<Routes>
        		<Route path='/' element={<HomeComponent />}></Route>
        		<Route path='/ba' element={<BaComponent />}></Route>
        		<Route path='/login' element={<LoginComponent />}></Route>
				<Route path='/cnt' element={<Counter />}></Route>
				<Route path='/converter' element={<CurrencyConverter />}></Route>
      		</Routes>

			  <Routes>
        		<Route path='/crud' element={<Crud />}></Route>
        		<Route path='/crud/user/list' element={<ListUsers />}></Route>
      		</Routes>

    	</div>
  )
}

export default Main;