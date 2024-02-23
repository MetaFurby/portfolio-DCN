import { Link } from 'react-router-dom';
import logo from "../../assets/logos/DCN_Logo_no_background.png";
import { PublicRoutes } from "../../constants";

const SideNavbar = () => {
  return (
	<div className="sticky top-0 grid grid-cols-1 grid-rows-3 h-screen w-[300px] justify-center text-center px-[25px] bg-[#8DA9C4]">
		<div className="w-full">
			<img className="w-[80px] h-[80px] mx-auto mt-[40px]" src={logo} alt="dcn_logo"/>
		</div>
		<div className="grid grid-cols-1 grid-rows-3 w-full h-[250px] font-bold">
			<div>
				<Link className="hover-underline-animation" to={PublicRoutes.HOME}>Home</Link>
			</div>
			<div>
				<Link className="hover-underline-animation" to={PublicRoutes.WORK}>Work</Link>
			</div>
			<div>
				<Link className="hover-underline-animation" to={PublicRoutes.ABOUT}>About me</Link>
			</div>
		</div>
		<div className="w-full flex">
			<div className="relative w-full">
				<p className="absolute bottom-[40px] text-[10px]">@2024 Diego Collado Nunez, All rights reserved</p>
			</div>
		</div>
	</div>
  )
}

export default SideNavbar