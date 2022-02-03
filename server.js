const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// EXPRESS middleware 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//default response for any other request (not found)
app.use((req, res) => {
    res.status(404).end();
});

// keep at bottom
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
