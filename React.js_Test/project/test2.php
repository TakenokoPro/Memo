<!DOCTYPE html>
<html>
<!-- head  -->
<head>
	<meta charset="UTF-8" />
	<title>React.js TestPage</title>
	<link rel="stylesheet" type="text/css" href="./css/style.css">
	<script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
	<script src="https://fb.me/react-0.13.2.js"></script>
    <script src="https://fb.me/JSXTransformer-0.13.2.js"></script>
</head>
<!-- body -->
<body>
	<span id="tableDiv">aaaaaaa</span>
	<script type="text/jsx" src="./js/func.js"></script>
	<script type="text/jsx" src="./js/ajax_test.js"></script>
	<script type="text/jsx">
		console.log("___________Script_START___________");
		 React.render(<Json_person></Json_person>,document.getElementById('tableDiv'));
	</script>
</body>
</html>