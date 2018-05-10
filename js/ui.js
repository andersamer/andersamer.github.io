function print(str, md=true) {
    if(md) { var txt = marked(str) }
    $txt.append(txt);
}

function println(str, md) {
    print(str, md);
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
                println(str, false);
                println("");
                parseCommand(str);
            }
        }
    });
    
    console.log("Input initialized.");
}
