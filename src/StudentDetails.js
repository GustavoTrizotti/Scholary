import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const StudentDetails = () => {
    const { id } = useParams();
    const {data: student, isPending, error} = useFetch("http://localhost:8000/students/" + id)
    const navigate = useNavigate();

    const handleClick = () => {
        fetch("http://localhost:8000/students/" + student.id, {
            method: "DELETE",
        }).then(() => {
            navigate("/");
        })
    }

    return (
        <div className="student-details">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {student && (
                <article className="student-preview">
                    <h2><b>Student:</b> {student.name}</h2>
                    <p><b>E-mail:</b> {student.email}</p>
                    <p><b>Overall Grade:</b> { student.grades.reduce((a, b) => a + b) / student.grades.length }</p>
                    <p><b>Grades:</b> {student.grades.join(", ")}</p>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default StudentDetails;