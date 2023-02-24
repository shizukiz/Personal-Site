$(document).ready(async function() {

    const response = await fetch('https://discordlookup.mesavirep.xyz/v1/user/887013509194473472');
    const data = await response.json();
    document.getElementById("profilepicture").src = data["avatar"]["link"];
    document.getElementById("bannerpicture").src = "" + data["banner"]["link"] + "?size=480";
    document.getElementById("username").innerHTML = data["tag"];
    $('#fullpage').fullpage({
        autoScrolling: (window.innerWidth >= 992),
        scrollHorizontally: true,
        navigation: true,
        keyboardScrolling: true,
        scrollOverflow: false,
        loopBottom: false,
        navigationPosition: 'right',
        anchors:['aboutme', 'projects', 'footerpage']
    });


});

