const path = require('path');
const router = require('express').Router();

//@desc utility function to keep code dry!
function getPathToHtml(fileName) {
    return path.join(__dirname, `../public/${fileName}.html`);
}

router.get('/exercise', (req, res) => {
    res.sendFile(getPathToHtml("exercise"));
});

module.exports = router;