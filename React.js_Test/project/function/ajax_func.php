<?php 

$data = array();
$post_data = 1; 
//$_POST['post_data'];

$connect_pram = mysql_connect('localhost','root','');
$db = mysql_select_db('reactjs_test',$connect_pram);
$sql = "SELECT * FROM test1 WHERE sex = $post_data";
$res = mysql_query($sql,$connect_pram);

while ($row = mysql_fetch_array($res)) {
    $data[] = array(
        'name' => $row["name"],
        'age' => $row["age"],
        'sex' => $row["sex"],
    );
}
mysql_close($connect_pram);
//header('Content-Type: application/json');
echo json_encode($data);

?>