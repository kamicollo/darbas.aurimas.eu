<?php

$db = new PDO('mysql:host=localhost;dbname=aurimas_opendata', 'aurimas_opendata', 'windows');
$stmt = $db->prepare("INSERT INTO sodra (mok_kodas, dr_kodas, skaicius, data) VALUES (:mok_kodas, :dr_kodas, :skaicius, :data)");

while(($data = fgetcsv(STDIN)) != false) {
	$stmt->bindValue(':mok_kodas', $data[0]);
	$stmt->bindValue(':dr_kodas', $data[1]);
	$stmt->bindValue(':skaicius', $data[2]);
	$stmt->bindValue(':data', $data[3]);
	$date = $data[3];
	$stmt->execute();
}

$s = $db->prepare('INSERT INTO sodra_summary (date, total) SELECT data, sum(skaicius) FROM sodra WHERE data = ? GROUP BY data');
$s->bindValue(1, $date);
$s->execute();



