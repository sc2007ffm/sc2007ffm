<?php
$email=$_POST["email"];
$anfrage=$_POST["anfrage"];

$host ="localhost";
$dbname="message";
$username="root";
$password="";

$conn= mysqli_connect($host, $username, $password, $dbname);

if(mysqli_connect_errno()){
 die("Connection error: ". mysqli_connect_errno());   
}

$sql= "INSERT INTO message(email, body)
VALUES(?, ?)";

$stmt =mysqli_stmt_init($conn);

mysqli_stmt_prepare($stmt, $sql);

if( ! mysqli_stmt_prepare($stmt, $sql)){
 die(mysqli_error($conn));
}

mysqli_stmt_bind_param($stmt, "ss",$email, $anfrage);

mysqli_stmt_execute($stmt);

echo "Record saved"









?>