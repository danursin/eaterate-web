import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router";

const Dish = lazy(() => import("./features/dish/DishList"));
const DishDetails = lazy(() => import("./features/dish/DishDetails"));

const AppRoutes: React.FC = () => {
    return (
        <Suspense fallback={<p>Searching...</p>}>
            <Switch>
                <Route path="/dish" exact component={Dish} />
                <Route path="/dish/:id" exact component={DishDetails} />
                <Redirect to="/dish" />
            </Switch>
        </Suspense>
    );
};

export default AppRoutes;
