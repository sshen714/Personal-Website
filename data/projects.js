// Project list. To add a project, append one object here — no HTML changes needed.
// Only put public repositories and public descriptions here.
window.Site = window.Site || {};

Site.projects = [
  {
    name: 'EZconn Foundation Website',
    url: 'http://www.ezconn.org.tw',
    type: {
      'zh-Hant': '實習專案 · 獨立全端開發',
      'en': 'Internship · Solo full-stack development'
    },
    tags: ['Vue', 'Laravel', 'MySQL', 'Apache'],
    desc: {
      'zh-Hant': '於光紅建聖實習期間獨立完成的基金會官方網站，負責需求整理、前後台開發、內容管理、權限、資料驗證、Excel 匯出、響應式介面、部署與使用者測試。',
      'en': 'A foundation website independently developed during my internship at EZconn, covering requirements, frontend and admin development, content management, permissions, validation, Excel export, responsive UI, deployment and user testing.'
    }
  },
  {
    name: 'CarSimulatorWithCAN',
    url: 'https://github.com/ZAPEinthezone/CarSimulatorWithCAN',
    tags: ['C#', 'CAN', 'IoV'],
    desc: {
      'zh-Hant': '大學車聯網課程專題:結合 CAN 匯流排的汽車模擬器。',
      'en': 'University Internet of Vehicles course project: a car simulator built around the CAN bus.'
    }
  },
  {
    name: "Mr. Xie's Convenience Store",
    url: 'https://github.com/bensonWW/Mr.-Xie-s-Convenience-Store',
    tags: ['PHP'],
    desc: { 'zh-Hant': '謝老闆扛:以 PHP 開發的網站專案。', 'en': "Mr. Xie's Convenience Store: a web project built with PHP." }
  },
  {
    name: 'OOPL',
    url: 'https://github.com/sshen714/OOPL',
    tags: ['C++'],
    desc: {
      'zh-Hant': '重製益智平台遊戲「Dino Shift」:恐龍切換紅綠藍三色以站上對應顏色的平台。使用 PTSD 框架、元件式架構與 AABB 碰撞偵測。',
      'en': 'A recreation of the puzzle-platformer "Dino Shift", where a dinosaur switches between red, green and blue to stand on matching platforms. Built on the PTSD framework with component-based design and AABB collision.'
    }
  },
  {
    name: 'C_Project',
    url: 'https://github.com/sshen714/C_Project',
    tags: ['C', 'OpenGL'],
    desc: {
      'zh-Hant': '以 C 與 OpenGL/GLUT 實作的暗棋,含 AI 對手與中文棋子顯示,支援 Windows 與 macOS。',
      'en': 'Dark Chess written in C with OpenGL/GLUT, featuring an AI opponent and Chinese-character pieces. Runs on Windows and macOS.'
    }
  },
  {
    name: 'web-programming-course',
    url: 'https://github.com/sshen714/web-programming-course',
    tags: ['HTML'],
    desc: {
      'zh-Hant': '網頁程式設計課程的每週練習與作業,以靜態網頁整理。',
      'en': 'Weekly exercises and assignments from a web programming course, collected as static pages.'
    }
  }
];
