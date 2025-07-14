import { ReactNode } from "react";

type CustomLinkProps = {
    href: string;
    children?: ReactNode;
}

export function CustomLink({href, children}: CustomLinkProps) {
    return <a 
      style={{backgroundColor: "#C63230"}} 
      href={href}
      className="text-center text-white p-1 rounded-xs"
    >{children}</a>
}