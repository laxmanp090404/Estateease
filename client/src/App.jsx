
import Home from './routes/home/home'
import {createBrowserRouter,RouterProvider,Route,Link} from 'react-router-dom'
import Listpage from './routes/listpage/Listpage'
import Layout from './components/layout/layout'
import SinglePage from './routes/singlepage/SinglePage'
function App() {

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/list",
        element:<Listpage/>
      }
      ,{
        path:"/:id",
        element:<SinglePage/>
      }

    ]
  },
])
  return (
    // <div className="layout">
    //   <div className="navbar">
    //   <Navbar/>
    //   </div>
    //   <div className="body">
    //     <Home/>
    //   </div>
    //   <div className="footer">

    //   </div>
    // </div>
    <RouterProvider router={router}/>
  )
}

export default App
