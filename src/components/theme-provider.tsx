"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * 테마 프로바이더 컴포넌트
 * 
 * next-themes를 사용하여 다크모드를 구현합니다.
 * 
 * 기능:
 * - 라이트/다크/시스템 테마 지원
 * - localStorage에 테마 설정 자동 저장
 * - 시스템 테마 자동 감지
 * - SSR/CSR 하이드레이션 처리
 * 
 * 사용:
 * root layout에서 전체 앱을 감싸서 사용
 */
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

