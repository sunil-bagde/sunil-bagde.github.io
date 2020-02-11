import React from "react";
import Link from "./active-link";

import config from "../site.config";
import BasePathLink from "./BasePathLink";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
      isOpen: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.headerOnScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.headerOnScroll);
  }

  headerOnScroll = () => {
    if (window.scrollY > 60) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };

  render() {
    return (
      <header
        id="header"
        className={`${
          this.state.scrolled ? `scroll` : ``
        } w-full bg-white lg:p-2 xs:border-2 xs:border-gray-200 sm:border-2 sm:border-gray-200 md:border-2 md:border-gray-200 lg:border-0 fixed top-0 z-50`}
      >
        <div className="w-full container mx-auto flex flex-wrap items-center mt-0 py-3 xs:px-4 sm:px-4 md:px-4 lg:px-0">
          <div className="brand justify-between flex items-center xs:w-full sm:w-full md:w-full md:px-0 lg:px-0 lg:w-1/2">
            <BasePathLink href="/">
              <a className="flex text-black font-bold no-underline hover:no-underline">
                <span className="text-lg">{config.siteTitle}</span>
              </a>
            </BasePathLink>
          </div>

          <nav
            className="w-full flex-grow xs:hidden sm:hidden lg:flex lg:items-center lg:w-1/2 lg:block mt-2 lg:mt-0"
            id="nav-content"
            role="navigation"
            aria-label="main navigation"
          >
            <ul className="lg:flex flex-1 items-center lg:justify-end md:px-0 py-2">
              <li className="lg:mr-3 lg:ml-3 lg:invisible xs:pb-1">
                <BasePathLink href="/">
                  <a className="text-gray-600 hover:underline">Home</a>
                </BasePathLink>
              </li>
              <li className="lg:mr-3 lg:ml-3 xs:py-1 sm:py-3">
                <BasePathLink href="/about">
                  <a className="text-gray-600 hover:underline">About</a>
                </BasePathLink>
              </li>
              <li className="lg:mr-3 lg:ml-3 xs:py-1 sm:py-3">
                <BasePathLink href="/posts">
                  <a className="text-gray-600 hover:underline">Posts</a>
                </BasePathLink>
              </li>
              <li className="lg:mr-3 lg:ml-3 xs:py-1 sm:py-3">
                <BasePathLink href="/contact">
                  <a className="text-gray-600 hover:underline">Contact</a>
                </BasePathLink>
              </li>
            </ul>
          </nav>
        </div>
        <nav className="py-3 px-4 lg:hidden xl:hidden" role="navigation">
          <ul className="flex items-center justify-between">
            <li className="">
              <BasePathLink href="/">
                <a className="text-gray-600 font-normal">Home</a>
              </BasePathLink>
            </li>

            <li>
              <BasePathLink href="/about">
                <a className="text-gray-600 font-normal">About</a>
              </BasePathLink>
            </li>
            <li>
              <BasePathLink href="/posts">
                <a className="text-gray-600 font-normal">Posts</a>
              </BasePathLink>
            </li>
            <li className="">
              <BasePathLink href="/contact">
                <a className="text-gray-600 font-normal">Contact</a>
              </BasePathLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
