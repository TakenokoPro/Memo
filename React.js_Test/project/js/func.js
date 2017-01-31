//---------------------------------------------
//コンテナ
//---------------------------------------------
var Person = React.createClass({
	render:function() {
		return <tr>
			<td>{this.props.name}</td>
			<td>{this.props.age}</td>
		</tr>;
	}
});

var TableComp = React.createClass({
	render:function(){
		return <table className="person_table">
			<Person name='一郎' age='20' />
			<Person name='次郎' age='10' />
		</table>;
	}
});
//React.render(<TableComp />,document.getElementById('tableDiv'));
// ↑パラメータの直書きの場合↑ //


//---------------------------------------------
//パラメータの連想配列+コンテナ
//---------------------------------------------

var personData = [{
		name : '一郎',
		age : '20'
	},{
		name : '二郎',
		age : '15'
	},{
		name : '三郎',
		age : '35'
	}
];
var Person2 = React.createClass({
	render:function() {
		var personNodes = this.props.data.map(function(node){
			return <Person name={node.name} age={node.age} />;
		});
		return <table className="person_table">{personNodes}</table>;
	}
});
//React.render(<Person2 data={personData} />,document.getElementById('tableDiv2'));

