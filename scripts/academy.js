var displays = document.querySelectorAll("[name='displays']");
var flexdirection = document.querySelectorAll("[name='direction']");
var justifycontent = document.querySelectorAll("[name='justify']");
var alignitems = document.querySelectorAll("[name='alignitems']");


var displayIterator = function (display) {
    try {
        display.addEventListener("change", function ($event) {
            document.querySelector("#exflex").style.display = $event.target.value;
            if ($event.target.value === "flex") {

                document.querySelector("#flex-direction").style.display = "inline";
                document.querySelector("#justify").style.display = "inline";

                var directionIterator = function (direction) {
                    direction.addEventListener("change", function ($event) {
                        document.querySelector("#exflex").style["flex-direction"] = $event.target.value;
                        if ($event.target.value == "column" || $event.target.value == "column-reverse") {
                            document.querySelector("#justify").style.display = "none";
                        } else {
                            document.querySelector("#justify").style.display = "inline";
                        }
                    });
                }

                flexdirection.forEach(directionIterator);

                var justifyIterator = function (justify) {
                    justify.addEventListener("change", function ($event) {
                        document.querySelector("#exflex").style["justify-content"] = $event.target.value;
                    });
                }
                justifycontent.forEach(justifyIterator);

                var alignIterator = function (align) {
                    align.addEventListener("change", function ($event) {
                        document.querySelector("#exflex").style["align-items"] = $event.target.value;
                    });
                }
                alignitems.forEach(alignIterator);

            } else {
                document.querySelector("#flex-direction").style.display = "none";
                document.querySelector("#justify").style.display = "none";
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