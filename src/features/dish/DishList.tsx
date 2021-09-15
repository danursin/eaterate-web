import { Form, Image, List, Message, Placeholder } from "semantic-ui-react";
import React, { useEffect, useState } from "react";

import { Dish } from "../../types";
import { Link } from "react-router-dom";
import useDataService from "../../hooks/useDataService";

const DishList: React.FC = () => {
    const [dishes, setDishes] = useState<Dish[]>();
    const [itemAvatar, setItemAvatar] = useState<boolean>(true);

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
            <Form>
                <Form.Checkbox
                    checked={itemAvatar}
                    label="Toggle Card or Avatar"
                    toggle
                    onChange={(e, { checked }) => setItemAvatar(!!checked)}
                />
            </Form>
            {!dishes && (
                <Placeholder>
                    <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Header>
                    <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Header>
                    <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Header>
                </Placeholder>
            )}
            {!!dishes && (
                <List selection celled relaxed="very">
                    {dishes.map((d) => (
                        <List.Item key={d.id} as={Link} to={`/dish/${d.id}`}>
                            <Image avatar={itemAvatar} src={"https://tipbuzz.com/wp-content/uploads/Smoked-Pork-Shoulder-thumbnail.jpg"} />
                            <List.Content>
                                <List.Header content={d.title} />
                                <List.Description>I am something that is awesome</List.Description>
                            </List.Content>
                        </List.Item>
                    ))}
                </List>
            )}
            {!!dishes && !dishes.length && <Message size="small" content="No dishes yet..." info icon="info circle" />}
        </>
    );
};

export default DishList;
