import { Redirect } from "react-router";


const Home = () => {
    return (
        localStorage.token ?
            <div className="App-home">
                <h1>This is home page</h1>
                    
            </div>
            :
            <Redirect to='/login' />
    )
}

export default Home;