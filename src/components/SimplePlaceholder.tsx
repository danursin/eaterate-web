import { Placeholder } from "semantic-ui-react";
import React from "react";

const SimplePlaceholder: React.FC = () => {
    return (
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
    );
};

export default SimplePlaceholder;
