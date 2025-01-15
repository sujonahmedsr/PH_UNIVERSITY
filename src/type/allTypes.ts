import { ReactNode } from "react";

export type TRoutes = {
    path: string,
    element: ReactNode
}

export type TSidebarItem = {
    key: string;
    label: ReactNode;
    children?: TSidebarItem[];
};


export type TUserPath = {
    name: string;
    path?: string;
    element?: ReactNode;
    children?: TUserPath[];
};

export type TQueryParam = {
    name: string;
    value: boolean | React.Key;
};