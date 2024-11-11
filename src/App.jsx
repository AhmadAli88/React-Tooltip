
import './App.css'
import Dashboard from './components/Buttons with Detailed Actions'
import DataTable from './components/DataTable'
import NavigationMenu from './components/Navigation Menus'
import ProductList from './components/Product Features or Description'
import Basic from './components/react-tooltip/Basic'
import SalesChart from './components/SalesChart'
import StatusIcons from './components/StatusIcons'
// import RegistrationForm from './components/FormFields'


function App() {


  return (
   <div>
    <Basic/>
  {/* <RegistrationForm/> */}
  <Dashboard/>
  <DataTable/>
  <SalesChart/>
  <NavigationMenu/>
  <StatusIcons/>
  <ProductList/>
   </div>
  )
}

export default App
