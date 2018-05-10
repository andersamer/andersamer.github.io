const $body = $("body"), 
      $input = $("#input"),
      $txt = $("#txt"),
      VERSION = "v1.0.0";

window.onload = init();

function init() {
    initInput();
    initCommands();

    println("**Welcome to andersamer.github.io.**");
    parseCommand("ver");
}