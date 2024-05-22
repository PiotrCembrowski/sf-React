import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { check_user } from "../utils/get_logged_in_user";
import { queryClient } from "../lib/query_client";

function MainNavigation() {
  const [is_logged_in, setIs_logged_in] = useState(null);

  const { data } = useQuery({
    queryKey: ["nav"],
    queryFn: check_user,
    onSuccess: queryClient.invalidateQueries({ queryKey: ["nav"] }),
  });

  useEffect(() => {
    if (data == 401) setIs_logged_in(false);
    if (data == 200) setIs_logged_in(true);
    if (is_logged_in == false) console.log("not logged in");
    if (is_logged_in == true) console.log("user is logged in");
  }, [is_logged_in, data]);

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="pricing"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Pricing
          </NavLink>
        </li>
        <li></li>
      </ul>
      <ul>
        {!is_logged_in && (
          <li>
            <NavLink
              to="signin"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Sign In
            </NavLink>
          </li>
        )}
        {!is_logged_in && (
          <li>
            <NavLink
              to="signup"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Sign Up
            </NavLink>
          </li>
        )}
        {is_logged_in && (
          <li>
            <NavLink
              to="admin"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Admin
            </NavLink>
          </li>
        )}
        {is_logged_in && (
          <li>
            <a
              href="http://127.0.0.1:5000/logout"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Sign Out
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default MainNavigation;
