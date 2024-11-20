import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import {Container} from '@mui/material'
import Menu from './components/Navbar'

export default function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Container>
        <Routes>
          <Route path='/' element={<TaskList/>}/>
          <Route path='/task/new' element={<TaskForm/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
    
  )
}
