<?php 
// ambil database
// dapatkan data yang disubmit oleh user
$username = $_POST['username'];
$password = $_POST['password'];

// membandingkan apakah username dan password benar
// jika benar diarahkan ke dashboard
// kalau salah disuruh login lagi atau diarahkan ke halaman forgot password
echo('Username : ' . $username);
echo('Password : ' . $password);
?>