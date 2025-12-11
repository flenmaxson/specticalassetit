import Footer from "./Footer";
import Header from "./Header";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
        <Header />
      {children}
      <Footer/>
    </div>
  );
}

export default MainLayout;