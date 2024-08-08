import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/Home/HomePage";
import Research from "./pages/Research/ResearchPage";
import Master from "./pages/Research/MasterDissertationPage";
import Assignment from "./pages/Research/AssignmentPage"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="research" element={<Research />} />
        <Route path="masters" element={<Master />} />
        <Route path="assignment" element={<Assignment />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
