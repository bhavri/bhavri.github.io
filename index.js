import TextToSVG from "text-to-svg";

const textToSVG = TextToSVG.loadSync();

console.log(textToSVG);
const attributes = {fill: 'red', stroke: 'black'};
const options = {x: 0, y: 0, fontSize: 72, anchor: 'top', attributes: attributes};

const svg = textToSVG.getSVG('hello', options);

console.log(svg);
