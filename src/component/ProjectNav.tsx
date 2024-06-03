import React, {useEffect, useRef, useState} from "react";
import './ProjectNav.scss'

interface Project {
    project_id: number;
    project_name: string;
    project_members: number;
}

interface Props {
    projectList: Array<Project>;
}
const ProjectNav: React.FC<Props> = ({ projectList }) => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(projectList.find(p => p.project_id === 1) || null);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleButtonClick = () => {
        setShowDropdown(!showDropdown);
    };

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
        setShowDropdown(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setShowDropdown(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="projectNavContainer" ref={dropdownRef}>
            <button className="projectNavButton" onClick={handleButtonClick}>
                {selectedProject ? selectedProject.project_name : 'Project not found'}
            </button>
            {showDropdown && (
                <div className="projectList">
                    {projectList.map((project) => (
                        <div key={project.project_id} className="projectItem" onClick={() => handleProjectClick(project)}>
                            <p className="navProjectName">{project.project_name}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
// const ProjectNav = ({projectList}: Props) => {
//     const [showProjects, setShowProjects] = useState(false);
//
//     const handleButtonClick = () => {
//         setShowProjects(!showProjects);
//     };
//     const project = projectList.find(p => p.project_id === 1);
//     return (
//         <button className="projectNavButton">
//             {project ? project.project_name : 'Project not found'}
//         </button>
//
//     )
// }
export default ProjectNav