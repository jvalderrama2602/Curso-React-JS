var Saludo = React.createClass({
    render: function(){
        return (
            <div>
                <h1>¡Hola Mundo!</h1>
                <p>Buend día</p>
            </div>
            )
    }
})

ReactDOM.render( <Saludo /> , document.getElementById('mensaje')
);