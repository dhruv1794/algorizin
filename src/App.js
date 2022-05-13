
import './App.css';
import Header from './components/header';
import SideBar from './components/sidebar';
import Title from './components/title';
import Table from './components/table';
import MobileBar from './components/mobileBar';


function App() {
  return (
    <div className="App height-100">
      <Header></Header>
      <div className="grid">
        <div className="hidden md: block col-start-1 col-end-1 sm:block col-start-1 col-end-2  height-100 ">
        <SideBar></SideBar>
        </div>
        <div className="col-start-1 col-end-12  sm:col-start-2">
          <Title title="Inventory"></Title>
         <hr></hr>
         <div className="padding-10">
          <Table></Table>
         </div>
         <div className='absolute inset-x-0  block  sm:hidden'>
           <MobileBar/>
         </div>
        </div>
      </div>

    </div>
  );
}

export default App;
