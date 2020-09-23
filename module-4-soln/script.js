/*
Solution of assignment 4:

Expected output:

Hello Yamraj
Good Bye Jaan
Good Bye Jini
Good Bye Jaanu
Hello Keshav
Hello Frenchi
Hello Sagar
Hello logan
Hello Laura
Good Bye Jim
*/

(function() {
    var names = ["Yamraj", "Jaan", "Jini", "Jaanu", "Keshav", "Frenchi", "Sagar", "logan", "Laura", "Jim"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
