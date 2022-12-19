import Footer from "../footer/Footer";
import Nav from "../nav/Nav";

const Layout = ({ children }) => {
	return (
		<div className="font-Poppins">
			<Nav />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
