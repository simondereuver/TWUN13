import {Route,createBrowserRouter,RouterProvider,createRoutesFromElements, BrowserRouter,Routes} from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Calender from './pages/Calender';
import Error from './pages/Error';
import CreateAccountForm from './pages/CreateAccount';
import LoginPage from './pages/LoginPage';


const App = () => {
  const userToken = localStorage.getItem('token');

  const authenticatedRoutes = (
    <>
      {/* Authenticated user routes */}
      <Route index element={<Home />} />
      <Route path="Calender" element={<Calender />} />
      <Route path="CreateAccount" element={<CreateAccountForm />} />
      {/* Add more routes for authenticated users */}
    </>
  );

  const unauthenticatedRoutes = (
    <>
      {/* Non-authenticated user routes */}
      <Route index element={<Home />} />
      <Route path="Calender" element={<LoginPage />} />
      <Route path="CreateAccount" element={<CreateAccountForm />} />
      <Route path="Login" element={<LoginPage />} />
    </>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          {/* Include RootLayout in both authenticated and unauthenticated routes */}
          {userToken ? authenticatedRoutes : unauthenticatedRoutes}
        </Route>
        <Route path="*" element={<RootLayout />}>
          {/* Controll this path */}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};




/*
const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path = {"/"} element ={<RootLayout/>}>
        <Route index element = {<Home/>}/>
        <Route path ="Calender" element = {<Calender/>}/>
        <Route path="CreateAccount" element = {<CreateAccountForm/>}/>
        <Route path="Login" element = {<LoginPage/>}/>
        <Route path = "*" element = {<Error/>}/>
    </Route>
  )
)



function App() {
  return (
    <RouterProvider router = {router}/>
  );
}

*/
export default App;
