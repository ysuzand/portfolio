import { Routes, Route } from "react-router-dom";
import Home from '@/components/Home';

// import st from '@/styles/root.module.scss'

// https://www.youtube.com/watch?v=FkowOdMjvYo&t=1851s
const App = () => (
  <>
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  </>
)

export default App
