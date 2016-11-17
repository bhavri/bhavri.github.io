/**
 * TODO: Use DRY and drawsvg plugin to make it a much small code file
 */

(function(){
  function startLetter() {
    document.querySelectorAll(".b-svg").forEach(function(ele){
      ele.style.display = "block"
    });

    new Vivus('b1', {
    duration: 250,
    type: 'oneByOne',
    file: "exported-svgs/dear.svg"
    }, func1);
}

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
    }, func3);
  }
  
  function func3() {
    new Vivus('b4', {
      duration: 500,
      type: 'oneByOne',
      file: "exported-svgs/3.svg"
    }, func4);
  }

  function func4() {
    new Vivus('b5', {
      duration: 500,
      type: 'oneByOne',
      file: "exported-svgs/4.svg"
    }, func5);
  }

  function func5(){
    new Vivus('b6', {
      duration: 500,
      type: 'oneByOne',
      file: "exported-svgs/5.svg"
    }, func6);
  }

  function func6() {
    new Vivus('b7', {
      duration: 500,
      type: 'oneByOne',
      file: "exported-svgs/6.svg"
    });
  }

  function func7() {
    new Vivus('b8', {
      duration: 500,
      type: 'oneByOne',
      file: "exported-svgs/7.svg"
    });
  }


  startLetter();
})();
