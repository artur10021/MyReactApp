import classes from "./Navigator.module.css"
function Navigator() {
    return (
        <nav className={classes.navigator}>
            <div><a href="/profile">Profile</a> </div>
            <div><a href="/dialogues">Masages</a> </div>
            <div><a href="/news">News</a> </div>
            <div><a href="/setings">Setings</a> </div>
        </nav>
    )
}
export default Navigator;