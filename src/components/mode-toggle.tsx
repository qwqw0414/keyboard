"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

/**
 * 테마 모드 토글 컴포넌트
 * 
 * 라이트/다크/시스템 테마를 전환할 수 있는 드롭다운 버튼입니다.
 * 
 * 기능:
 * - 라이트 모드: 밝은 테마
 * - 다크 모드: 어두운 테마
 * - 시스템 모드: OS 설정 자동 감지
 * - 아이콘 애니메이션: 현재 테마에 따라 Sun/Moon 아이콘 전환
 * 
 * 사용:
 * 헤더나 설정 영역에 배치하여 사용자가 테마를 전환할 수 있도록 합니다.
 */
export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">테마 전환</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          라이트
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          다크
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          시스템
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

