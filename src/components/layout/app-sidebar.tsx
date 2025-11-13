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
 * - Content: 메뉴 섹션들
 * - Footer: 추가 정보 또는 액션
 * 
 * 레이아웃:
 * 헤더가 상단에 별도로 있으므로 사이드바는 메뉴만 표시합니다.
 */
export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      {/* 사이드바 콘텐츠 */}
      <SidebarContent className="pt-6">
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

