import { Link } from "react-router-dom";

const StudentList = ({ students, title }) => {
    return ( 
        <div className="student-list">
            <h2>{title}</h2>
            { students.map((student) => (
                <Link to={`/students/${student.id}`} key={student.id}>
                    <div className="student-preview" key={student.id}>
                        <h2><b>Student:</b> {student.name}</h2>
                        <p><b>E-mail:</b> {student.email}</p>
                        <p><b>Overall Grade:</b> { student.grades.reduce((a, b) => a + b) / student.grades.length }</p>
                    </div>
                </Link>
                
            )) }
        </div>
    );
}
 
export default StudentList;