// Fetch my GitHub Repos
var username = "andersamer"
var requri   = 'https://api.github.com/users/'+username;
var repouri  = 'https://api.github.com/users/'+username+'/repos';

requestJSON(requri, function(json) {
    if(json.message == "Not Found") {
        $("#repo-container").html("<h5>There was a problem fetching user data.</h5>");
    } else {
        var fullname   = json.name;
        username   = json.login;
        // var aviurl     = json.avatar_url;
        // var profileurl = json.html_url;
        // var location   = json.location;
        // var followersnum = json.followers;
        // var followingnum = json.following;
        var reposnum     = json.public_repos;
        if(fullname == undefined) { fullname = username; }

        var repositories;
        $.getJSON(repouri, function(json) {
            repositories = json;
            outputHTML();
        });

        function outputHTML() {
            var outHTML = "<h3 class=\"col s12\">" + username + "</h3>";

            if(repositories.length === 0) {
                outHTML += "<p>No repos... yet.<i class=\"material-icons\">filter_drama</i></p>";
            } else {
                $.each(repositories, function(index) {
                    outHTML += '<a class=\"col s3 card-panel waves-effect waves-light\" href="'+repositories[index].html_url+'" target="_blank">'+repositories[index].name + '</a></div>';
                })
            }

            $("#repo-container").html(outHTML);
        }
    }
})

function requestJSON(url, callback) {
$.ajax({
    url: url,
    complete: function(xhr) {
    callback.call(null, xhr.responseJSON);
    }
});
}