<?php

function miniMaxSum($arr) {
    // Sort the array
    sort($arr);
    
    // Calculate the minimum sum by summing the first four elements
    $min_sum = array_sum(array_slice($arr, 0, 4));
    
    // Calculate the maximum sum by summing the last four elements
    $max_sum = array_sum(array_slice($arr, -4));
    
    // Print the results
    echo $min_sum . " " . $max_sum;
}

// Example usage:
$arr = array(1, 3, 5, 7, 9);
miniMaxSum($arr);
?>
