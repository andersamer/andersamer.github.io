function initCommands() {
    let ver = new Command("ver", "Shows the version of the site.", null, (args) => {
        println("*" + VERSION + "*");
    });

    // let exit = new Command("exit", "Closes the site.", null, (args) => {
    //     window.close();
    // });
                           
    let echo = new Command("echo", "Displays text on the screen.", ["string"], (args) => {
        if(args.length != 0) {
            println(args.join(" "));
        }
    });
    
    let help = new Command("help", "Lists all commands and provides documentation for specific commands.", ["command", "w"], (args) => {
        if(args.length > 0) {
            let temp;
            for(var i = 0; i < commands.length; i++) {
                if(args[0] == commands[i].name) {
                    temp = commands[i];
                }
            }
            if(temp) {
                temp.help();
            } else {
                invalidCommandError();
            }
        } else {
            println("List of all current commands... Type help [*command*] for more information.");
            for(var i = 0; i < commands.length; i++) {
                let temp = commands[i];
                println(temp.name.toUpperCase());
            }

        }
    });

    let cls = new Command("cls", "Clears the console.", null, (args) => {
        $txt.empty();
    });

    console.log("Commands initialized.");
}