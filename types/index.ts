export interface LayoutProps {
    children: React.ReactNode
}

export interface ProjectFeatureProps  {
	pageTitle?: string;
	slug?: string;
	featured?: boolean;
	title: string;
	subtitle: string;
	description: string;
	imageUrl: string;
	reverse?: boolean;
	reverseColumn?: boolean;
	color?: string;
};

export interface NavgationDark{
	dark?: boolean;
}


export interface ServicesGlobeProps{
	circleWithDot?: boolean;
	doubleCircle?: boolean;
	sphereGrid?: boolean;
	heading: string;
	paragraph: string;
	subheading: string;
	subparagraph: string;

}