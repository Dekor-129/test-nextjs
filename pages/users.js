import MainContainer from '../components/MainContainer'
import Link from 'next/link'

export default function Users({users}) {
    return (
        <MainContainer keywords={"users page"}>
            <h1>Users Page</h1>
            <ul>
                {
                    users.map((user)=>(
                        <li key={user.id}>
                            <Link href = {`/users/${user.id}`}>
                                <a>
                                    {user.name}
                                </a>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </MainContainer>
    )
}

export async function getStaticProps(context) {
    const responce = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await responce.json()
    return {
      props: {users}, // will be passed to the page component as props
    }
  }