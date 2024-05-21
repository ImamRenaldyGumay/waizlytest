<?php

function timeConversion($s) {
    // Ekstrak bagian AM/PM
    $period = substr($s, -2);
    
    // Ekstrak bagian waktu (hh:mm:ss)
    $time = substr($s, 0, 8);
    
    // Pisahkan jam, menit, dan detik
    list($hh, $mm, $ss) = explode(':', $time);
    
    if ($period == 'AM') {
        if ($hh == '12') {
            $hh = '00'; // Ubah 12AM menjadi 00
        }
    } else { // PM
        if ($hh != '12') {
            $hh = str_pad($hh + 12, 2, '0', STR_PAD_LEFT); // Ubah ke format 24 jam
        }
    }
    
    // Gabungkan kembali menjadi format 24 jam
    return $hh . ':' . $mm . ':' . $ss;
}

// Contoh penggunaan:
$s = '07:05:45PM';
echo timeConversion($s); // Output: 19:05:45
?>
