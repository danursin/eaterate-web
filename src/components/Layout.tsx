import { Grid } from "semantic-ui-react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import React from "react";

const Layout: React.FC = () => {
    return (
        <>
            <nav>
                <Navbar />
            </nav>
            <main>
                <Grid padded>
                    <Grid.Row centered>
                        <Grid.Column tablet={16} largeScreen={14} widescreen={12}>
                            <Outlet />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </main>
        </>
    );
};

export default Layout;
