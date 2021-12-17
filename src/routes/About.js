import React from "react";
import "./about.css";
import { Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

const About = () => {
  return (
    <div className="about">
      <Title level={2}>Introduction</Title>
      <Paragraph>
        <Text strong>
          This is a CRUD APP. A CRUD app is a specific type of software
          application that consists of four basic operations; Create, Read,
          Update, Delete.
        </Text>
      </Paragraph>
      <Paragraph>
        <ul>
          <li>
            {" "}
            <Text code>
              Create allows you to add new rows/records to a database/table. If
              the record does not exist, the create operation adds it to the
              database.
            </Text>
          </li>
          <li>
            {" "}
            <Text italic>
              Read is the operation that allows us to see the recipe we just
              created. It does not alter data. It simply displays it. Read
              consists of a function that queries our database and fetches all
              our records, in this case, recipes. We can tailor our queries to
              pull back all recipes, or only recipes of a particular type (for
              example,, vegan recipes). We can also pull back a single recipe if
              we have a UID (unique identifier).
            </Text>
          </li>
          <li>
            <Text type="secondary">
              Update is the operation that allows us to modify existing data and
              records within a table. We can update a single field within a
              record or multiple fields at once. It is also possible to update
              multiple records at once too.
            </Text>
          </li>
          <li>
            <Text type="warning">
              Delete is the operation that allows us to remove records from a
              table.
            </Text>
          </li>
        </ul>
      </Paragraph>
      <Paragraph>
        <Text mark>
          This page is build using a fake API and it's not going to make any
          change in the database.
        </Text>
      </Paragraph>
      <Paragraph>
        {" "}
        <Text type="success">
          FakeStoreApi is a free online REST API that you can use whenever you
          need Pseudo-real data for your e-commerce or shopping website without
          running any server-side code. It's awesome for teaching purposes,
          sample codes, tests, etc.
        </Text>
      </Paragraph>
    </div>
  );
};

export default About;
