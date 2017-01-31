//
/*
 * Ajaxでコンテナを更新できることを確認する。
*/

//---------------------------------------------
//JSON検証用+コンテナ
//---------------------------------------------

var Json_person = React.createClass({
	getInitialState: function(){
        return {data: []};
    },
    componentDidMount: function(){
        console.log("___________Ajax_get___________");
        jQuery.ajax({
            type:   "POST",
            url:    "http://localhost/project1/function/ajax_func.php",
            data:{
                post_data : '1'
            },
            success:function(j_array) {
                console.log("___________Ajax_SUCCESS___________");
                arr = JSON.parse(j_array);
                this.setState({data:arr});
            }.bind(this),//Json_personオブジェクトに変換する。
           error: function(xhr, status, err) {
                console.log("___________Ajax_ERROR___________");
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    render:function() {
        console.log("___________Ajax_Render___________");
		return <Person2 data={this.state.data} ></Person2>
	}
});

//Ajaxでの返りのJSONのオブジェクトは文字列で返ってくるため、
//JSON.parseで連想配列に変換する必要がある。

//データとして連想配列をコンテナに渡すと「this.props.data.map」
//で参照が可能になる。

//jQueryでなくてもサーバーからJSONを返せるようなライブラリ等を使うのが良いかも。

