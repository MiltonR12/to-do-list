import { Routes, Route } from 'react-router-dom'
import HomePage from './page/HomePage'
import CreatePage from './page/CreatePage'
import UpdatePage from './page/UpdatePage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/create' element={<CreatePage />} />
      <Route path='/update/:id' element={<UpdatePage />} />
    </Routes>
  )
}

export default App