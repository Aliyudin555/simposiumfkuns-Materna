"use client"

import Brand from "@/app/components/brand";
import { useState } from "react";
import { 
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuTrigger } from "@/app/components/ui/dropdown-menu";
import { NavigationMenu } from "@/app/components/ui/navigation-menu";
import Link from "next/link";
import { 
    activeClass, 
    activeClassDropdown, 
    RouteNav, 
    routes } from "@/lib/routes";
import { usePathname } from "next/navigation";

function NavItemDropdown({ curPathname, navigateTo }: { curPathname: string, navigateTo: RouteNav }) {
    const [ open, setOpen ] = useState<boolean>(false);
    const setActiveClass = activeClass();
    const setActiveClassDropdown = activeClassDropdown();

    return (
        <DropdownMenu open={ open } onOpenChange={ setOpen }>
            <DropdownMenuTrigger 
                onMouseEnter={ () => setOpen(true) } 
                onMouseLeave={ () => setOpen(false) } 
                className={ `${setActiveClass(curPathname, navigateTo.route)} hover:text-[oklch(0.75_0.13_12.75)] transition-colors` }>
                { navigateTo.displayName } 
            </DropdownMenuTrigger>
            
            <DropdownMenuContent 
                className="border border-[oklch(0.52_0.16_14.92)]/30 mx-4 bg-white/95 backdrop-blur-md shadow-lg rounded-xl"
                onMouseEnter={ () => setOpen(true) } 
                onMouseLeave={ () => setOpen(false) }>
                {
                    navigateTo.subs.map((subMenu, i) => (
                        <DropdownMenuItem
                            className="text-center px-4 py-2 w-40 text-sm hover:font-bold hover:text-[oklch(0.75_0.13_12.75)] focus:text-[oklch(0.75_0.13_12.75)] cursor-pointer transition-colors"
                            key={ i }>
                            <Link 
                                href={ subMenu.route }
                                className={ setActiveClassDropdown(curPathname, subMenu.route) }>
                                    { subMenu.displayName } 
                            </Link>
                        </DropdownMenuItem>
                    ))
                }
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default function Navigation() {
    const setActiveClass = activeClass();
    const pathname = usePathname();

    // Tambahkan warna teks default di container utama
    return (
        <div className="px-4 py-4 font-medium hidden lg:flex justify-between text-[oklch(0.52_0.16_14.92)]">
            <NavigationMenu>
                <Brand />
            </NavigationMenu>
            <NavigationMenu className="flex gap-8 justify-evenly mr-12">
                {
                    routes.map((navigateTo, i) => (
                        navigateTo.subs.length > 0 ?
                            <NavItemDropdown 
                                key={ i } 
                                navigateTo={ navigateTo }
                                curPathname={ pathname }/>
                            : <Link 
                                key={ i }
                                href={ navigateTo.route }
                                className={ `${setActiveClass(pathname, navigateTo.route)} hover:text-[oklch(0.75_0.13_12.75)] transition-colors` }>
                                { navigateTo.displayName } 
                              </Link>
                    ))
                }
            </NavigationMenu>
        </div>
    );  
}