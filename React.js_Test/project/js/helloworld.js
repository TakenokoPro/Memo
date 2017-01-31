 
var Hello = React.createClass({
    render: function() {
        return  <div>
            <h1>Hello, world!</h1><hr/>
            <p>description</p>
        </div>;
    }
});
  
React.render(<Hello />, document.getElementById('example'));
 