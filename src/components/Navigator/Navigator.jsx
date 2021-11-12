import { NavLink } from "react-router-dom";
import classes from "./Navigator.module.css"
function Navigator() {
    return (
        <nav className={classes.navigator}>
            <div className={classes.navLinks}>
                <NavLink to="/profile" className={(navData)=>navData.isActive ? classes.activeLink : ''}>Profile</NavLink>
            </div>
            <div className={classes.navLinks}>
                <NavLink to="/dialogues" className={(navData)=>navData.isActive ? classes.activeLink : ''}>Masages</NavLink>
            </div>
            <div className={classes.navLinks}>
                <NavLink to="/news" className={(navData)=>navData.isActive ? classes.activeLink : ''}>News</NavLink>
            </div>
            <div className={classes.navLinks}>
                <NavLink to="/setings" className={(navData)=>navData.isActive ? classes.activeLink : ''}>Setings</NavLink>
            </div>
        </nav>
    )
}
export default Navigator;