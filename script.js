//Que-1
function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());

// Que-2

let count = 0;
        (function () {
          if (count === 0) {
            let count = 1;
            console.log(count); // What is logged?
          }
          console.log(count); // What is logged?
        })();

// Que-3
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
  }

// Que-4

function outter(L)
{
    function inner(B)
    {
        console.log (`Area of a rectangle : ${L*B}`);
    }
    inner(2);
}
outter(2);

// Que -5



// Que-6
var a = 12;
        (function () {
          alert(a);
        })();


// Que-7
var a = 10;
                var x = (function () {
                  var a = 12;
                  return function () {
                    alert(a);
                  };
                })();
                x();

// Que-8

var globalVar = "xyz";

                (function outerFunc(outerArg) {
                    var outerVar = 'a';
                    
                    (function innerFunc(innerArg) {
                    var innerVar = 'b';
                    
                    console.log(
                        "outerArg = " + outerArg + "\n" +
                      "innerArg = "+ innerArg + "\n" +
                        "outerVar = " + outerVar + "\n" +
                        "innerVar = " + innerVar + "\n" +
                        "globalVar = " + globalVar);
                    
                    })(456);
                })(123);

