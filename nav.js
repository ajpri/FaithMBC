function hashHandler() {
          console.log('The hash has changed!');
          var hash = location.hash;
          if(hash=="#doctrine"){
            var client = new XMLHttpRequest();
            client.open('GET', '/doctrine.html');
            client.onreadystatechange = function() {
              document.getElementById("content").innerHTML=client.responseText;
            }
            client.send();
          }else if(hash == "#history"){
            var client = new XMLHttpRequest();
            client.open('GET', '/history.html');
            client.onreadystatechange = function() {
              document.getElementById("content").innerHTML=client.responseText;
            }
            client.send();
          }else{
            document.getElementById("content").innerHTML="";
          }
        }

        window.addEventListener('hashchange', hashHandler, false);
