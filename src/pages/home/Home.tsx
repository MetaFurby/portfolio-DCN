
import { FilterProvider } from "../../context/filter.context";
import { Dashboard } from "./components";

const Home = () => {
  return (
	<FilterProvider>
		<Dashboard />
	</FilterProvider>
  )
}

export default Home