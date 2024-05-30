import CardList from '@/components/CardList/CardList'
import styles from './blogPage.module.css'
import Menu from '@/components/Menu/Menu'

const BlogPage = () => {
  return (
    <div className={container}>BlogPage
    <h1 className={styles.title}></h1>
    <div className={styles.content}>
        <CardList />
        <Menu />
    </div>
    </div>
    
  )
}

export default BlogPage