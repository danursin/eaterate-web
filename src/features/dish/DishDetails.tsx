import React from "react";
import { useParams } from "react-router";

const DishDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dishID = +id;

    return <>DishDetails for {dishID}</>;
};

export default DishDetails;
