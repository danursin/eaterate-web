import { Header, SemanticICONS } from "semantic-ui-react";

import React from "react";

interface PageHeaderProps {
    content: React.ReactNode;
    icon?: SemanticICONS;
}

const PageHeader: React.FC<PageHeaderProps> = ({ content, icon }) => {
    return <Header content={content} icon={icon} />;
};

export default PageHeader;
