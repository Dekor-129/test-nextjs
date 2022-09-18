import classes from '../../styles/User.module.scss'
import MainContainer from '../../components/MainContainer'

export default function User({ user }) {
    return (
        <MainContainer keywords={user.name}>
            <div className={classes.user}>
                <h1>User whith id {user.id}</h1>
                <div>User name is {user.name}</div>
            </div>
        </MainContainer>
    )
}

export async function getServerSideProps({ params }) {
    const responce = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await responce.json()
    return {
      props: {user}, // will be passed to the page component as props
    }
  }