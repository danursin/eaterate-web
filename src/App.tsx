import "semantic-ui-css/semantic.min.css";

import { Grid, Segment } from "semantic-ui-react";

import AppRoutes from "./AppRoutes";
import History from "./services/History";
import React from "react";
import { Router } from "react-router";

const App: React.FC = () => {
    return (
        <Router history={History}>
            <Grid padded="horizontally">
                <Grid.Row centered>
                    <Grid.Column tablet={16} largeScreen={14} widescreen={12}>
                        {/* <Navbar /> */}
                        <Segment style={{ marginBottom: 100 }}>
                            <AppRoutes />
                        </Segment>
                        {/* <Footer /> */}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Router>
    );
};

export default App;
