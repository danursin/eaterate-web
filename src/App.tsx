import "semantic-ui-css/semantic.min.css";

import AppRoutes from "./AppRoutes";
import { Grid } from "semantic-ui-react";
import History from "./services/History";
import Navbar from "./components/Navbar";
import React from "react";
import { Router } from "react-router";

const App: React.FC = () => {
    return (
        <Router history={History}>
            <Navbar />
            <Grid padded="horizontally">
                <Grid.Row centered>
                    <Grid.Column tablet={16} largeScreen={14} widescreen={12}>
                        <AppRoutes />
                        {/* <Footer /> */}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Router>
    );
};

export default App;
