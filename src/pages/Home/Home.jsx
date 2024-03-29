import { Link } from "react-router-dom"

import css from "./Home.module.css"
import Container from "components/reuse/Container/Container"

import bg from "../../img/bg.jpg"


const Home = () => {
  return (
    <div className={css.home}>
      <Container>
        <div className={css.content}>
          <div className={css.head}>
      <p className={css.label}>ACCESS YOUR CONTACTS ON DESKTOP</p>
      <h1 className={css.title}>Smart Contact</h1>
      <p className={css.slogan}>for power-networkers</p>
      </div>
      <div>
        <ul className={css.list}>
          <li className={css.button}>
            <Link to='/register'>Sign up</Link>
          </li>
          <li className={css.button}>
            <Link to='/login'>Sign in</Link>
          </li>
        </ul>
      </div>
        </div>
      </Container>
      <img className={css.bg} src={bg} alt="bg" />
    </div>
  )
}

export default Home