export interface Author{
	id: number;
	name: string;
	role: string;
	linkedln: string;
	github: string;
	yearsOfExperience: number;
	country: string;
	city: string;
	email: string;
	picture: string;
	resume: string;
	bio: string;
	workHistory: WorkHistory[];
	education: Education[];
}

export interface WorkHistory{
	id: number;
	company: string;
	position: string;
	location: string;
	startDate: Date;
	endDate: Date;
	description: string;
}

export interface Education{
	id: number;
	school: string;
	location: string;
	startDate: Date;
	endDate: Date;
	grade: string;
	career: string;
}