$(`#removeButtons`).hide();
$(`#winningButton`).hide();
$(`#badButton`).hide();
var docFrag = document.createDocumentFragment();
function createButtons() {
  var numberOfButtons = document.getElementById("buttonsNumberInput").value;
  var docFrag = document.createDocumentFragment();
  for (let i=0; i < numberOfButtons; i++){
    var elem = document.createElement("input");
    elem.type = 'button';
    elem.value = 'button';
    elem.addEventListener ("click",
    function() {
      var random = Math.floor(Math.random() * numberOfButtons) + 1;
      var theWinner = Math.floor(Math.random() * random) + 1;
      if(random == theWinner) {
        confetti();
        $(`#removeButtons`).show();
        $(`#winningButton`).show();
      } else {
          $(`#removeButtons`).show();
          $(`#badButton`).show();
        }
    });
    docFrag.appendChild(elem);
  }
  document.body.appendChild(docFrag);
}

function removeButtons() {
    location.reload();
}
