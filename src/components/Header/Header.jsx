import classes from "./Header.module.css";
function Header (){
    return(
        <header className={classes.header}>
        <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" 
        alt="" >
        </img>
        </header>
    );
}
export default Header;