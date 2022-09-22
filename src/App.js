import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Play from "./routes/Play";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <Switch>
                <Route path={`${process.env.PUBLIC_URL}/play`}>
                    <Play />
                </Route>

                <Route path={`${process.env.PUBLIC_URL}/books/:id`}>
                    <Detail />
                </Route>
                <Route path={`${process.env.PUBLIC_URL}/`}>
                    <Home />
                </Route>
            </Switch>
            <Footer></Footer>
        </Router>
    );
}

export default App;
