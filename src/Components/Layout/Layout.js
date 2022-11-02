
import styles from "../Layout/Layout.module.css"
function Layout(props) {
  return (
   <>
   <div className={styles.container}>
    {props.header}
    {props.menu}
   </div>
   </>
  );
}


export default Layout;