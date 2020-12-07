/**
 * QR test
*/
/**
 * https://github.com/mebjas/html5-qrcode
*/

import { scanner } from './Scanner.js'

const App = () => {
  
  const btn = document.getElementById('btn');
  btn.addEventListener('click', scanner)

}

window.addEventListener('load', App);