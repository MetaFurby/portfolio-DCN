export enum techType {
	frontend = 'Frontend',
	backend = 'Backend',
	mobile = 'Mobile',
	programmingLanguage = 'Programming Language',
	database = 'Database',
	styling = 'Styling',
	design = 'Design',
	versionControl = 'Version Control',
	packageManager = 'Package Manager',
	bundler = 'Bundler',
	cloud = 'Cloud',
	devops = 'DevOps',
	testing = 'Testing',
	libraries = 'Libraries',
	cms = 'CMS',
	other = 'Other'
}

export interface TechTypeModel {
	name: techType;
    icon: JSX.Element;
}

export interface TechStack {
  id: number;
  name: string;
  image: string;
  yearsOfExperience?: number;
  type: techType;
}