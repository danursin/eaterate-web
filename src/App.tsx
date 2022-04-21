import "semantic-ui-css/semantic.min.css";

import { Navigate, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";

import Layout from "./components/Layout";
import { Routes } from "react-router";

const Dish = lazy(() => import("./features/dish/DishList"));
const DishDetails = lazy(() => import("./features/dish/DishDetails"));

const App: React.FC = () => {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/dish" element={<Dish />} />
                    <Route path="/dish/:id" element={<DishDetails />} />
                    <Route path="/" element={<Navigate to="dish" replace />} />
                    <Route path="*" element={<Navigate to="dish" replace />} />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default App;
