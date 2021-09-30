import { Route, Switch } from 'react-router';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;
