
import Feature from "@/components/featured/Feature";
import styles from "./homepage.module.css";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";


export default function Home() {
  return (
    <div className={styles.container}>
      <Feature/>
      <CategoryList/>
      <div className={styles.content}>
        <CardList/>
        <Menu/>

      </div>
     
    </div>
  )
}
