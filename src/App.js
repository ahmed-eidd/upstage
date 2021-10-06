import { Route, Switch } from 'react-router';
import './App.css';
import Layout from './components/Layout/Layout';
import CatalogOfPlay from './containers/CatalogOfPlay/CatalogOfPlay';
import Home from './containers/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <Switch>
      {/* <Layout>
        <Route path='/' exact component={Home} />
      </Layout> */}
      <Dashboard>
        <Route path='/login' exact component={CatalogOfPlay} />
      </Dashboard>
    </Switch>
  );
}

export default App;
