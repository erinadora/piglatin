$(document).ready(function() {
 //
  $("#translate").click(function(){
    translate();
      });
      
      var latinPig = function(str) {
          var str = str.split(' ');
         	var consonantArray = [];

          for (i = 0; i < str.length; i++) {
            if (/[aeiou]/.test(str[i].charAt(0)) === true) {
              str[i] = str[i] + "ay";

            } else if (/[aeiou]/.test(str[i].charAt(0)) !== true) {
              var letters = str[i].split('');
              for (var j = 0; j < letters.length; j++) {
                if (/[aeiou]/.test(letters[i]) === false) {
                  consonantArray.push(letters[i]);
                } else {
                  break;
                }
              }
              letters.splice(0, consonantArray.length);
              letters.push(consonantArray.join('') + "ay");

              }
              }
              console.log(letters.join(''));
            };

            latinPig("what");

});
