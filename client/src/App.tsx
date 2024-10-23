import { Routes, Route } from "react-router-dom";
import Login from "./login/login.tsx";
import Register from "./register/register.tsx";
import { AuthContextProvider } from "./context/authContext.tsx";
import { Toaster } from "sonner";
import Home from "./home/home.tsx";
import { VerifyUser } from "./utils/VerifyUser.tsx";

const App = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<VerifyUser />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Register />} />
        </Route>
      </Routes>
      <Toaster />
    </AuthContextProvider>
  );
}

export default App;
