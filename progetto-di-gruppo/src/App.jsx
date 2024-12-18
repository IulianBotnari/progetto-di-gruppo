import { useState } from 'react'
import HomePage from './pages/HomePage'
import DetailsPage from './pages/DetailsPage'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route>
            <Route index element={<HomePage />} />
            <Route path="/details/:id" element={<DetailsPage />} />

          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
