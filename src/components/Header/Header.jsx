import style from './Header.module.css';
import Layout from '../Layout';
import Logo from './Logo';
import Searh from './Search';
import Auth from './Auth';
import Heading from './Heading';

export const Header = props => {
  <header className={style.header}>
    <Layout>
      <div className={style.gridContainer}>
        <Logo/>
        <Heading text="Заголовок" />
        <Searh/>
        <Auth auth=""/>
      </div>
    </Layout>
  </header>;
};
