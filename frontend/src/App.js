import AboutUsMerge from "./AboutUsPage/AboutUsMerge/AboutUsMerge";
import HomepageMerge from "./Homepage/HomepageMerge/HomepageMerge";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WhyusMerge from "./Whyus/WhyusMerge/WhyusMerge";
import SignIn from "./../src/SignInPage/SignIn"
import AddBlog from  "./../src/Dashboard/AddBlog"
import Blogs from "./../src/Blogs/Blogs/Blogs"
import BlogPostOpen from "./../src/Blogs/BlogPostOpen/BlogPostOpen"
import Blogcategory from "./../src/Blogs/BlogCategory/Blogcategory"
import BlogTag from "./../src/Blogs/BlogTag/BlogTag"
import IntegrationPageMerge from "./IntegrationPage/IntegrationPageMerge/IntegrationPageMerge";
import IntegrationDetailMerge from "./IntegrationDetail/IntegrationDetailMerge/IntegrationDetailMerge";
import ZohoServicesMerge from "./ZohoServicesPage/ZohoServicesMerge/ZohoServicesMerge";
import SuccessfulPayment from "./ZohoServicesPage/ZohoServicesShow/SuccessfulPayment";
import CancelPayment from "./ZohoServicesPage/ZohoServicesShow/CancelPayment";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomepageMerge />} />
          <Route path="/aboutus" element={<AboutUsMerge />} />
          <Route path="/whyus" element={<WhyusMerge />} />

          <Route path="/integrations" element={<IntegrationPageMerge />} />
          <Route path="/integrations/:id" element={<IntegrationDetailMerge />} />
          <Route path="/services" element={<ZohoServicesMerge />} />
          <Route path="/success" element={<SuccessfulPayment />} />
          <Route path="/cancel" element={<CancelPayment />} />

          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<AddBlog />} />

          <Route exact path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id/:title" element={<BlogPostOpen />} />
          <Route path="/category/:id" element={<Blogcategory />} />
          <Route path="/tags/:id" element={<BlogTag />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
