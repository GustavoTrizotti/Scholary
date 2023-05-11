const Home = () => {

    const handleClick = (e) => {
        console.log("You clicked me!", e.type);
    }

    const handleClickAgain = (name, e) => {
        console.log("Hello " + name, e.target);
    }

    return ( 
        <div className="home">
            <h2>Home page</h2>
            <button onClick={handleClick}>Click me!</button>
            <button onClick={(e) => handleClickAgain('Trizotti', e)}>Click me again!</button>
        </div>
    );
}
 
export default Home;