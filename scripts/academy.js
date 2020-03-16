var displays = document.querySelectorAll("[name='displays']");
var typewrap = document.querySelectorAll("[name='wraptype']");
var flexdirection = document.querySelectorAll("[name='direction']");
var justifycontent = document.querySelectorAll("[name='justify']");
var aligntwo = document.querySelectorAll("[name='alignitems']");

var output = document.getElementById("demo");
var flexChildren = Array.prototype.slice.call(document.querySelectorAll('.flex-child'));
var childCount = document.getElementById('ChildCount');

output.innerHTML = childCount.value;

childCount.oninput = function () {
    output.innerHTML = this.value;
};
// set up change of child counts
childCount.addEventListener('change', function(evt) {
    var count = evt.target.value;
    
    flexChildren.forEach(function(child, i) {
        console.log(child);
        if (i >= count) {
            
            child.classList.add('hide');
        }
        else {
            child.classList.remove('hide');
        }
    });    
});


var displayIterator = function (display) {
    try {
        display.addEventListener("change", function ($event) {
            document.querySelector("#exflex").style.display = $event.target.value;
            if ($event.target.value === "flex") {

                document.querySelector("#flex-direction").style.display = "inline";
                document.querySelector("#justify").style.display = "inline";
                document.querySelector("#wraptype").style.display = "inline";
                document.querySelector("#alignitems").style.display = "inline";

                var wrapIterator = function (wrapito) {
                    wrapito.addEventListener("change", function ($event) {
                        document.querySelector("#exflex").style["flex-wrap"] = $event.target.value;
                    });
                }
                typewrap.forEach(wrapIterator);

                var directionIterator = function (direction) {
                    direction.addEventListener("change", function ($event) {
                        document.querySelector("#exflex").style["flex-direction"] = $event.target.value;
                    });
                }

                flexdirection.forEach(directionIterator);

                var justifyIterator = function (justify) {
                    justify.addEventListener("change", function ($event) {
                        document.querySelector("#exflex").style["justify-content"] = $event.target.value;
                    });
                }
                justifycontent.forEach(justifyIterator);

                
                var alignIterator = function (alignito) {
                    alignito.addEventListener("change", function ($event) {
                        document.querySelector("#exflex").style["align-items"] = $event.target.value;
                    });
                }
               
                aligntwo.forEach(alignIterator);
                
                
            } else {
                document.querySelector("#flex-direction").style.display = "none";
                document.querySelector("#justify").style.display = "none";
                document.querySelector("#wraptype").style.display = "none";
                document.querySelector("#alignitems").style.display = "none";

            }
        });
    } catch (e) {
        console.error(e)
        console.log("display", displays[i]);
        console.log("index", i);
    }
}

displays.forEach(displayIterator);