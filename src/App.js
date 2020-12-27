import logo from './logo.svg';
import './App.css';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';

export const App = () => {
  return (
    <div className="App">
      <Header/>
      <Content/>
    </div>
  );
}
