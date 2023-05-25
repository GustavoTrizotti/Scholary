const StudentList = ({ students, title }) => {
    return ( 
        <div className="student-list">
            <h2>{title}</h2>
            { students.map((student) => (
                <div className="student-preview" key={student.id}>
                    <h2>Student: {student.name}</h2>
                    <p>E-mail: {student.email}</p>
                </div>
            )) }
        </div>
    );
}
 
export default StudentList;