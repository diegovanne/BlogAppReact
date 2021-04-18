import './App.css';
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Homepage from "./screens/Homepage";
import NotFound from "./screens/NotFound";
import {
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        {/* <Route exact path="/about" component={AboutUs} />
        <Route exact path="/contact" component={ContactUs} />
        <Route exact path="/blogs" component={Blog} />
        <Route path="/post/:id" component={PostContent} />
        <Route exact path="/author" component={Author} /> */}
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
