type HeaderProps = {
    student: string;
    degree: string;
    points: number;
}

export default function Header(props: HeaderProps) {
    const {student, degree, points} = props
    return (
        <div>
            <h1>{student}</h1>
            <p>{degree} {points} studiepoeng</p>
        </div>
    )
}