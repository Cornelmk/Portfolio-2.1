type ContactProps = {
    email: string;
}

export default function Contact(props: ContactProps) {
    const {email} = props
    return (
        <p>{email}</p>
    )
}