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
  <a href="https://j2su0218.tistory.com">
    <img src="https://img.shields.io/badge/Blog-FF9800?style=for-the-badge&logo=Blogger&logoColor=white" />
  </a>
  <a href="mailto:admin@j2su0218@gmail.com">
    <img src="https://img.shields.io/badge/Email-30B980?style=for-the-badge&logo=Gmail&logoColor=white" />
  </a>
</p>

## Professional Summary 

- **Unity & XR 전문가:** 3년 경력의 Unity(C#) 기반 **XR/AR 학습 및 피트니스 콘텐츠** 개발자. 프로젝트 초기 기획부터 상용화까지 전 과정 경험 보유.
- **서버 연동 및 디지털 트윈:** **TCP/IP, RESTful API 통신 구조**를 설계하고, IoT 센서 데이터 및 AI API(OpenAI)를 Unity 환경에 통합 구현하여 **디지털 트윈** 시스템 PoC 성공.
- **하드웨어 인터랙션:** Leap Motion, Kinect, FIT-TAG, Leia 3D SDK 등 **외부 센서 및 장비 연동** 기반의 인터랙티브 콘텐츠 개발 전문.
- **기술 확장성:** Java/Spring Boot 풀스택 개발 경험을 통해 클라이언트-서버 시스템 전반의 이해도 확보 및 문제 해결 능력 보유.

## Tech Stack & Tools

### Game & XR Development 
![Unity](https://img.shields.io/badge/Unity-000000?style=for-the-badge&logo=unity&logoColor=white) 
![C#](https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=csharp&logoColor=white) 
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

| **Unity Stacks** | Timeline, Cinemachine, DoTween, TextMeshPro, URP, Particle System |
| **XR/Sensor** | Leia 3D SDK, Vuforia (AR), Leap Motion, Kinect, FIT-TAG (모션/피트니스) |

### Server & Cloud Integration
![Java](https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=openjdk&logoColor=white) 
![Spring&nbsp;Boot](https://img.shields.io/badge/SpringBoot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white) 
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

| **Server/API** | Spring Security, JWT, RESTful API, FastAPI (Python), TCP/IP, Fetch/Axios |
| **Cloud/Tools** | OpenAI API, Render, Firebase, Postman |

### Frontend & Others
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) 
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white) 
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

| **Web** | SPA 구조 설계, 상태 관리, 반응형 UI/UX (Bootstrap) |
| **Design** | Figma, Adobe Photoshop/Premiere Pro |

## Key Projects by Domain

프로젝트명 클릭 시 상세 내용과 기술 스택을 담은 GitHub 리포지토리로 연결됩니다.

### Unity 기반 서버 연동 및 디지털 트윈 

| Project Name | Key Achievement / Role | Stacks |
| :--- | :--- | :--- |
| **[Urban Twin](https://github.com/lunelDev/UrbanTwin)** | **디지털 트윈 PoC:** TCP/IP 통신 기반 IoT 센서 데이터 실시간 시각화 구현. | Unity, C#, .NET 6, **TCP/IP**, LineRenderer |
| **[GPT-UnityProxyDemo](https://github.com/lunelDev/GPT-UnityProxyDemo)** | **AI 연동:** **OpenAI API**를 Render Proxy 서버와 연동한 대화형 AI 시스템 구현. | Unity, C#, **OpenAI API**, Render, JSON |
| **[ImageGalleryAPI](https://github.com/lunelDev/RestGallery)** | **RESTful API 연동:** Unity 클라이언트와 FastAPI 서버 간 이미지 CRUD 풀사이클 시스템 구축. | Unity, C#, **Python(FastAPI)**, UnityWebRequest |

### Core XR/AR & Fitness Development 

| Project Name | Key Achievement / Role| Stacks |
| :--- | :--- | :--- |
| **[PCR 실험 탐구](https://github.com/lunelDev/MC_LHT2_03_PCR), [세포의 세계](https://github.com/lunelDev/NMB_09_0201)** | **XR 과학 학습:** Leia 3D 디스플레이 최적화, 정교한 과학 실험 로직 구현 및 5단계 학습 흐름 개발. | Unity, C#, **Leia 3D SDK**, DOTween |
| **[보자마자 피트니스 - 런 투 더 문](https://github.com/lunelDev/BMF-Run.to.the.Moon)** | **스토리형 홈 피트니스:** **FIT-TAG 센서** 연동 러닝 게임. 맵 20종·산소 시스템·명예의 전당 랭킹·내러티브 개발(개발 100%), 한/영 현지화. | Unity, C#, **FIT-TAG**, Cinemachine, Addressables |
| **[보자마자 피트니스 - 어메이징 코어](https://github.com/lunelDev/BMF-AmazingCore)** | **코어 운동 게임화:** **FIT-TAG 센서** 기반 트레이닝(7×3)·미니게임 3종·3D 자세 뷰어 개발(개발 100%), Google Play 출시. | Unity, C#, **FIT-TAG**, DOTween, Localization |
| **[보자마자 피트니스 - 시티투어 부산](https://github.com/lunelDev/BMF-CityTourBusan)** | **피트니스 확장:** **FIT-TAG 센서 연동**, WebView 상점 및 다국어 지원 환경 구축. | Unity, C#, **FIT-TAG**, WebView, Localization |
| **[복둥이의 시간 여행](https://github.com/lunelDev/Bokcheon-dong)** | **AR 박물관:** Vuforia 기반 AR 마커 인식, 애니메이션/나레이션 동기화 및 3D 모델 최적화. | Unity, C#, **Vuforia**, DOTweenPro |
| **[보자마자 브레인](https://github.com/lunelDev/BMF-BojamajaBrain)** | **모션 인식/인지 훈련:** **Leap Motion/Kinect** 기반 인지훈련 콘텐츠 UI 재구성 및 UX 개선. | Unity, C#, **Leap Motion**, **Kinect** |

### Full-stack Web Development 

| Project Name| Key Achievement / Role | Stacks |
| :--- | :--- | :--- |
| **[Team_ShakePot](https://github.com/lunelDev/Team_ShakePot)** | **헬스케어 플랫폼:** Spring Boot API 개발, **JWT 인증/권한 제어** 및 React 기반 UI/UX 설계. | **Spring Boot**, Java, React, MySQL, **JWT** |
| **[SnapTide](https://github.com/lunelDev/SnapTide)** | **Web Service:** Spring Boot 기반 백엔드 및 API 개발, **Spring Security**를 활용한 인증 기능 구현. | **Spring Boot**, Java, MariaDB, React |

## GitHub Stats & Learnings

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
