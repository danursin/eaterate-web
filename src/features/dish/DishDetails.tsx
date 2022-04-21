import { gql, useQuery } from "@apollo/client";

import { Dish } from "../../types";
import { Message } from "semantic-ui-react";
import React from "react";
import SimplePlaceholder from "../../components/SimplePlaceholder";
import { useParams } from "react-router";

interface GetDishDetailsParameters {
    id: number;
}

interface GetDishDetailsResponse {
    dish: Dish;
}

const GET_DISH_DETAILS_QUERY = gql`
    query GetDishDetails($id: Int!) {
        dish(id: $id) {
            id
            title
        }
    }
`;

const DishDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { loading, data, error } = useQuery<GetDishDetailsResponse, GetDishDetailsParameters>(GET_DISH_DETAILS_QUERY, {
        variables: { id: Number(id) }
    });

    return (
        <>
            DishDetails for {id}
            {loading && <SimplePlaceholder />}
            {error && <Message content={error.message} />}
            {data && <>{data.dish.title}</>}
        </>
    );
};

export default DishDetails;
