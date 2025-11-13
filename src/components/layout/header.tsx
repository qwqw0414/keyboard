"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { mainMenuItems } from "@/config/menu";
import { useState } from "react";

/**
 * 헤더 컴포넌트
 * 
 * 전역 네비게이션을 제공합니다.
 * 
 * 기능:
 * - 로고 및 브랜드명 표시
 * - 데스크톱: 수평 네비게이션 메뉴
 * - 모바일: 햄버거 메뉴 (Sheet 컴포넌트 활용)
 * - 반응형 디자인 (md 브레이크포인트 기준)
 * 
 * 반응형 전략:
 * - 768px 이상: 전체 네비게이션 메뉴 표시
 * - 768px 미만: 햄버거 메뉴 버튼만 표시
 */
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* 로고 영역 */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <span className="text-lg font-bold">K</span>
            </div>
            <span className="hidden font-bold sm:inline-block">
              Keyboard
            </span>
          </Link>
        </div>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden md:flex md:flex-1 md:justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              {mainMenuItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* 우측 액션 버튼 영역 */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            로그인
          </Button>
          <Button size="sm" className="hidden md:flex">
            시작하기
          </Button>

          {/* 모바일 메뉴 버튼 */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="메뉴 열기"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>메뉴</SheetTitle>
                <SheetDescription>
                  원하는 페이지로 이동하세요
                </SheetDescription>
              </SheetHeader>
              <nav className="mt-6 flex flex-col space-y-4">
                {mainMenuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex flex-col space-y-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <span>{item.title}</span>
                    {item.description && (
                      <span className="text-xs text-muted-foreground">
                        {item.description}
                      </span>
                    )}
                  </Link>
                ))}
                <div className="pt-4 space-y-2 border-t">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    로그인
                  </Button>
                  <Button
                    className="w-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    시작하기
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

