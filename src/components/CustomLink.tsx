import { HTMLAttributeAnchorTarget, ReactNode } from "react";

type CustomLinkProps = {
    href: string;
    children?: ReactNode;
    target?: HTMLAttributeAnchorTarget
}

export function CustomLink({href, children, target}: CustomLinkProps) {
    return <a 
      style={{backgroundColor: "#C63230"}} 
      href={href}
      className="text-center text-white p-1 rounded-xs"
      target={target}
    >{children}</a>
}