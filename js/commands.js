let commands = [];

function initCommands() {
    let ver = new Command("ver", "Shows the version of the program.", null, (args) => {
        println("*" + VERSION + "*");
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

function parseCommand(inp) {
    let str = inp.split(" ");
    let token = str.shift();
    token = token.toLowerCase();
    let args = str;

    let cmd;
    for(var i = 0; i < commands.length; i++) {
        let temp = commands[i];
        if(temp.name == token) {
            cmd = temp;
        }
    }

    if(cmd) {
        if(cmd.func) {
            cmd.func(args);
            println("");
        } else {
            cmd.help();
        }
    } else {
        invalidCommandError();
    }

}

class Command {
    constructor(name, desc, params, func) {
        this.name = name;
        this.desc = desc;
        this.params = params || "No parameters";
        this.func = func;
        commands.push(this);
    }

    help() {
        println(this.desc);
        print("**" + this.name.toUpperCase() + "** ~ ");

        if(typeof this.params == "string") {
            println(this.params);
        } else {
            for(var i = 0; i < this.params.length; i++) {
                print("[*" + this.params[i] + "*] ");
            }
            println("");
        }
    }
}