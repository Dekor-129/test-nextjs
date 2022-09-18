import Link from 'next/link'
import classes from '../styles/A.module.css'

export default function A({text, href}) {
  return (
    <Link href= {href}>
        <a className={classes.link}>{text}</a>
    </Link>
  )
}
