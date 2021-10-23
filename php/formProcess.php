<?php

if(isset($_POST["state"]) && $_POST["state"] != "") {
        die();
}        

$nome = addslashes($_POST["nome"]);
$email = addslashes($_POST["email"]);
$assunto = addslashes($_POST["assunto"]);
$mensagem = addslashes($_POST["mensagem"]);

$to = "ohanaenactusufc@gmail.com";

$body = "Nome: ".$nome."\r\n".
        "E-mail: ".$email."\r\n".
        "Mensagem: ".$mensagem."\r\n";

$header = "From: Contato - Ohana <contato@ohanaenactus.com.br>\r\n".
        "Reply-To: contato@ohanaenactus.com.br\r\n".
        "MIME-Version: 1.0\r\n".
        "Content-type: text/plain; charset=utf-8\r\n";

mail($to, $assunto, $body, $header);

?>