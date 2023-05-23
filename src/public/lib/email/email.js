


function postData() {

  console.log('YOOO');
  const name = $('#name').val();
  const email = $('#email').val();
  const subject = $('#subject').val();
  const text = $('#text').val();

  if (name.length == 0 || email.length == 0 || subject.length == 0 || text.length == 0) {
    alert('Bitte vollständig ausfüllen');
    return;
  }

  $.post('/email',
  {
    name: name,
    email: email,
    subject: subject,
    text: text
  }, function(data, status) {
    alert('Data: ' + data + '\nStatus: ' + status);
  });
}



/*var xhttp = new XMLHttpRequest();
var body = [document.getElementById("name").getAttribute(),
            document.getElementById("email").getAttribute(),
            document.getElementById("text").getAttribute(),
          ];
/*
var name = document.getElementById("name");
var email = document.getElementById("email");
var subject = document.getElementById("subject");
var text = document.getElementById("text");

name = name.getAttribute();

xhttp.open("POST", "/email", true);
xhttp.send(body);*/
