import Link from "next/link";
import PropTypes from "prop-types";
import getConfig from "next/config";
import { useRouter } from "next/router";
const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath || "";
const basePathEndsWithSlash = basePath.endsWith("/");
import React from "react";

export default function BasePathLink({ href, children, ...props }) {
  let finalHref;
  if (basePathEndsWithSlash || href.startsWith("/")) {
    finalHref = `${basePath}${href}`;
  } else {
    finalHref = `${basePath}/${href}`;
  }
  const router = useRouter();

  let className = children.props.className || "";
  if (router.pathname === href) {
    className = `${className} active`;
  }

  return (
    <Link href={href} as={finalHref} {...props}>
      {React.cloneElement(children, { className })}
    </Link>
  );
}

BasePathLink.propTypes = {
  href: PropTypes.string.isRequired,
};
