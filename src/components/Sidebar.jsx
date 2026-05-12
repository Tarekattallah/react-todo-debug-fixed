import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const menuLinks = [
    { 
      icon: "fa-house", 
      title: "Home", 
      path: "/" 
    },
    { 
      icon: "fa-list-check", 
      title: "My Tasks", 
      path: "/todos" 
    },
  ];
  return (
    <aside className={styles.sidebar}>
      <div className="p-4 fw-bold text-white fs-4 border-bottom border-secondary mb-3">
        <i className="fa-solid fa-check-double me-2"></i>Todo Master
      </div>

      <nav>
        {menuLinks.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) =>
              `${styles.navItem} d-flex align-items-center gap-3 ${isActive ? styles.active : ""}`
            }
          >
            <i className={`fa-solid ${item.icon} fs-5`}></i>
            <span className="fs-5">{item.title}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
export default Sidebar;
