/**
 * 메뉴 구성 파일
 * 
 * 헤더와 사이드바에서 사용할 메뉴 항목을 중앙에서 관리합니다.
 * 새로운 메뉴 항목을 추가하거나 수정할 때 이 파일만 수정하면 됩니다.
 * 
 * 구조:
 * - title: 메뉴 표시 이름
 * - href: 라우팅 경로
 * - icon: 아이콘 이름 (선택사항)
 * - description: 메뉴 설명 (선택사항)
 */

export interface MenuItem {
  title: string;
  href: string;
  description?: string;
  icon?: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

/**
 * 메인 네비게이션 메뉴
 * 헤더와 사이드바에서 공통으로 사용됩니다.
 */
export const mainMenuItems: MenuItem[] = [
  {
    title: "홈",
    href: "/",
    description: "메인 페이지",
  },
  {
    title: "컴포넌트",
    href: "/components",
    description: "UI 컴포넌트 쇼케이스",
  },
  {
    title: "문서",
    href: "/docs",
    description: "사용 가이드 및 문서",
  },
  {
    title: "예제",
    href: "/examples",
    description: "실제 사용 예제",
  },
];

/**
 * 사이드바 전용 메뉴 섹션
 * 카테고리별로 그룹화된 메뉴 구조입니다.
 */
export const sidebarMenuSections: MenuSection[] = [
  {
    title: "시작하기",
    items: [
      {
        title: "소개",
        href: "/docs/introduction",
        description: "프로젝트 소개",
      },
      {
        title: "설치",
        href: "/docs/installation",
        description: "설치 가이드",
      },
      {
        title: "빠른 시작",
        href: "/docs/quick-start",
        description: "빠른 시작 가이드",
      },
    ],
  },
  {
    title: "컴포넌트",
    items: [
      {
        title: "버튼",
        href: "/components/button",
        description: "버튼 컴포넌트",
      },
      {
        title: "카드",
        href: "/components/card",
        description: "카드 컴포넌트",
      },
      {
        title: "폼",
        href: "/components/form",
        description: "폼 컴포넌트",
      },
      {
        title: "테이블",
        href: "/components/table",
        description: "테이블 컴포넌트",
      },
    ],
  },
  {
    title: "리소스",
    items: [
      {
        title: "GitHub",
        href: "https://github.com",
        description: "소스 코드",
      },
      {
        title: "커뮤니티",
        href: "/community",
        description: "커뮤니티",
      },
    ],
  },
];

/**
 * 푸터 메뉴 섹션
 */
export const footerMenuSections: MenuSection[] = [
  {
    title: "제품",
    items: [
      { title: "기능", href: "/features" },
      { title: "가격", href: "/pricing" },
      { title: "로드맵", href: "/roadmap" },
    ],
  },
  {
    title: "개발자",
    items: [
      { title: "문서", href: "/docs" },
      { title: "API", href: "/api" },
      { title: "오픈소스", href: "/opensource" },
    ],
  },
  {
    title: "회사",
    items: [
      { title: "소개", href: "/about" },
      { title: "블로그", href: "/blog" },
      { title: "채용", href: "/careers" },
    ],
  },
  {
    title: "법적 고지",
    items: [
      { title: "이용약관", href: "/terms" },
      { title: "개인정보처리방침", href: "/privacy" },
      { title: "쿠키 정책", href: "/cookies" },
    ],
  },
];

