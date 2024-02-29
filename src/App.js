import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import { Button } from '@chakra-ui/react';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
