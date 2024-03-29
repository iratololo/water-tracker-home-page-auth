import css from "./Plug.module.css"

const Plug = () => {
  return (
    <div className={css.plug}>
          <p className={css.quote}>“There’s <span className={css.blue}>nothing better than</span> people talking to each other, sharing best practices, and opening up <span className={css.blue}>communications</span>.”</p>
          <p className={css.author}><span className={css.blue}>Dan Gilbert,</span> Businessman</p>
    </div>
  )
}

export default Plug