<?php
/*https://api.telegram.org/bot1550685979:AAFycR7vVmZkvMW50oeibv-GSQL6wQ_JU8k/getUpdates*/
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
 
//в переменную $token нужно вставить токен, который нам прислал @botFather
$token = "1550685979:AAFycR7vVmZkvMW50oeibv-GSQL6wQ_JU8k";
 
//нужна вставить chat_id (Как получить chad id, читайте ниже)
$chat_id = "-577391072";
 
//Далее создаем переменную, в которую помещаем PHP массив
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  
);
 
//При помощи цикла перебираем массив и помещаем переменную $txt текст из массива $arr
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

//Осуществляется отправка данных в переменной $sendToTelegram
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
 
//Если сообщение отправлено, напишет "Thank you", если нет - "Error"
if ($sendToTelegram) {
  header('Location: index.html');
} else {
  echo "Error";
}
?>