import React from "react";
import {
	AboutSection,
	//ArticlesSection,
	ContactSection,
	HeroSection,
	InterestsSection,
	Page,
	ProjectsSection,
	Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
	return (
		<>
			<Seo title="Andy's Developer Bio & Portfolio " />
			<Page useSplashScreenAnimation>
				<HeroSection sectionId="hero" />

				<AboutSection sectionId="about" heading="About Andy Wang" />
				<InterestsSection sectionId="details" heading="Details" />
				<ProjectsSection sectionId="projects" heading="Projects" />
				<ContactSection sectionId="github" heading="Want to Learn More?" />
			</Page>
		</>
	);
}

// <InterestsSection sectionId="details" heading="Details" />
//<ArticlesSection
// 					sectionId="articles"
// 					heading="Latest Articles"
// 					sources={["Medium"]}
// 				/>
