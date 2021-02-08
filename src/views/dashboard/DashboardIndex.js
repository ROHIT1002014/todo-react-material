import { Route } from "react-router-dom";
import * as React from 'react'
import {
    BrowserRouter as Router,
} from 'react-router-dom';
import Marks from "./../../components/home/status/Marks";
import Profit from "./../../components/home/status/Profit";
import TotalCustomers from "./../../components/home/status/StudentsStatus";
import LatestCourse from "./../../components/home/Course/LatestCourse";
import Dashboard from "./Dashboard";


export default function App() {
    return (
        <Router>
            <div>
                <Route exact path='/home'>
                    <Dashboard />
                </Route>
                <Route exact path='/home/StudentsStatus'>
                    <TotalCustomers />
                </Route>
                <Route exact path='/home/LatestCourse'>
                    <LatestCourse />
                </Route>
                <Route exact path='/home/Marks'>
                    <Marks />
                </Route>
                <Route exact path='/home/Profit'>
                    <Profit />
                </Route>
            </div>
        </Router>
    );
}

