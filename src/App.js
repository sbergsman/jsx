

// create a component
function App(){

    const name = 'Steve';
    const end = ' !';

    let  message = 'Bye there ';

    if (Math.random() > .5){
        message = 'Hello there ';
    }



    return <h1>{message} {name} {end}</h1>

}

export default App;