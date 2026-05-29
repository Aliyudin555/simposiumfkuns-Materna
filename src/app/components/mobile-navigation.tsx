"use client"

import { useState } from "react"
import { 
    Sheet, 
    SheetContent, 
    SheetHeader, 
    SheetTitle, 
    SheetTrigger } from "@/app/components/ui/sheet";
import { NavigationMenu } from "@/app/components/ui/navigation-menu";
import { Button } from "@/app/components/ui/button";
import Brand from "@/app/components/brand";
import { MenuIcon } from "lucide-react";
import {
    Accordion, 
    AccordionItem,
    AccordionContent,
    AccordionTrigger 
} from "@/app/components/ui/accordion"
import { 
    activeClassMobile, 
    activeClassDropdownMobile, 
    RouteNav, 
    routes } from "@/lib/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";


function MobileNavItemDropdown({ curPathname, navigateTo }: { curPathname: string, navigateTo: RouteNav }) {
    const setActiveClass = activeClassMobile();
    const setActiveClassDropdown = activeClassDropdownMobile();

    return (
        <Accordion 
            type="single" 
            collapsible>
            <AccordionItem 
                value="item-1" className="border-b-0">
                <AccordionTrigger className={ `${setActiveClass(curPathname, navigateTo.route)} hover:text-[oklch(0.75_0.13_12.75)] hover:no-underline transition-colors` }>
                    { navigateTo.displayName } 
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2 pl-4 mt-2">
                    {
                        navigateTo.subs.map((item, i) => (
                            <Link
                                key={ i }
                                href={ item.route }
                                className={ `${setActiveClassDropdown(curPathname, item.route)} py-2 hover:text-[oklch(0.75_0.13_12.75)] transition-colors block` }>
                                    { item.displayName }
                            </Link>
                        ))   
                    }
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}

export default function MobileNavigation() {
    const [ open, setOpen ] = useState<boolean>(false);
    const setActiveClass = activeClassMobile();
    const pathname = usePathname();

    return (
        <Sheet 
            open={ open } 
            onOpenChange={ setOpen }>
            <NavigationMenu 
                className="flex gap-4 lg:hidden py-4 text-[oklch(0.52_0.16_14.92)]">
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-[oklch(0.52_0.16_14.92)] hover:text-[oklch(0.75_0.13_12.75)] hover:bg-transparent transition-colors">
                        <MenuIcon size={28} />
                    </Button>
                </SheetTrigger>
                <Brand />
            </NavigationMenu>
            
            <SheetContent 
                side="left"
                className="flex flex-col gap-4 font-medium py-8 px-6 text-[oklch(0.52_0.16_14.92)] bg-white/95 backdrop-blur-md border-r-[oklch(0.52_0.16_14.92)]/20 shadow-2xl">
                <SheetHeader>
                    <SheetTitle className="text-left text-[oklch(0.52_0.16_14.92)] text-xl font-black tracking-tight">MATERNA Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-4">
                    {
                        routes.map((item, i) => (
                            item.subs.length > 0 ?
                                <MobileNavItemDropdown 
                                    key={ i }
                                    curPathname={ pathname }
                                    navigateTo={ item } /> 
                                :
                                <Link
                                    key={ i }
                                    className={ `${setActiveClass(pathname, item.route)} py-2 font-semibold hover:text-[oklch(0.75_0.13_12.75)] transition-colors block` }
                                    href={ item.route }
                                    onClick={ () => setOpen(false) }>
                                        { item.displayName }
                                </Link>
                        ))
                    }
                </div>
            </SheetContent>
        </Sheet>
    );
}