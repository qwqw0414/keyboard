import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { footerMenuSections } from "@/config/menu";

/**
 * 푸터 컴포넌트
 * 
 * 페이지 하단에 표시되는 정보 및 링크 영역입니다.
 * 
 * 기능:
 * - 사이트맵 링크 (4개 섹션)
 * - 소셜 미디어 링크
 * - 저작권 정보
 * - 반응형 그리드 레이아웃
 * 
 * 반응형 전략:
 * - 모바일: 1열
 * - 태블릿: 2열
 * - 데스크톱: 4열
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16">
        {/* 메뉴 섹션 그리드 */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {footerMenuSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-semibold">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* 하단 정보 영역 */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* 로고 및 설명 */}
          <div className="flex flex-col items-center gap-2 md:items-start">
            <div className="flex items-center space-x-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <span className="text-sm font-bold">K</span>
              </div>
              <span className="text-sm font-semibold">Keyboard</span>
            </div>
            <p className="text-center text-xs text-muted-foreground md:text-left">
              Next.js와 shadcn/ui로 제작된 모던 웹 애플리케이션
            </p>
          </div>

          {/* 저작권 및 링크 */}
          <div className="flex flex-col items-center gap-2 text-center md:items-end md:text-right">
            <p className="text-xs text-muted-foreground">
              © {currentYear} Keyboard. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs text-muted-foreground">
              <Link
                href="/terms"
                className="transition-colors hover:text-foreground"
              >
                이용약관
              </Link>
              <Link
                href="/privacy"
                className="transition-colors hover:text-foreground"
              >
                개인정보처리방침
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

