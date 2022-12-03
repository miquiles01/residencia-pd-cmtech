import './styles.css'

export const LayoutComponentes = (props) => {
    return (
        <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            {props.children}
          </div>
          </div>
            </div>
    )
}