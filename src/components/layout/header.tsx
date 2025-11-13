"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import { mainMenuItems } from "@/config/menu";
import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";

/**
 * 헤더 컴포넌트
 * 
 * 전역 네비게이션을 제공합니다.
 * 
 * 기능:
 * - 사이드바 토글 버튼 (데스크톱에서 사이드바가 있을 때)
 * - 로고 및 브랜드명 표시 (사이드바가 없을 때만)
 * - 데스크톱: 수평 네비게이션 메뉴
 * - 모바일: 햄버거 메뉴 (헤더 하단 확장 방식)
 * - 반응형 디자인 (md 브레이크포인트 기준)
 * 
 * 반응형 전략:
 * - 768px 이상: 전체 네비게이션 메뉴 표시
 * - 768px 미만: 햄버거 메뉴 버튼, 클릭 시 헤더 하단으로 메뉴 확장
 * 
 * Props:
 * - showSidebarToggle: 사이드바 토글 버튼 표시 여부 (기본값: false)
 * - showLogo: 로고 표시 여부 (기본값: true, 사이드바가 있으면 false 권장)
 */
interface HeaderProps {
  showSidebarToggle?: boolean;
  showLogo?: boolean;
}

export function Header({ showSidebarToggle = false, showLogo = true }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 메뉴가 열렸을 때 스크롤 방지
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          {/* 좌측: 사이드바 토글 + 로고 (선택적) */}
          <div className="flex items-center gap-2">
            {/* 사이드바 토글 버튼 (사이드바가 있을 때만) */}
            {showSidebarToggle && (
              <SidebarTrigger className="lg:hidden" />
            )}

            {/* 로고 (사이드바가 없을 때만 표시) */}
            {showLogo && (
              <Link href="/" className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <span className="text-lg font-bold">K</span>
                </div>
                <span className="hidden font-bold sm:inline-block">
                  Keyboard
                </span>
              </Link>
            )}
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
            {/* 테마 전환 버튼 */}
            <ModeToggle />

            <Button variant="ghost" size="sm" className="hidden md:flex">
              로그인
            </Button>
            <Button size="sm" className="hidden md:flex">
              시작하기
            </Button>

            {/* 모바일 메뉴 토글 버튼 */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* 모바일 드롭다운 메뉴 */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t">
            <nav className="container px-4 py-4 space-y-1">
              {mainMenuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex flex-col space-y-1 rounded-md px-3 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground active:bg-accent"
                >
                  <span>{item.title}</span>
                  {item.description && (
                    <span className="text-xs text-muted-foreground">
                      {item.description}
                    </span>
                  )}
                </Link>
              ))}

              <Separator className="my-2" />

              <div className="space-y-2 pt-2">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  로그인
                </Button>
                <Button
                  className="w-full justify-start"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  시작하기
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* 오버레이 (모바일 메뉴가 열렸을 때) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}

