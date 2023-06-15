import React from 'react'
import { Route, Routes } from 'react-router';
import RootLayOut from './pages/RootLayOut';
import HomePages from './pages/components/HomePages';
import Pagenotfound from './pages/Pagenotfound';
import Details from './pages/components/Details';


const App = () => {





  return (


    <div>
      <Routes>

        <Route path='/' element={<RootLayOut />}>


          <Route index element={<HomePages />} />
          <Route path='details/:id' element={<Details />} />



          <Route path='*' element={<Pagenotfound />} />



        </Route>



      </Routes>
    </div>



  )
}

export default App














