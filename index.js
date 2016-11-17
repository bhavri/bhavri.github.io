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
    }, func7);
  }

  function func7() {
    new Vivus('b8', {
      duration: 500,
      type: 'oneByOne',
      file: "exported-svgs/7.svg"
    }, func8);
  }

  function func8() {
    new Vivus('b9', {
      duration: 500,
      type: 'oneByOne',
      file: "exported-svgs/8.svg"
    }, func9);
  }

  function func9() {
    
    new Vivus('b10', {
      duration: 400,
      type: 'oneByOne',
      file: "exported-svgs/p1.svg"
    }, func10);
  }

  function func10() {
    new Vivus('b11', {
      duration: 400,
      type: 'oneByOne',
      file: "exported-svgs/p2.svg"
    }, func11);
  }

  function func11() {
    new Vivus('b12', {
      duration: 400,
      type: 'oneByOne',
      file: "exported-svgs/p3.svg"
    }, func12);
  }

  function func12() {
    new Vivus('b13', {
      duration: 400,
      type: 'oneByOne',
      file: "exported-svgs/p4.svg"
    }, func13);
  }

  function func13() {
    new Vivus('b14', {
      duration: 400,
      type: 'oneByOne',
      file: "exported-svgs/p5.svg"
    }, func14);
  }

  function func14() {
    new Vivus('b15', {
      duration: 400,
      type: 'oneByOne',
      file: "exported-svgs/p6.svg"
    }, func15);
  }

  function func15() {
    new Vivus('b16', {
      duration: 400,
      type: 'oneByOne',
      file: "exported-svgs/p7.svg"
    }, func16);

    window.scrollTo(0,document.body.scrollHeight);
  }

  function func16() {
    new Vivus('b17', {
      duration: 400,
      type: 'oneByOne',
      file: "exported-svgs/p8.svg"
    }, func17);

    window.scrollTo(0,document.body.scrollHeight);
  }

  function func17() {
    new Vivus('b18', {
      duration: 200,
      type: 'oneByOne',
      file: "exported-svgs/p9.svg"
    });

    window.scrollTo(0,document.body.scrollHeight);
  }


  startLetter();
})();
