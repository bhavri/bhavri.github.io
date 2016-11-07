function myCallback() {
  console.log("is it working?");
}
new Vivus('svg1', {
  duration: 500,
  type: 'oneByOne'
}, myCallback);
