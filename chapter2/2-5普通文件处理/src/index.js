const url = require('./assets/webpack.png').default;
if (Math.random() > 0.5) {
    const img = document.createElement('img');
    img.src = url;
    document.body.appendChild(img);
} 