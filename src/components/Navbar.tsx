import { Header, Image, Menu } from "semantic-ui-react";

import React from "react";

const Navbar: React.FC = () => {
    return (
        <Menu tabular>
            <Menu.Item>
                <Image src="/logo.png" style={{ width: "2.5rem" }} />
            </Menu.Item>
            <Menu.Item>
                <Header content="Eaterate" style={{ fontStyle: "italic" }} />
            </Menu.Item>
        </Menu>
    );
};

export default Navbar;
