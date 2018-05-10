function print(str) {
    var txt = marked(str);
    $txt.append(txt);
}

function println(str) {
    print(str);
    $txt.append($("<br>"));
}

function initInput() {
    $input.val("");
    $input.focus();
    
    $input.on("keydown", (event) => {
        if (event.which == 13) { 
            var txt = $input.val();
            var str = txt.trim();
            $input.val("");
            
            if(str != "") {   
                println(str);
                println("");
                parseCommand(str);
            }
        }
    });
    
    console.log("Input initialized.");
}