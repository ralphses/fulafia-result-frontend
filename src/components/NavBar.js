import React from "react";
import { useNavigate } from "react-router";
import logo from "../ful3.png";
// Initialization for ES Users
import { Collapse, Ripple, initTE } from "tw-elements";

function Navbar() {
  initTE({ Collapse, Ripple });
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("loogedIn");
    navigate("/login");
  };

  const isLoggedIn = localStorage.getItem("loogedIn");

  return (
    <nav
      class="relative flex w-full items-end justify-between bg-yellow-700 py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
      data-te-navbar-ref
    >
      <div class="flex w-full flex-wrap text-white items-end justify-between px-3">
        <div className="flex items-center flex-shrink-0 text-white mr-20">
          <img src={logo} alt="Logo" className="bg-white rounded-full px-1 py-1 h-12 w-12 mr-2" />
          <span className="font-semibold text-white tracking-tight">
            FEDERAL UNIVERSITY OF LAFIA
          </span>
        </div>
        <div class="float-right">
          <button
            class="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContentY"
            aria-controls="navbarSupportedContentY"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="[&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-7 w-7"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </span>
          </button>
        </div>

        <div
          class="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
          id="navbarSupportedContentY"
          data-te-collapse-item
        >
          <ul class="mr-auto flex flex-col lg:flex-row" data-te-navbar-nav-ref>
            <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <a
                class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                href="/"
                data-te-nav-link-ref
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Home
              </a>
            </li>
            <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <a
                class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                href="/student"
                data-te-nav-link-ref
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Students
              </a>
            </li>
            <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <a
                class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                href="/course"
                data-te-nav-link-ref
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Courses
              </a>
            </li>
            <li class="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <a
                class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                href={isLoggedIn ? "/" : "/login"}
                onClick={logout}
                data-te-nav-link-ref
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                {isLoggedIn ? "Logout" : "Login"}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
