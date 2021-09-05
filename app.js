const fs = require("fs");
const download = require('image-downloader')
let recipes = require('./recipes.json');
const path = require("path")
const getFileExtension = filename =>{
	return filename.split(".").pop();
}



const imageDownloader = () =>{
	const options = {
		  url: 'http://someurl.com/image.jpg',
		  dest: './img/image.jpg',                // will be saved to /path/to/dest/image.jpg
		  extractFilename: false
		}

	 for(let i in recipes.Data){
		
		image = i.image
		console.log(i, recipes.Data[i].image[0])
		options.url = recipes.Data[i].image[0];
		options.dest = './img/' + i.replaceAll(" ", "-") + "."+getFileExtension(options.url);
		download.image(options)
		  .then(({ filename  }) => {
			console.log('Saved to', filename )  // saved to /path/to/dest/image.jpg
		  })
		  .catch((err) => console.error(err))
	  recipes.Data[i].image = "https://ketonebee.com/img/" + i.replaceAll(" ", "-") + "."+getFileExtension(options.url);
	 }
	
	console.log(recipes)
	jsonEditer(recipes);
}

const jsonEditer =(newJsonValues)=>{
    const fileName = 'recipes.json';

	recipes = newJsonValues;
	
	fs.writeFileSync(path.join(__dirname,fileName), JSON.stringify(recipes));
}

imageDownloader();
