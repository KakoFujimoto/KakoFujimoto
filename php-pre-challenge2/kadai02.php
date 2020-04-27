<?php
$array = [3,2,1,4,15,18,13,99,77,66,1,100,0];
for($i = 0; $i < count($array); $i++){
    for($j = 0; $j < count($array)-1; $j++){
        if ($array[$j] > $array[$j+1]){
            $tmp = $array[$j];
            $array[$j] = $array[$j+1];
            $array[$j+1] = $tmp;
        }
    }
}
print_r('<pre>');
print_r($array);
print_r('</pre>');
