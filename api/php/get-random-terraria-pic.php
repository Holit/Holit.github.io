<?php
$rand = rand(1,37); 
$file_url = $_SERVER['DOCUMENT_ROOT'].'/api/files/terraria-imgs/img (' . $rand . ').jpg';
header('Content-type:image/jpeg');
echo file_get_contents($file_url);