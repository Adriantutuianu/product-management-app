import React from "react";
import { Typography, Divider } from "antd";

const { Title, Paragraph, Text, Link } = Typography;

const About = () => {
  return (
    <div>
      <Title level={2}>Introduction</Title>
      <Paragraph>
        <Text strong>
          This is a CRUD APP. A CRUD app is a specific type of software
          application that consists of four basic operations; Create, Read,
          Update, Delete.
        </Text>
      </Paragraph>
      <Paragraph>
        <Text code>
          Create allows you to add new rows/records to a database/table. If the
          record does not exist, the create operation adds it to the database.
        </Text>
      </Paragraph>
      <Paragraph>
        <Text italic>
          Read is the operation that allows us to see the recipe we just
          created. It does not alter data. It simply displays it. Read consists
          of a function that queries our database and fetches all our records,
          in this case, recipes. We can tailor our queries to pull back all
          recipes, or only recipes of a particular type (for example,, vegan
          recipes). We can also pull back a single recipe if we have a UID
          (unique identifier).
        </Text>
      </Paragraph>
      <Text mark>
        This page is build using a fake API and it's not going to make any
        change in the database.
      </Text>
    </div>
  );
};

export default About;
