import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { MainLayout } from "@/components/layout/main-layout";

/**
 * 메인 페이지 컴포넌트
 * 
 * shadcn/ui 라이브러리의 다양한 컴포넌트를 데모 형태로 보여주는 쇼케이스 페이지입니다.
 * 각 섹션은 특정 컴포넌트 카테고리를 시연합니다.
 * 
 * 구성:
 * - 헤더: 페이지 제목 및 설명
 * - Button 섹션: 다양한 버튼 variants
 * - Card 섹션: 카드 레이아웃 예제
 * - Tabs 섹션: 탭 인터페이스
 * - Form 섹션: 입력 및 스위치
 * - Alert 섹션: 알림 메시지
 * - Avatar & Badge 섹션: 프로필 및 뱃지
 */
export default function Home() {
  return (
    <MainLayout>
      <div className="container mx-auto py-10 px-4 space-y-12">
        {/* 헤더 섹션 */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            shadcn/ui 컴포넌트 쇼케이스
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            다양한 UI 컴포넌트를 탐색하고 테스트해보세요
          </p>
          <div className="flex gap-2 justify-center flex-wrap">
            <Badge>React</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="outline">Next.js</Badge>
            <Badge variant="destructive">Tailwind CSS</Badge>
          </div>
        </section>

        <Separator />

        {/* Button 섹션 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Buttons</h2>
          <Card>
            <CardHeader>
              <CardTitle>버튼 variants</CardTitle>
              <CardDescription>
                다양한 스타일과 크기의 버튼 컴포넌트
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
              <div className="flex flex-wrap gap-3 items-center">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tabs 섹션 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Tabs</h2>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>프로젝트 개요</CardTitle>
                  <CardDescription>
                    현재 프로젝트의 주요 정보와 통계
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">총 컴포넌트</span>
                    <span className="font-semibold">45개</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">다크모드 지원</span>
                    <Badge variant="secondary">활성화</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>분석 데이터</CardTitle>
                  <CardDescription>
                    사용자 인터랙션 및 성능 메트릭
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-4/5" />
                    <Skeleton className="h-4 w-3/5" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reports" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>리포트</CardTitle>
                  <CardDescription>
                    주간 및 월간 활동 리포트
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    리포트 데이터를 불러오는 중...
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Card Grid 섹션 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Cards & Avatars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">John Doe</CardTitle>
                    <CardDescription>Frontend Developer</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  React와 TypeScript를 사용한 모던 웹 개발 전문가
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View Profile</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback>JA</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">Jane Smith</CardTitle>
                    <CardDescription>UI/UX Designer</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  사용자 경험을 최우선으로 하는 디자인 전문가
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View Profile</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback>MK</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">Mike Kim</CardTitle>
                    <CardDescription>Backend Engineer</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  확장 가능한 서버 아키텍처 설계 및 구현
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View Profile</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Form 섹션 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Form Elements</h2>
          <Card>
            <CardHeader>
              <CardTitle>입력 컴포넌트</CardTitle>
              <CardDescription>
                다양한 폼 요소와 상호작용 컴포넌트
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">이메일</label>
                <Input type="email" placeholder="example@email.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">비밀번호</label>
                <Input type="password" placeholder="••••••••" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <label className="text-sm font-medium">알림 받기</label>
                  <p className="text-sm text-muted-foreground">
                    새로운 업데이트 알림을 받습니다
                  </p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <label className="text-sm font-medium">마케팅 수신</label>
                  <p className="text-sm text-muted-foreground">
                    프로모션 및 마케팅 정보를 받습니다
                  </p>
                </div>
                <Switch />
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button className="flex-1">저장</Button>
              <Button variant="outline" className="flex-1">취소</Button>
            </CardFooter>
          </Card>
        </section>

        {/* Alert 섹션 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Alerts</h2>
          <div className="space-y-4">
            <Alert>
              <AlertTitle>정보</AlertTitle>
              <AlertDescription>
                이것은 일반적인 정보 알림 메시지입니다.
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <AlertTitle>오류</AlertTitle>
              <AlertDescription>
                작업을 완료하는 동안 오류가 발생했습니다. 다시 시도해주세요.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Skeleton 로딩 섹션 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Loading States</h2>
          <Card>
            <CardHeader>
              <CardTitle>스켈레톤 로딩</CardTitle>
              <CardDescription>
                콘텐츠 로딩 중 표시되는 플레이스홀더
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                </div>
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/5" />
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </MainLayout>
  );
}
