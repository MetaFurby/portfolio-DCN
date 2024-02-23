import { Project } from "../models";

export const ProjectsData : Project[] = [{
    id: 1,
	name: 'Dynamic Pricing for national banks',
	company: 'EY',
  	duration: '7 months',
  	pictures: ['Ang9dynamicPri1.jpg','Ang9dynamicPri2.jpg','Ang9dynamicPri3.jpg','Ang9dynamicPri4.png','Ang9dynamicPri5.jpg'],
	mainPicture: 'profpicAng9.jpg',
	techstacks: [1,11,12,29,36,30,17,70,21,40,27,28,41,75,59,64,88,14,32,23,58,57,46],
	description: `Developed a dynamic pricing web application to offer different bank products with the best possible benefits for both for the client and the bank's revenue.
	• Worked as a co-leader for the project's development team.
	• Responsible for designing the architecture and product requirements.
	• Created the functional and non-functional requirements for the project in Jira.
	• Joined the frontend team.
	• Worked on UI/UX and architecture design using Figma.
	• Developed new frontend features using AngularJS and Bootstrap.
	• Implemented unit and integration tests with Karma and Jasmine, and used Protractor for E2E tests.
	• Upgraded the Angular version from AngularJS to Angular 9.
`,
},
{
	id: 2,
	name: 'Scalable Dynamic Pricing Web Aplication for woldwide banks',
	company: 'EY',
	duration: '2 years',
	pictures: ['ang12dynamicPri.png','ang12dynamicPri2.png','ang12dynamicPri3.png','ang12dynamicPri4.png','ang12dynamicPri5.png'],
	mainPicture: 'profpicAng12.png',
	techstacks: [1,3,4,11,12,8,29,55,38,35,30,14,15,16,18,26,21,40,77,27,28,59,64,75,89,32,71,23,42,47,48,49,58],
	description: `Developed a flexible dynamic pricing web application capable of horizontal scaling in order to manage different bank products for the costumers, with more profitable rates, and establish a fast and easy workflow to process different product orders.
	• Divided the product into different domain branches (DDD), using a single development squad for each branch.
	• Worked on Architecture and UX design.
	• Worked as Product Owner.
	• Worked in Frontend development.
	• Created the functional and non-functional requirements for the project using Azure devops board.
	• Contributed in designing the software's architecture, data schema and coding standards.
	• Created the database using MongoDB
	• Worked on the backend by creating microservices in NodeJS and ExpressJS.
	• Created the frontend project in Angular 11 and later upgraded it to version 13 with SASS, Material Design and Nebular for styling.
	• Evaluated customers demands and feedback.
	• Took part in designing the web's wireframes and prototypes using Figma.
	• Led the frontend and backend teams for the project.
	• Did several code reviews, testing, established new standards for the code, configured pipelines for the frontend projects continuous integration into Azure Cloud and Bitbucket.
	• Used SonarCube for code analysis and testing.
	• Worked with Azure DevOps cloud services.
	`,
},
{
	id: 3,
	name: 'Web application for revenue and product administration',
	company: 'EY',
	duration: '7 months',
	pictures: ['aspManagement.png', 'aspManagement2.png', 'aspManagement3.png', 'aspManagement4.png', 'aspManagement5.png'],
	mainPicture: 'profpicAsp.png',
	techstacks: [62, 33,90,68,10,5, 11, 12, 14,88, 17,21, 42],
	description: `Developed a web application connected to a Power BI application in charge of the administration of different bank products and analise the overall revenue using multiple charts and tables.
	• In charge of the fullstack development of the web application and database schema.
	• Used ASP.NET Core (C#) for the web development and MySQL for the database.
	• Responsible for stablishing the connection between the web application and the PowerBI application.
	• Deployed the website into the client's physical server with an IIS configuration.
	• Created SSRS reports.
	• Created unit tests and integration tests with NUnit.
	• Used advance coding technique like Dependency Injection to decouple classes, and design patterns like Factory, Proxy and Observer.
	• Implemented middleware for profiling and tracking the website operations.
	`,
},
{
	id: 4,
	name: 'Development of robots (RPA) for the automation of administrative processes in banks',
	company: 'EY',
	duration: '9 months',
	pictures: ['rpa1.png'],
	mainPicture: 'rpa1.png',
	techstacks: [45,10,33,91,44,15,56,57],
	description: `Developed and deployed several RPA programs to run in a bank and automate several administrative processes.
	• Responsible for full-stack development as well as the deployment and installation process of the application.
	• Used Pega Robotics (C#) framework for the development, and Docker to simulate the environment and test the programs.
	• Developed several small RPA applications using Pega Robotics (C#) that accessed and extracted information from the client's administration websites.
	• Tested the processes with NUnit and mocked websites.
	• Deployed the RPA applications into the client's physical server.
	• Developed RPA applications using Pega Robotics.
	• Improved .NET proficiency, multithreaded programming proficiency and testing.
	`,
},
{
	id: 5,
	name: 'System and security audit',
	company: 'EY',
	duration: '3 months',
	pictures: [],
	mainPicture: 'audit.webp',
	techstacks: [2,6,43,8,11,20,19,32,57],
	description: `Evaluated the current security status of a bank's information system for storing and managing different product transactions and a web application developed in AngularJS and Node.js.
	• Identified security problems and gaps, as well as system weaknesses.
	• Analysed the code written in Java and JavaScript (React).
	• Analysed the database created in Oracle.
	• Complied with internal organization security policies.
	• Complied with external regulatory requirements.
	• Determined if security training is adequate.
	• Identified unnecessary resources.
	• Improved cybersecurity, Oracle, React and Java security practices.
`,
},
{
	id: 6,
	name: 'Revenue Management SaaS For Banks',
	company: 'EY',
	duration: '1 year, 10 months',
	pictures: ['revenueNext.png', 'revenueNext2.png'],
	mainPicture: 'revenueNext.png',
	techstacks: [2,52,3,55,4,8,29, 11,12,38,79,84,13,39,14,20,25,21,23,31,32,42,88],
	description: `Worked in a project for analytics and massive data management related to a bank's full revenue.
	• Managed the project using Azure DevOps cloud service.
	• Worked as a full stack developer.
	• Used Node.js for the backend, React for the frontend and MongoDB for the database.
	• Created unit and integration test with Jest.
	• Handled MongoDB interaction using Mongoose.
	• Used Redux for global state management.
	• Upgraded the project from React version 16.0 into React 17.0 adding utility hooks.
	• Ported the project into Next.js framework improving the performance, SEO and adding SSR features.
	`,
},
{
	id: 7,
	name: 'UI Components Library using React and Stencil',
	company: 'EY',
	duration: '4 months',
	pictures: ['stencilLib.png', 'stencilLib2.png', 'stencilLib3.png', 'stencilLib4.png', 'stencilLib5.png'],
	mainPicture: 'profpicStencil.png',
	techstacks: [2,65,8,11,12,38,69,87,34,14,20,25,30,58, 59,60, 61],
	description: `Created a library of reusable, flexible and customizable UI components using Stencil, Tailwind and React.
	• Improved UX Design and prototyped it using Figma, Photoshop and Illustrator.
	• Created unit tests for each component using Jest.
	• Used Storybook for testing and documentation of the library.
	• Deployed the library into Google Cloud.
	• Integrated the library into Angular and React projects.
	`,
},
{
	id: 8,
	name: 'Scalable Pricing Command Center Web Aplication',
	company: 'EY',
	duration: '6 months',
	pictures: ['angCommand1.png','angCommand2.png'],
	mainPicture: 'angCommand1.png',
	techstacks: [1,29,11, 12, 13,14, 18,75, 21, 23, 27, 28,88,30,40,42,49],
	description: `Created an Angular application for Pricing Command Center in a bank.
	• Made the Pricing Command Center application a an autonomous configurable web application using the Stencil styled components library.
	• Created unit and integration tests using Karma and Jasmine.
	• Used bootstrap to set the global theme of the application.
	• Deployed the application into Azure cloud, and created a CI/CD pipeline using Azure DevOps.
	• Used a clean architecture approach.
	`,
},
{
	id: 9,
	name: 'Officer Agency Portal',
	company: 'RollKall',
	duration: '1 year, 3 months',
	pictures: ['rkPortal.png', 'rkPortal2.png', 'rkPortal3.png', 'rkPortal4.png', 'rkPortal5.png', 'rkPortal6.png', 'rkPortal7.png', 'rkPortal8.png', 'rkPortal9.png', 'rkPortal10.png', 'rkPortal11.png', 'rkPortal12.png', 'rkPortal13.png', 'rkPortal14.png', 'rkPortal15.png'],
	mainPicture: 'profpicPortal.png',
	techstacks: [2,51,8,11,12,36,13,14,84,39,75,78,18,19,21,23,26,31,32,42,88],
	description: `A website made in React designed to manage off-duty tasks for police officer agencies in the US which included several features to streamline and organize assignments efficiently.
	I worked using JavaScript, SASS, HTML/CSS, Webpack, Bootstrap, Figma and Jira for all the tasks and features assigned to me. I also conducted several code reviews to promote the use of design patterns across the app.
	I added several new features and improved older ones for this website such as the following:
	• Improved the Task Assignment and Scheduling module by adding modern caching techniques when rendering long tables with a lot of data.
	• Improved Payment and Invoicing by adding instant payments and scheduled payments.
	• Redesigned and implemented a new Feedback and Ratings module for the client users using new Bootstrap features.
	• Created a new Reporting and Analytics module to make the code more scalable and reusable.
	• Updated the User Authentication and Profiles module with Webpack to remove vulnerabilities and become SOC 2 certified.
	• Improved Mobile Compatibility by adding responsive behavior with SASS and Bootstrap.
	• Added new features to the microfrontend applications written in Vue.
	• Added feature flags to have more control over new features released to production.
	• Created Cypress E2E tests.
	`,
},
{
	id: 10,
	name: 'Police Officer Mobile and Web Portal',
	company: 'RollKall',
	duration: '4 months',
	pictures: ['rkOfficer.png', 'rkOfficer2.png', 'rkOfficer3.png', 'rkOfficer4.png', 'rkOfficer5.png', 'rkOfficer6.png', 'rkOfficer7.png', 'rkOfficer8.png', 'rkOfficer9.png', 'rkOfficer10.png'],
	mainPicture: 'profpicOfficer.png',
	techstacks: [2,37,29,11,12,87,34,14,15,18,19,75,21,23,67,72,69,85,86,26,42,49,88],
	description: `The purpose of this project was to port an existing mobile application made in React Native into a new modern website that would be used by police officers to apply for new jobs, manage earnings, view their current schedule with job details and call off jobs when needed.
	I worked using Jira, Docker, Git Copilot, Typescript, HTML/CSS, Javascript Tailwind CSS with React and React Native Frameworks. I also conducted several code reviews to my teammates. We implemented the project from scratch using pnpm. I implemented several features such as the following:
	• The Job History, Agenda and Daily Schedule View. Here I used caching and pagination techniques with React Query to implement an infinite scrolling behavior similar to Google Calendar. This improved the performance a lot by rendering the current selected month data only.
	• Persistent Data. Here I used Zustand to have global access storage for the filter state and other features such as the theme, user data, etc.
	• Components Library with high customization and reusability. I create several customizable components in React that were used across the app, allowing free style customization using Tailwind CSS.
	• Created reusable Query Wrappers to allow custom API call across the app. I extended the React Query library by using wrappers and custom hooks to improve their usability and keep the code more clean.
	• Created Storybooks to test the design and logic of every component
`,
},
{
	id: 11,
	name: 'FocusRE',
	company: 'PetroleumUX',
	duration: '2 years, 2 months',
	pictures: [],
	mainPicture: 'wells.jpg',
	techstacks: [50,33,2,80,8,9,10,81,44,11,12,14,54,68,56,20,76,21,23,25,30,42,73,74,88,71,46,57],
	description: `Worked as a full-stack developer of a desktop application in WPF for geographic and statistical analysis of oil wells.
	• Did QA testing y code reviews according to the standards established in the project.
	• Used C# and XAML (WPF).
	• Applied a test-driven development (Unit tests were developed first with NUnit).
	• Checked for antipatterns and ways to improve the code using design patterns.
	• Managed the deployment and testing of the application using Git, Perforce and Jenkins.
	• Created SSRS reports.
	• Managed packages with Nuget.
	• Applied the SOLID and DRY principles to the code.
	• Made refactorings and performance improvements.
	• Implemented a microfrontend application in JQuery to manage the reservoirs.
	• Implemented a microfrontend application in React to replace the SSRS reporting module.
`,
},
{
	id: 12,
	name: 'Ventitas Home ECommerce',
	company: 'Freelance',
	duration: '1 year',
	pictures: ['ventitas1.png', 'ventitas2.png', 'ventitas3.png', 'ventitas4.png', 'ventitas5.png', 'ventitas6.png', 'ventitas7.png', 'ventitas8.png', 'ventitas9.png', 'ventitas10.png', 'ventitas11.png', 'ventitas12.png', 'ventitas13.png', 'ventitas14.png'],
	mainPicture: 'profpicVentitas.png',
	techstacks: [52,2,3,8,11,12,38,14,22,25,30,32,39,63,82,42,58,59,88],
	description: `An e-commerce website I created for a friend. I used NextJS to support server side rendering and deliver a smoother user experience. I used SASS to create all the styles applied to the components. This is a serverless website using a CMS called Sanity which is used to manage the full content of the website.`,
},
{
	id: 13,
	name: 'KPI Performance Tracking and Analysis',
	company: 'Freelance',
	duration: '3 months - present',
	pictures: ['kpi1.png', 'kpi2.png', 'kpi3.png', 'kpi4.png'],
	mainPicture: 'profpicKpi.png',
	techstacks: [53,51,29,3,55,4,11,12,34,14,87,75,84,18,19,69,72,67,25,26,42,49,58,59,57,71,88],
	description: `Web application in NuxtJS designed to help businesses track, analyze, and report on their key performance indicators. Beneficial for monitoring organizational performance and making data-driven decisions. Still under development.`,
},
{
	id: 14,
	name: 'Automatic 3D scenes generator using natural language as input',
	company: 'Thesis Project',
	duration: '1 year, 6 months',
	pictures: [],
	mainPicture: 'thesis.png',
	techstacks: [6,7,9,66,73,83,57],
	description: `Developed project using C++, OpenGL and machine learning libraries (Tensorflow and Dynet).
	• Designed and created an application capable of producing 3D scenes by processing a small description or sentence.
	• Collected and cleaned data of 3D models and scenes using Blender.
	• Collected and cleaned data of vectorial animations using Blender.
	• Trained neural networks to identify different 3D models and associate them with a subset of animations and words using Dynet.
	• Trained a neural network to associate animations with different words using Dynet.
	• Applied natural language processing algorithms to clean and process the input introduced by the user using Tensorflow.
	• Used a machine library called Pinochio to auto-generate skeletons for the different 3D models.
	• Used 3D graphics libraries to control animation and 3D models distribution, mainly OpenGL.`,
},
];