export const activeClass = () => {
    // border-t-2 menggunakan warna aksen terang (pink/orange)
    // text menggunakan warna utama (navy/dark pink)
    const activeStyle = "py-1 w-fit transition transform -translate-x-1 delay-100 border-t-2 border-[oklch(0.75_0.13_12.75)] font-bold text-[oklch(0.52_0.16_14.92)]";
    const inactiveStyle = "font-semibold text-[oklch(0.52_0.16_14.92)]/80 hover:text-[oklch(0.75_0.13_12.75)] transition-colors";

    return (curPathname: string, route: string): string => (
        (curPathname === route || (curPathname.startsWith(route) && route !== "/")) ? activeStyle : inactiveStyle
    );
}

export const activeClassDropdown = () => {
    // Dropdown aktif menggunakan warna aksen agar menonjol
    const activeStyle = "p-4 block font-bold text-[oklch(0.75_0.13_12.75)] w-fit transition transform -translate-x-1 delay-100";
    const inactiveStyle = "p-4 block text-[oklch(0.52_0.16_14.92)] hover:text-[oklch(0.75_0.13_12.75)] transition-colors";

    return (curPathname: string, route: string): string => (
        (curPathname === route) ? activeStyle : inactiveStyle
    );
}

export const activeClassMobile = () => {
    // Mobile aktif menggunakan warna aksen terang
    const activeStyle = "w-full pt-0 text-lg rounded-none font-bold w-fit transition transform delay-100 text-[oklch(0.75_0.13_12.75)]";
    const inactiveStyle = "w-full pt-0 text-lg font-semibold text-[oklch(0.52_0.16_14.92)]";

    return (curPathname: string, route: string): string => (
        (curPathname === route || (curPathname.startsWith(route) && route !== "/")) ? activeStyle : inactiveStyle
    );
}

export const activeClassDropdownMobile = () => {
    const activeStyle = "w-full block p-2 font-bold text-[oklch(0.75_0.13_12.75)]";
    const inactiveStyle = "w-full block p-2 text-[oklch(0.52_0.16_14.92)]/80";

    return (curPathname: string, route: string): string => (
        (curPathname === route) ? activeStyle : inactiveStyle
    );
}

export interface RouteNav {
    route: string;
    displayName: string;
    subs: SubRouteNav[]
}

export interface SubRouteNav {
    route: string;
    displayName: string;
}

export const routes: RouteNav[] = [
    {
        route: "/",
        displayName: "Home",
        subs: [],
    },
    {
        route: "/register",
        displayName: "Register",
        subs: []
    },
    {
        route: "/abstract",
        displayName: "Call for Abstract",
        subs: []
    },
    {
        route: "/timeline",
        displayName: "Timeline",
        subs: [
            {
                route: "/timeline/abstract",
                displayName: "Timeline for Abstract Submission"
            },
            {
                route: "/timeline/symposium",
                displayName: "Timeline for Symposium and Workshop Registration"
            }
        ]
    },
    {
        route: "/about-us",
        displayName: "About Us",
        subs: [
            {
                route: "/about-us",
                displayName: "About Us"
            },
            {
                route: "/about-us/contact-us",
                displayName: "Contact Us"
            },
            {
                route: "/about-us/organizing-comittee",
                displayName: "Organizing Comittee"
            },
        ]
    },
];