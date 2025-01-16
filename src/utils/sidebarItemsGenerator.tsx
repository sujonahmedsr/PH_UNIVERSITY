import { NavLink } from "react-router-dom";
import { TSidebarItem, TUserPath } from "../type/allTypes";

export const sidebarItemsGenerator = (item: TUserPath[], role: string) => {
    const routess = item.reduce((acc: TSidebarItem[], item) => {
        if (item.path && item.name) {
            acc.push({
                key: item.name,
                label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
            });
        }
        if (item.children) {
            acc.push({
                key: item.name,
                label: item.name,
                children: item.children.map((child) => {
                    if (child?.name) {
                        return {
                            key: child.name,
                            label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
                        }
                    }
                }),
            });
        }
        return acc
    }, [])
    return routess
}