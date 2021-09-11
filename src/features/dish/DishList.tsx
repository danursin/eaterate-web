import { List, Message } from "semantic-ui-react";
import React, { useEffect, useState } from "react";

import { Dish } from "../../types";
import { Link } from "react-router-dom";
import useDataService from "../../hooks/useDataService";

const DishList: React.FC = () => {
    const [dishes, setDishes] = useState<Dish[]>();

    const { query } = useDataService();

    useEffect(() => {
        (async () => {
            const data = await query<Dish>({
                table: "Dish",
                select: ["id", "title"]
            });
            setDishes(data);
        })();
    }, [query]);

    return (
        <>
            DishList
            {!!dishes && (
                <List selection divided relaxed="very">
                    {dishes.map((d) => (
                        <List.Item key={d.id} content={d.title} as={Link} to={`/dish/${d.id}`} />
                    ))}
                </List>
            )}
            {!!dishes && !dishes.length && <Message size="small" content="No dishes yet..." info icon="info circle" />}
        </>
    );
};

export default DishList;
