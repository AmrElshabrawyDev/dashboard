import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "./components/common/Sidebar";
// import Dashboard from "./pages/Dashboard";
// import Team from "./pages/Team";
// import Invoices from "./pages/Invoices";
// import Contacts from "./pages/Contacts";
// import Bar from "./pages/BarChart";
// import Form from "./pages/Form";
// import Line from "./pages/LineChart";
// import Pie from "./pages/PieChart";
// import FAQ from "./pages/FAQ";
// import Geography from "./pages/GeographyChart";
// import Calendar from "./pages/Calendar";
// import AppRouter from "./routes/AppRouter";

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Navbar />
            <Outlet />
            {/* <Routes> */}
            {/* <Route path="/" element={<Dashboard />} /> */}
            {/* <Route path="/team" element={<Team />} /> */}
            {/* <Route path="/contacts" element={<Contacts />} /> */}
            {/* <Route path="/invoices" element={<Invoices />} /> */}
            {/* <Route path="/form" element={<Form />} /> */}
            {/* <Route path="/bar" element={<Bar />} /> */}
            {/* <Route path="/pie" element={<Pie />} /> */}
            {/* <Route path="/line" element={<Line />} /> */}
            {/* <Route path="/pie" element={<Pie />} /> */}
            {/* <Route path="/faq" element={<FAQ />} /> */}
            {/* <Route path="/geography" element={<Geography />} /> */}
            {/* <Route path="/calendar" element={<Calendar />} /> */}
            {/* </Routes> */}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
export default App;
