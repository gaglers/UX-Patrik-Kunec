import './App.css';
import Menu from './components/Menu';
import Home from './pages/Home';
import Visualization from './pages/Visualization';
import { Routes, Route } from "react-router-dom"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ComparativeVisualization from './pages/ComparativeVisualization';

const theme = createTheme({
  palette: {
    primary: {
      main: '#facc15',
    },
    secondary: {
      main: '#ffffff',
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App bg-gradient-to-t to-90% from-purple-400 to-black">
        <Menu />
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="visualization" element={ <Visualization/> } />
          <Route path="comparative_visualization" element={ <ComparativeVisualization/> } />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
