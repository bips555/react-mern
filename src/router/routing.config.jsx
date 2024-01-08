import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/landing/home.page.jsx";
import { Error404 } from "../pages/common/error.page.jsx";
import CategoryDetailPage from "../pages/home/category/category-detail.page.jsx";
import CategoryDetailLayout from "../pages/home/category/category-detail.layout.page.jsx";
import {CMSlayout,HomeLayout} from "../pages/layouts/index.jsx"
import AdminDashboard from "../pages/cms/dashboard/dashboard.page.jsx";
import BannerLayout from "../pages/cms/Banner/banner.layout.jsx";
import BannerList from "../pages/cms/Banner/banner-list.page.jsx";
import PermissionCheck from "../pages/common/checkPermission.page.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {LoginPage,ForgetPassword,SetpasswordPage,RegisterPage} from "../pages/home/auth/index.jsx";

const Routing = () => {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="/activate/:token" element={<SetpasswordPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="forget-password" element={<ForgetPassword />} />
            <Route path="category/:slug" element={<CategoryDetailLayout />}>
              <Route index element={<CategoryDetailPage />} />

              <Route path=":childCat" element={<CategoryDetailPage />} />
            </Route>
            <Route path="*" element={<Error404 />} />
          </Route>

          <Route
            path="/admin"
            element={
              <PermissionCheck accessBy={"admin"} Component={<CMSlayout />} />
            }
          >
            <Route index element={<AdminDashboard />}></Route>

            <Route path="banner" element={<BannerLayout />}>
              <Route index element={<BannerList />}></Route>
              <Route path="create" element={<>create component</>}></Route>
            </Route>
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Routing;
