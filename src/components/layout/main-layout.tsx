"use client";

import { ReactNode } from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import { Header } from "./header";
import { Footer } from "./footer";

/**
 * 메인 레이아웃 컴포넌트
 * 
 * 애플리케이션의 전체 레이아웃 구조를 정의합니다.
 * 
 * 구조:
 * - SidebarProvider: 사이드바 상태 관리
 * - AppSidebar: 좌측 네비게이션 (데스크톱)
 * - SidebarInset: 메인 콘텐츠 영역
 *   - Header: 상단 헤더
 *   - Main: 페이지 콘텐츠
 *   - Footer: 하단 푸터
 * 
 * 반응형 동작:
 * - 데스크톱 (≥1024px): 사이드바 항상 표시
 * - 태블릿/모바일 (<1024px): 사이드바 숨김, 토글 버튼으로 제어
 * 
 * Props:
 * - children: 페이지 콘텐츠
 * - showSidebar: 사이드바 표시 여부 (기본값: true)
 */
interface MainLayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
}

export function MainLayout({ children, showSidebar = true }: MainLayoutProps) {
  if (!showSidebar) {
    // 사이드바 없는 레이아웃 (예: 랜딩 페이지, 로그인 페이지)
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        {/* 좌측 사이드바 */}
        <AppSidebar />

        {/* 메인 콘텐츠 영역 */}
        <SidebarInset className="flex min-h-screen w-full flex-1 flex-col">
          {/* 헤더 (사이드바 토글 버튼 포함) */}
          <Header showSidebarToggle={true} />

          {/* 메인 콘텐츠 */}
          <main className="flex-1 w-full">
            {children}
          </main>

          {/* 푸터 */}
          <Footer />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

