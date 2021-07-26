const express = require('express');

const affirmationData = require('./affirmations');

const app = express();

app.get('/test', async (req, res) => {
	res.send({ data: affirmationData.affirmations[0] });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
