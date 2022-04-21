import React from "react";
import { useParams } from "react-router";

const DishDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return <>DishDetails for {id}</>;
};

export default DishDetails;
