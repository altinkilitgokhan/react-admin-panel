import "./sidebar.scss";
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import VideoSettingsOutlinedIcon from '@mui/icons-material/VideoSettingsOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="top">
                <AdminPanelSettingsOutlinedIcon className="logo"></AdminPanelSettingsOutlinedIcon>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <li>
                        <div className="selectShape"></div>
                        <DashboardCustomizeOutlinedIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <div className="selectShape"></div>
                        <AddCircleOutlineOutlinedIcon className="icon"/>
                        <span>Create New Page</span>
                    </li>
                    <li>
                        <div className="selectShape"></div>
                        <VideoSettingsOutlinedIcon className="icon"/>
                        <span>Manage Pages</span>
                    </li>
                    <li>
                        <div className="selectShape"></div>
                        <DataUsageIcon className="icon"/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <div className="selectShape"></div>
                        <SettingsOutlinedIcon className="icon"/>
                        <span>Settings</span>
                    </li>
                    <li>
                        <div className="selectShape"></div>
                        <AccountBoxOutlinedIcon className="icon"/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <div className="selectShape"></div>
                        <LogoutIcon className="icon"/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}

export default Sidebar