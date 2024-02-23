import Footer from "../molecules/Footer";
import Header from "../molecules/Header";
import SideNavbar from "./SideNavbar";
import { useMediaQuery } from 'react-responsive';
import { BrowserRouter} from 'react-router-dom';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = (props: LayoutProps) => {
	const isMobile = useMediaQuery({ query: '(max-width: 767px)' })	
	return (
		<BrowserRouter>
			<div>
				{isMobile && <Header />}
				<div className="flex">
					{!isMobile && <SideNavbar />}
					<div className="w-full">
						{props.children}
					</div>
				</div>
				{isMobile && <Footer />}
			</div>
		</BrowserRouter>
  )
}

export default Layout