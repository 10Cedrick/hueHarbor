const axios = require('axios');
const cheerio = require('cheerio');
const fetchCSS = async (url) => {
    try{
        //récupérer l'html de la page
        const { data: html } = await axios.get(url);

        //Analyse du fichier avec cheerio
        const $ = cheerio.load(html);

        //Extraction des liens css et construction des liens absolues
        const cssUrls = []
        $('link[rel="stylesheet"]').each((i, link) => {
            const cssUrl = $(link).attr('href')
            if(cssUrl){
                const absoluteURL = new URL(cssUrl, url).href;
                cssUrls.push(absoluteURL)
            }
        })
        if(cssUrls.length === 0){
            console.error("Aucun css trouvé sur la page");
            return;
        }   
        return cssUrls;    

    }catch (error) {
        throw new Error(`Error fetching the HTML: ${error}`);
      }
}

const getHue = async (cssUrls) => {
    for(const cssUrl of cssUrls){
        try{
            const {data : css} = await axios.get(cssUrl);
        }
    }
}

module.exports = {
    fetchCSS
}
