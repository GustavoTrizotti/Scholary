import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterStudent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [grade, setGrade] = useState(0);
    const [grades, setGrades] = useState([]);
    const [isPending, setIsPending] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setGrades(grades.push(grade.toString().split(", ")));
        setGrades(grades.map(grade => parseInt(grade)));

        const student = { name, email, grades };
        
        setIsPending(true);

        fetch('http://localhost:8000/students', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)
        }).then(() => {
            console.log("New student registered!")
            setIsPending(false);
            navigate("/");
        })
    }

    return ( 
        <div className="register">
            <h2>Register a student</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Name:</label>
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)}/>
                <label>Email:</label>
                <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label>Grades:</label>
                <input type="text" required value={grade} onChange={(e) => setGrade(e.target.value)}/>
                {!isPending && <button>Register Student</button>}
                {isPending && <button disabled>Registering...</button>}
            </form>
        </div>
    );
}
 
export default RegisterStudent;