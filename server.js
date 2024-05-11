const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { schema, root } = require("./schema");
require("./mongo"); // This ensures MongoDB connection is opened

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true, // Enable GraphiQL interface
  })
);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/graphql`);
});
