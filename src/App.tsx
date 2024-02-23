import { Suspense, lazy } from "react"
import { Navigate, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from "./components/organisms/Layout"
import store from "./redux/store"
import RoutesWithNotFound from "./utilities/RoutesWithNotfound";
import { PublicRoutes } from "./constants";
import Spinner from "./components/atoms/Spinner";

const About = lazy(() => import('./pages/about/About'));
const Home = lazy(() => import('./pages/home/Home'));
const Work = lazy(() => import('./pages/work/Work'));

function App() {
  return (
    <>
		<Suspense fallback={<Layout><div className="flex justify-center w-full mt-20px"><Spinner /></div></Layout>}>
			<Provider store={store}>
				<Layout>
					<RoutesWithNotFound>
						<Route path="/" element={<Navigate to={PublicRoutes.HOME} />} />
						<Route index path={PublicRoutes.HOME} element={<Home />} />
						<Route path={PublicRoutes.ABOUT} element={<About />} />
						<Route path={`${PublicRoutes.WORK}/*`} element={<Work />} />
					</RoutesWithNotFound>
				</Layout>
			</Provider>
		</Suspense>
    </>
  )
}

export default App
