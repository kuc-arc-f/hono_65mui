import { Link, Route, Routes } from 'react-router-dom'
import Head from './components/Head'

// Auto generates routes from files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
const pages = import.meta.glob('./client/*.tsx', { eager: true })

const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/client\/(.*)\.tsx$/)[1]
  return {
    name,
    path: name === 'Home' ? '/' : `/${name.toLowerCase()}`,
    component: pages[path].default,
  }
})
//console.log(routes);
//
export function App() {
  return (
    <>
      <Head />
      <Routes>
        {routes.map(({ path, component: RouteComp }) => {
          return (
          <Route key={path} path={path} element={<RouteComp />} 
          ></Route>
          )
        })}
      </Routes>
    </>
  )
}
/*
<nav>
  <ul>
  <li key="/">
    <Link to={"/"}>home</Link>
  </li>
  </ul>
</nav>
{routes.map(({ name, path }) => {
  return (
    <li key={path}>
      <Link to={path}>{name}</Link>
    </li>
  )
})}
*/