const express = require('express');

const affirmationData = require('./affirmations');

const app = express();

app.get('/test', async (req, res) => {
	const { affirmations } = affirmationData;

	const randomAffirmation =
		affirmations[Math.floor(Math.random() * affirmations.length)];

	res.send({ data: randomAffirmation });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
