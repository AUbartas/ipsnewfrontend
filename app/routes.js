import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Servicedesk from "./pages/servicedesk/Servicedesk"
import Statistics from "./pages/statistics/statistics"

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Servicedesk />
                </Route>
                <Route path="/statistics">
                    <Statistics/>
                </Route>
            </Switch>
        </Router>
    )

}