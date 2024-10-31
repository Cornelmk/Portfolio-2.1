type StudentCardProps = {
    student: string;
    school: string;
    degree: string;
    points: number;
    email: string;
}

export default function StudentCard(props: StudentCardProps) {
    const {student, school, degree, points, email} = props
    const handleClick = () => {
        alert('Studentens e-post er: ' + email);
    };
    
    return (
        <div className="card">
            <div className="student-card">
                <h2>{student}</h2>
                <p>{school}</p>
                <p>{degree}</p>
                <p>{points} studiepoeng</p>
                <p>Email: {email}</p>
                <button onClick={handleClick}>Vis e-post</button>
            </div>
        </div>
    )
}