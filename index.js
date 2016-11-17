new Vivus('b1', {
  duration: 400,
  type: 'oneByOne',
  file: "exported-svgs/dear.svg"
}, func1);


function func1() {
  new Vivus('b2', {
    duration: 500,
    type: 'oneByOne',
    file: "exported-svgs/1.svg"
  }, func2);
}

function func2() {
  new Vivus('b3', {
    duration: 500,
    type: 'oneByOne',
    file: "exported-svgs/2.svg"
  });
}
