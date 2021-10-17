import { Route, Switch } from 'react-router';
import './App.css';
import AppRoute from './AppRoute';
import Layout from './components/Layout/Layout';
import CatalogOfPlay from './containers/CatalogOfPlay/CatalogOfPlay';
import Home from './containers/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import PageTwo from './Prototypes/PageTwo/PageTwo';
import PageThree from './Prototypes/PageThree/PageThree';
import PageFour from './Prototypes/PageFour/PageFour';
import PageFive from './Prototypes/PageFive/PageFive';
import PageSix from './Prototypes/PageSix/PageSix';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PageSeven from './Prototypes/PageSeven/PageSeven';

function App() {
  return (
    // <Route path='/'>
    //   <Route component={Layout}>
    //     <Route component={Home} path='/' exact />
    //   </Route>
    //   <Route component={Dashboard}>
    //     <Route path='/login' exact component={CatalogOfPlay} />
    //     <Route path='/page2' exact component={PageTwo} />
    //     <Route path='/page3' exact component={PageThree} />
    //   </Route>
    // </Route>
    <Switch>
      <AppRoute exact path='/' layout={Layout} component={Home} />
      <AppRoute exact path='/page1' layout={Dashboard} component={CatalogOfPlay} />
      <AppRoute exact path='/page2' layout={Dashboard} component={PageTwo} />
      <AppRoute exact path='/page3' layout={Dashboard} component={PageThree} />
      <AppRoute exact path='/page4' layout={Dashboard} component={PageFour} />
      <AppRoute exact path='/page5' layout={Dashboard} component={PageFive} />
      <AppRoute exact path='/page6' layout={Dashboard} component={PageSix} />
      {/* <AppRoute exact path='/page7' layout={Dashboard} component={PageSeven} /> */}
    </Switch>
  );
}

export default App;
