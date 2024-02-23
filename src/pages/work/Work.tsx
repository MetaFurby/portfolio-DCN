import { Navigate, Route } from 'react-router-dom';
import { PublicRoutes } from '../../constants';
import RoutesWithNotFound from '../../utilities/RoutesWithNotfound';
import ProjectList from './views/ProjectList';
import ProjectView from './views/ProjectView';
import { FilterProvider } from '../../context/filter.context';

const Work = () => {
  return (
	<RoutesWithNotFound>
		<Route path="/" element={<Navigate to={PublicRoutes.PROJECTLIST} />} />
		<Route path={PublicRoutes.PROJECTLIST} element={
			<FilterProvider>
				<ProjectList />
			</FilterProvider>} 
		/>
		<Route path={PublicRoutes.PROJECT} element={<ProjectView />} />
  	</RoutesWithNotFound>
  )
}

export default Work