<?php

function plusMinus($arr) {
    $n = count($arr);
    $positives = 0;
    $negatives = 0;
    $zeros = 0;

    // Hitung jumlah positif, negatif, dan nol
    foreach ($arr as $value) {
        if ($value > 0) {
            $positives++;
        } elseif ($value < 0) {
            $negatives++;
        } else {
            $zeros++;
        }
    }

    // Hitung rasio
    $positive_ratio = $positives / $n;
    $negative_ratio = $negatives / $n;
    $zero_ratio = $zeros / $n;

    // Cetak hasil dengan presisi 6 desimal
    printf("%.6f\n", $positive_ratio);
    printf("%.6f\n", $negative_ratio);
    printf("%.6f\n", $zero_ratio);
}

// Contoh penggunaan
$arr = array(-4, 3, -9, 0, 4, 1);
plusMinus($arr);
?>
