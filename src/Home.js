import StudentList from "./StudentList";
import useFetch from "./useFetch";

const Home = () => {
    const {data: students, isPending, error} = useFetch('http://localhost:8000/students');

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {students && <StudentList students={students} title="All Students"/>}
        </div>
    );
}
 
export default Home;