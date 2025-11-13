"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { sidebarMenuSections } from "@/config/menu";
import { Separator } from "@/components/ui/separator";

/**
 * 애플리케이션 사이드바 컴포넌트
 * 
 * 계층적 네비게이션을 제공합니다.
 * 
 * 기능:
 * - 섹션별로 그룹화된 메뉴 구조
 * - 현재 활성 페이지 하이라이트
 * - 스크롤 가능한 메뉴 리스트
 * - 반응형 지원 (데스크톱 전용)
 * 
 * 구조:
 * - Header: 로고 및 타이틀
 * - Content: 메뉴 섹션들
 * - Footer: 추가 정보 또는 액션
 */
export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      {/* 사이드바 헤더 (헤더 높이와 동일하게 h-16) */}
      <SidebarHeader className="h-16 border-b px-4 flex items-center">
        <Link href="/" className="flex items-center space-x-2 w-full">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground shrink-0">
            <span className="text-lg font-bold">K</span>
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <span className="text-sm font-semibold truncate">Keyboard</span>
            <span className="text-xs text-muted-foreground truncate">v1.0.0</span>
          </div>
        </Link>
      </SidebarHeader>

      {/* 사이드바 콘텐츠 */}
      <SidebarContent>
        {sidebarMenuSections.map((section, sectionIndex) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        tooltip={item.description}
                      >
                        <Link href={item.href}>
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
            {sectionIndex < sidebarMenuSections.length - 1 && (
              <Separator className="my-2" />
            )}
          </SidebarGroup>
        ))}
      </SidebarContent>

      {/* 사이드바 푸터 */}
      <SidebarFooter className="border-t p-4">
        <div className="text-xs text-muted-foreground">
          <p className="mb-1">© 2025 Keyboard</p>
          <p>Made with Next.js & shadcn/ui</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

