const {fetchCSS} = require("../utils/function")

exports.findAll = async (req, res) => {
    const url = "https://fluentci.io/"

    const cssFile = await fetchCSS(url);

    console.log(cssFile);
    res.json("hummmm");
}