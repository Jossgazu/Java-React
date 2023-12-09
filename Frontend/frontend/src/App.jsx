import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { createBrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Paginas/AuthContext';
import HomePages from './Paginas/HomePages';
import AdminPage from './Paginas/AdminPage';
import Login from './Paginas/Login';
import { CategoryPage, HomePage } from './home/pages';
import QueryCRUD from './Paginas/Create';
// import UpdateQuery from './Paginas/Update';
import DeleteQuery from './Paginas/Delete';
import CreateQuery from './Paginas/Create';

// export const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Login />,
//   },
//   {
//     path: '/home',
//     element: <HomePages />,
//   },
//   {
//     path: '/admin',
//     element: <AdminPage />,
//   },
//   {
//     path: 'category/:category',
//     element: <CategoryPage />,
//   },
//   {
//     path: 'homes',
//     element: <HomePage />,
//   }

// ])

function App() {
  

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/homes" element={<HomePages/>}/>
          <Route path="/admin" element={<AdminPage/>}/>
          <Route path="/category/:category" element={<CategoryPage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path='/crud' element={<QueryCRUD/>}/>
          {/* <Route path="/update/:id" element={<UpdateQuery/>}/> */}
          {/* <Route path="/delete" element={<DeleteQuery/>}/> */}
          <Route path="/create" element={<CreateQuery/>}/>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
{/* <RouterProvider router={router}/> */}