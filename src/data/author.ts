import { Author } from "../models";

export const AuthorData : Author = {
    id: 1,
	name: "Diego Collado Núñez",
	yearsOfExperience: 8,
	country: 'Peru',
	city: 'Lima',
	role: 'Software Engineer',
	email: 'd.r.colladonunez@gmail.com',
	linkedln: 'https://www.linkedin.com/in/diego-collado-nunez-71aa18195/',
	github: 'https://github.com/MetaFurby',
	picture: '/src/assets/author/profilepic.jpg',
	resume: '/src/assets/author/DiegoColladoResume2024.pdf',
	bio: `I’m a very flexible and self-critical developer with more than 7 years of experience working in Software development. I'm experienced working with teams to produce impactful, leading-edge websites that engage customers and deliver business results. My strongest feature as a full-stack developer is my proper use of design patterns to keep the code clean, organized, and maintainable. I always seek to learn new paradigms, methods and ways of thinking that help me improve both as a person and as a professional. I like to work in a team, solve problems, form friendships, and promote positive energies in my workplace.`,
	workHistory: [{
		id: 1,
		company: 'RollKall',
		position: 'Senior Frontend Engineer',
		location: 'Irving, Texas (Remote)',
		startDate: new Date(2022, 5, 1),
		endDate: new Date(2024, 0, 15),
		description: `Utilized modern JavaScript and Typescript frameworks (React and React Native) for developing scalable and maintainable web and mobile applications.
		- Enhanced user experience by implementing responsive web designs and optimizing site performance with Bootstrap and Tailwind.
		- Collaborated with cross functional teams to design, develop, and launch new features for web applications.
		- Boosted web traffic by improving navigation and rectifying bottlenecks by using React Query and Zustand.
		- Worked closely with UX/UI designers to implement visually appealing interfaces that met client requirements.
		- Conducted thorough code reviews ensuring high quality code standards and adherence to best practices.
		`,
	},
	{
		id: 2,
		company: 'EY',
		position: 'Software Engineer',
		location: 'Lima, Peru',
		startDate: new Date(2018, 11, 1),
		endDate: new Date(2022, 5, 15),
		description: `Development of robots (RPA) using Pega Robotics for the automation of administrative processes in banks.
		- Software architecture design for scalable and resilient bank services.
		- Audit of systems and cybersecurity in banks.
		- DBA, functional analyst and QA for the development of an on premise web application.
		- Full stack development of a web application using ASP.NET Razor.
		- Front end development of a revenue analysis web application using React.
		- UI/UX design & Front end development of a responsive web application using Angular 9 with RxJs and Bootstrap.
		- UI/UX design & Front end development of a responsive web application using Angular 12 with RxJs, Nebular and Material Design.
		- Developed a robust, scalable, modular and API centric infrastructure and Web application using NextJS and NodeJS.
		`,
	},
	{
		id: 3,
		company: 'PetroleumUX',
		position: 'Fullstack Developer',
		location: 'London, UK (Remote)',
		startDate: new Date(2016, 3, 1),
		endDate: new Date(2018, 11, 1),
		description: `Full stack development of desktop applications in WPF for geographic and statistical analysis of oil wells.
		- Front end development of microfrontend applications for reservoir reporting made in JQuery and React.
		- Designed and implemented scalable applications for data extraction and analysis.
		- Optimized application performance with efficient coding practices and database management.
		- QA & code reviews according to the standards established in the project.
		- Conducted data modeling, performance and integration testing using Jenkins.
		- Implemented best practices in code quality, ensuring maintainability and readability of software projects.
		- Built databases and table structures for web and desktop applications using PostgreSQL.
		`,
	}
	],
	education: [
		{
			id: 3,
			school: 'Pontificia Universidad Católica del Perú',
			career: 'Informatics Engineering',
			location: 'Lima, Peru',
			grade: 'Bachelor of Science',
			startDate: new Date(2013, 7, 1),
			endDate: new Date(2018, 11, 1)
		}
	]
}