import { Card, Form, Image, List, Message, Placeholder } from "semantic-ui-react";
import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";

import { Dish } from "../../types";
import { Link } from "react-router-dom";
import SimplePlaceholder from "../../components/SimplePlaceholder";

interface GetDishListResponse {
    dishes: Dish[];
}

const GET_DISH_LIST_QUERY = gql`
    query GetDishList {
        dishes {
            id
            title
        }
    }
`;

const DishList: React.FC = () => {
    const { loading, data, error } = useQuery<GetDishListResponse>(GET_DISH_LIST_QUERY);

    return (
        <>
            {loading && <SimplePlaceholder />}
            {error && <Message content={error.message} />}
            {!!data && (
                <Card.Group>
                    {data.dishes.map((d) => (
                        <Card link key={d.id} as={Link} to={`/dish/${d.id}`}>
                            <Image src={"https://tipbuzz.com/wp-content/uploads/Smoked-Pork-Shoulder-thumbnail.jpg"} />
                            <Card.Content>
                                <Card.Header content={d.title} />
                                <Card.Meta content="I am the metadata" />
                                <Card.Description>I am something that is awesome</Card.Description>
                            </Card.Content>
                        </Card>
                    ))}
                </Card.Group>
            )}
            {!!data && !data.dishes.length && <Message size="small" content="No dishes yet..." info icon="info circle" />}
        </>
    );
};

export default DishList;
