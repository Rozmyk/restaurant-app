import './App.css'
import Layout from './Components/Layout/Layout'
import Header from './Components/Header/Header'
import Menu from './Components/Menu/Menu'

function App() {
	return <Layout 
  header={<Header />}
  menu={<Menu/>}
  
   />
}

export default App
