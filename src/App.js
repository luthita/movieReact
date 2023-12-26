import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path={`${process.env.PUBLIC_URL}/`} element={< Home />} />
            <Route path={`${process.env.PUBLIC_URL}/movie/:id`} element={ <Detail />} />
        </Route>
)
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
