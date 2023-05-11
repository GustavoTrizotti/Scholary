import { useState } from "react";

const Home = () => {
    const [students, setStudents] = useState([
        { id: 1, name: 'Gustavo Trizotti', email: 'gustavo@email.com' },
        { id: 2, name: 'Teste', email: 'teste@email.com' },
    ]);
    return ( 
        <div className="home">
            { students.map((student) => (
                <div className="student-preview" key={student.id}>
                    <h2>Student: {student.name}</h2>
                    <p>E-mail: {student.email}</p>
                </div>
            )) }
        </div>
    );
}
 
export default Home;