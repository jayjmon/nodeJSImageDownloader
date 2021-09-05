
const download = require('image-downloader')

let recipes = require('./recipes.json');

const getFileExtension = (filename) =>{
	return filename.split(".").pop();
}

	
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
  
 }
