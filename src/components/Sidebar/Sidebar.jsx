import "./sidebar.css";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as DashboardLogo } from "../../assets/dashboard-logo.svg";
import { ReactComponent as WalletLogo } from "../../assets/wallet-alt-svgrepo-com.svg";

const Sidebar = () => {
  const location = useLocation();
  return (
    <>
      <ul className="sidebar">
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            <DashboardLogo />
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/wallet"
            className={location.pathname === "/wallet" ? "active" : ""}
          >
            <WalletLogo />
            Wallet
          </Link>
        </li>
        <li>
          <Link
            to="/swap"
            className={location.pathname === "/swap" ? "active" : ""}
          >
            Swap
          </Link>
        </li>
        <li>
          <Link
            to="/bridge"
            className={location.pathname === "/bridge" ? "active" : ""}
          >
            IBC/Bridge
          </Link>
        </li>
        <li>
          <Link
            to="/mint"
            className={location.pathname === "/mint" ? "active" : ""}
          >
            Mint
          </Link>
        </li>
        <li>
          <Link
            to="/stake"
            className={location.pathname === "/stake" ? "active" : ""}
          >
            Stake
          </Link>
        </li>
        <li>
          <Link
            to="/govern"
            className={location.pathname === "/govern" ? "active" : ""}
          >
            Govern
          </Link>
        </li>
        <li>
          <Link
            to="/developer"
            className={location.pathname === "/developer" ? "active" : ""}
          >
            Developer
          </Link>
        </li>
      </ul>

      <ul className="sidebar-mobile">
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            <DashboardLogo />
          </Link>
        </li>
        <li>
          <Link
            to="/wallet"
            className={location.pathname === "/wallet" ? "active" : ""}
          >
            <WalletLogo />
          </Link>
        </li>
        <li>
          <Link
            to="/swap"
            className={location.pathname === "/swap" ? "active" : ""}
          >
            <DashboardLogo />
          </Link>
        </li>
        <li>
          <Link
            to="/bridge"
            className={location.pathname === "/bridge" ? "active" : ""}
          >
            <DashboardLogo />
          </Link>
        </li>
        <li>
          <Link
            to="/mint"
            className={location.pathname === "/mint" ? "active" : ""}
          >
            <DashboardLogo />
          </Link>
        </li>
        <li>
          <Link
            to="/stake"
            className={location.pathname === "/stake" ? "active" : ""}
          >
            <DashboardLogo />
          </Link>
        </li>
        <li>
          <Link
            to="/govern"
            className={location.pathname === "/govern" ? "active" : ""}
          >
            <DashboardLogo />
          </Link>
        </li>
        <li>
          <Link
            to="/developer"
            className={location.pathname === "/developer" ? "active" : ""}
          >
            <DashboardLogo />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;