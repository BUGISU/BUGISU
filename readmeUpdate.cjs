// README.md Auto‑Update Script (CommonJS)
// -----------------------------------------------------------------------------
const { readFileSync, writeFileSync, existsSync } = require("node:fs");
const Parser = require("rss-parser");

// ─────────────────── 설정값 ───────────────────
const BLOG_RSS_URL = "https://j2su0218.tistory.com/rss"; // RSS 피드 주소
const BLOG_POST_LIMIT = 5; // 표시할 게시글 수
// ───────── 고정 템플릿: 헤더 + Tech + Portfolio ─────────
const fixedHeader = `
![header](https://capsule-render.vercel.app/api?type=cylinder&color=gradient&text=One%20Code%20at%20a%20Time%20%7C%20One%20Step%20Forward&reversal=false&fontAlign=50&fontSize=20&textBg=false&animation=fadeIn&descAlign=0)

<p align="center">
  <a href="https://github.com/lunelDev/J.Park-Resume">
    <img src="https://img.shields.io/badge/Resume-FF6F61?style=for-the-badge&logo=Micro.blog&logoColor=white" />
  </a>
  <a href="https://j2su0218.tistory.com">
    <img src="https://img.shields.io/badge/Blog-FF9800?style=for-the-badge&logo=Blogger&logoColor=white" />
  </a>
  <a href="mailto:j2su0218@gmail.com">
    <img src="https://img.shields.io/badge/Email-30B980?style=for-the-badge&logo=Gmail&logoColor=white" />
  </a>
</p>

## About

Unity·C# 기반 XR·AR·피트니스 콘텐츠를 상용화해 온 개발자입니다. 센서 입력을 게임 로직·애니메이션·서버 통신으로 연결해, 사용자가 직접 움직이고 학습하는 콘텐츠를 만듭니다. 현재는 **언어재활 SaMD** 제품에서 Next.js/React 클라이언트와 MediaPipe 손 추적, 임상 지표 저장 흐름을 개발하고 있습니다.

<p align="center">
  <img src="https://img.shields.io/badge/Unity-000000?style=flat-square&logo=unity&logoColor=white" />
  <img src="https://img.shields.io/badge/C%23-239120?style=flat-square&logo=csharp&logoColor=white" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Spring%20Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white" />
  <img src="https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white" />
</p>
<p align="center">
  <sub>FIT-TAG BLE · Leap Motion · Kinect · Vuforia AR · Leia 3D · MediaPipe · DOTween · Cinemachine</sub>
</p>

## ⭐ Featured

| | |
| :--- | :--- |
| **BrainFriends** — 언어재활 SaMD<br /><sub>Next.js/React 클라이언트 · 재활 게임 · MediaPipe 손 추적 · 임상 지표 저장</sub> | **[Run To The Moon](https://github.com/lunelDev/BMF-Run.to.the.Moon)** — FIT-TAG 러닝<br /><sub>센서 각속도 → 4단계 속도/애니메이션 · 1000km · AAB 배포</sub> |
| **[Bojamaja Brain](https://github.com/lunelDev/BMF-BojamajaBrain)** — 시니어 인지훈련<br /><sub>터치 미니게임 15종 + Leap Motion 5종 · CSV 랜덤 출제 · Android 출시</sub> | **[SnapTide](https://github.com/lunelDev/SnapTide)** — 풀스택 SNS<br /><sub>React 프론트 · Spring Boot/Security 인증 · MariaDB 데이터 흐름</sub> |

<p align="center">
  <strong><a href="https://jisuportfolio.vercel.app">→ 전체 22개 프로젝트 살펴보기 · Portfolio ↗</a></strong>
</p>

## GitHub Stats

<p align="center">
  <img src="https://github-readme-stats-sigma-five.vercel.app/api?username=lunelDev&show_icons=true&theme=default" height="150" />
  <img src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=lunelDev&layout=compact" height="150" />
</p>

### Latest Blog Posts
`;

// ───────────── RSS → 최신 글 리스트 생성 ─────────────
async function buildBlogSection() {
  const parser = new Parser({
    headers: {
      "User-Agent": "Mozilla/5.0 (GitHubActionsBot)",
      Accept: "application/rss+xml, application/xml, text/xml; q=0.9",
    },
  });

  try {
    const feed = await parser.parseURL(BLOG_RSS_URL);
    if (!feed?.items?.length) return "- (최근 글이 없습니다)";

    return feed.items
      .slice(0, BLOG_POST_LIMIT)
      .map(({ title, link, pubDate }) => {
        const date = new Date(pubDate ?? Date.now()).toLocaleDateString(
          "en-US",
          {
            year: "numeric",
            month: "short",
            day: "2-digit",
          },
        );
        return `- ${date} · [${title}](${link})`;
      })
      .join("\n");
  } catch (error) {
    console.error("RSS 파싱 실패:", error);
    return "- (최근 글을 불러오지 못했습니다)";
  }
}

// ───────────── README 생성 & 저장 ─────────────
function buildReadme(blogSection) {
  // fixedHeader 내에 이미 "### Latest Blog Posts"와 GitHub Stats가 있으므로,
  // blogSection만 추가하고, 정의되지 않은 githubStats 변수는 제거합니다.
  return [fixedHeader, blogSection].join("\n\n");
}

function writeReadme(content) {
  const path = "README.md";
  const oldContent = existsSync(path) ? readFileSync(path, "utf8") : "";

  if (oldContent.trim() === content.trim()) {
    console.log("ℹ️ README 내용 동일 — 커밋 생략");
    return;
  }

  writeFileSync(path, content, "utf8");
  console.log("✅ README.md 업데이트 완료!");
}

// ───────────────────── main ─────────────────────
(async function main() {
  try {
    const blogSection = await buildBlogSection();
    const newReadme = buildReadme(blogSection);
    writeReadme(newReadme);
  } catch (error) {
    console.error("❌ README 업데이트 중 오류:", error);
    process.exit(1);
  }
})();
