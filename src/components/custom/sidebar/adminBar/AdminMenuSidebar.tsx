import {Link} from "react-router-dom";
import {menuItems} from "./sidebarItems.ts";


export const AdminMenuSidebar = () => {
    const links = menuItems.map((item) => {
        return (
            <li key={item.id} className={item.liClassName}>
                <Link to={item.link.to} className={item.link.className} aria-current='page'>
                    <i className={item.inLink.iconClassName}></i>
                    <span className={item.inLink.spanClassName}>{item.inLink.spanText}</span>
                </Link>
            </li>
        )
    })

    return (
        <ul className="nav nav-pills flex-column mb-auto">
            {links}
        </ul>
    );
};

