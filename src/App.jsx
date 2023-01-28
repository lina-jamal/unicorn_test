import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Shop } from "./pages";
import "./App.css";
import { Footer, Navbar } from "./components";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["DM Sans", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      light: "#f4f7f8",
      main: "#f4f7f8",
      dark: "#f4f7f8",
      contrastText: "#f4f7f8",
    },
    secondary: {
      light: "#f86338",
      main: "#f86338",
      dark: "#f86338",
      contrastText: "#f86338",
    },
    grey: {
      light: "#E0E0E0",
      main: "#E0E0E0",
      dark: "#E0E0E0",
      contrastText: "#E0E0E0",
    },
  },
});

const Root = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Shop />} />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />;
    </ThemeProvider>
  );
}

export default App;
