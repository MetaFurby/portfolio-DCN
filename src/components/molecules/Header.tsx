import { Link } from 'react-router-dom';
import logo from '../../assets/logos/DCN_Logo_no_background.png';
import { PublicRoutes } from '../../constants';

const Header = () => {
  return (
	<div className="sticky top-0 z-20 h-[100px] bg-[#8DA9C4] w-full">
		<img className="absolute w-[60px] h-[60px] m-[20px]" src={logo} alt="dcn_logo"/>
		<div className="absolute right-[20px] flex top-[50%] translate-y-[-50%] gap-[20px] font-bold">
			<div>
				<Link className="hover-underline-animation" to="/">Home</Link>
			</div>
			<div>
				<Link className="hover-underline-animation" to={PublicRoutes.WORK}>Work</Link>
			</div>
			<div>
				<Link className="hover-underline-animation" to={PublicRoutes.ABOUT}>About me</Link>
			</div>
		</div>
	</div>
  )
}

export default Header