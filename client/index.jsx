import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/Gallery.jsx';
let params = new URLSearchParams(window.location.search);
let val = params.get('prod');
let productId = val ? val : 1;

ReactDOM.render(<Gallery modelId={productId}/>, document.getElementById('image-container'));