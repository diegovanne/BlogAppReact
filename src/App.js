import './App.css';
import Header from "./partials/Header";
import Footer from "./partials/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/post/:id" component={PostContent} />
        <Route path="*" component={NotFound} />
      </Switch>
       */}
      <Footer />
    </div>
  );
}

export default App;
