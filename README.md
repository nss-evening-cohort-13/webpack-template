# Webpack Intro

[See Live Demo](https://webpack-temp.netlify.app/)

Webpack is a task runner and a module bundler. It originally started as a module bundler. This means that it takes all of your separate Javascript modules and bundles them together into a single file. Webpack also automates some of the tasks that we have to run every time we change the code. It will automate these tasks so that we are not typing in the same commands every single time.

Visit the [Webpack documentation](https://webpack.js.org/concepts/) if you want to explore more.

## Get Started

1. **Fork (do not clone) this repository.** Click the Fork button in the upper-right hand corner of the page.
1. Clone YOUR fork of this repository to your local machine with `git clone`.
1. Open the `package.json` file and change the `name` property to the name of your application, and `author` to  your name.
1. From your command line, be in the root directory and run `npm install`.
1. To start your application, run `npm start`

### If you see this, you are set to go!
![LIT](./documentation/lit-screen.png)

## Other Important Tidbits

### Including Images with Webpack
If you have a folder of local images that you want to load into your code things get a little strange with webpack.  Remember the only way webpack knows about assets is if they are imported into your javascript files.  Even our CSS is not added until those files are imported into our javascript files.  Below is some sample code for how to load a local image file into your project

```js
import cat from './assets/cat.jpg';

let domString = `<img src=${cat} alt="picture of a cat"/>`;

document.getElementById('cat').innerHTMl = domString;
```

### Using Axios
> For every file you will need to make an XHR request in, you will need to require Axios
```js
import axios from 'axios';

const examplePromise = () => {
  axios.get('http://localhost:3001/example')
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
});
```

### Deploying on Netlify

- Build Command: `npm run build`
- Deployment Folder: `build`
