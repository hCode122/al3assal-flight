import LinkContainer from "./LinkContainer"
import LogoSection from "./LogoSection"
const Footer = () => {

    const useCases = {title: 'Use cases', links: [
        {title: 'UI design', url : "#"},
        {title: 'UX design', url : "#"},
        {title: 'Wireframing', url : "#"},
        {title: 'Diagramming', url : "#"},
        {title: 'Brainstorming', url : "#"},
        {title: 'Online Whiteboard', url : "#"},
        {title: 'Team collaboration', url : "#"}
    ]}

    const explore = {title: 'Explore', links: [
        {title: 'Design', url : "#"},
        {title: 'prototyping', url : "#"},
        {title: 'Development features', url : "#"},
        {title: 'Design systems', url : "#"},
        {title: 'Collaboration features', url : "#"},
        {title: 'Design process', url : "#"},
        {title: 'FigJam', url : "#"}
    ]}

    const resources = {title: 'Resources', links: [
        {title: 'Design', url : "#"},
        {title: 'prototyping', url : "#"},
        {title: 'Development features', url : "#"},
        {title: 'Design systems', url : "#"},
        {title: 'Collaboration features', url : "#"},
        {title: 'Design process', url : "#"},
        {title: 'FigJam', url : "#"}
    ]}
    return (
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-44 px-8 h-auto lg:h-[27rem] pb-24 border-t-[1px] border-[#D9D9D9] bg-[#FAFAFA] mt-16">
           <LogoSection />

           <div className="flex flex-col lg:flex-row gap-4 lg:gap-36">
                <LinkContainer data={useCases} />
                <LinkContainer data={explore} />
                <LinkContainer data={resources} />
           </div>
        </div>
    )   
}

export default Footer