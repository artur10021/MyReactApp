import classes from "./Navigator.module.css"
function Navigator() {
    return (
        <nav className={classes.navigator}>
            <div><a>Profile</a>   </div>
            <div><a>Masages</a>  </div>
            <div><a>News</a>  </div>
            <div><a>Setings</a>  </div>
        </nav>
    )
}
export default Navigator;