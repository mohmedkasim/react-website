import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFlask, FaPoo } from 'react-icons/fa';

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 flex flex-col w-16 h-screen m-0 shadow-lg bg-primary text-secondary">
            <SideBarIcon icon={<FaFlask size="28" />} text="Home Page"/>
            <div className="my-3"/>
            <SideBarIcon icon={<BsPlus size="32" />} text=""/>
            <SideBarIcon icon={<BsFillLightningFill size="20" />} text=""/>
            <SideBarIcon icon={<FaPoo size="20" />} text=""/>
            <SideBarIcon icon={<BsGearFill size="20" />} text=""/>
        </div>
    )
};

const SideBarIcon = ({ icon, text = 'tooltip 💡'}) => (
        <div className="sidebar-icon group">
            {icon}
            <span class="sidebar-tooltip group-hover:scale-100">
                {text}
            </span>
        </div>
);


export default SideBar;