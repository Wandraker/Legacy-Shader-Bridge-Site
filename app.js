const translations = {
  en: {
    "nav.bridge": "Bridge",
    "nav.architecture": "Architecture",
    "nav.status": "Status",
    "nav.future": "Future",
    "nav.docs": "Docs",
    "ui.close": "Close",
    "hero.eyebrow": "Minecraft 26.x · Fabric · Native Vulkan",
    "hero.lead": "Legacy compatibility. Native Vulkan. One renderer.",
    "hero.body": "LSB is an independent Vulkan shader runtime for Minecraft. Its first frontend reconstructs legacy Iris / OptiFine-style shader pipelines; the same renderer core is being built to support a future native LSB shader API.",
    "hero.get": "Get LSB",
    "hero.source": "Source",
    "hero.alpha": "Active alpha",
    "pipeline.label": "LIVE PIPELINE MODEL",
    "pipeline.legacy": "Legacy shader pack",
    "pipeline.compat": "Compatibility frontend",
    "pipeline.contracts": "Renderer contracts",
    "pipeline.vulkan": "Native Vulkan backend",
    "pipeline.noFallback": "No OpenGL fallback",
    "bridge.eyebrow": "What the bridge actually does",
    "bridge.title": "Compatibility without pretending the old renderer still exists.",
    "bridge.lead": "LSB is not a shader pack and not an OpenGL wrapper. It rebuilds the semantics packs rely on — then feeds them into a renderer with explicit Vulkan-era ownership, state and ordering.",
    "bridge.card1.title": "Semantics",
    "bridge.card1.body": "Frame state, render stages, sampler bindings, attachments and ordering are treated as contracts — not visual guesses.",
    "bridge.card2.title": "Geometry",
    "bridge.card2.body": "Terrain and scene geometry are carried through explicit ownership and provenance instead of fabricated compatibility data.",
    "bridge.card3.title": "Execution",
    "bridge.card3.body": "The target is real native execution on the modern renderer, with unsupported paths staying fail-closed until proven.",
    "arch.eyebrow": "Architecture",
    "arch.title": "Two frontends. One renderer.",
    "arch.lead": "The legacy path is only one side of the bridge. The long-term architecture keeps compatibility and a future native LSB shader API above the same Vulkan renderer foundation.",
    "arch.legacy.title": "Legacy today",
    "arch.legacy.body": "Existing shader packs enter through a compatibility frontend that reconstructs the behavior they expect.",
    "arch.native.title": "Native tomorrow",
    "arch.native.body": "A future LSB-native shader path can expose modern resources and scheduling without forcing everything through historical OpenGL-era assumptions.",
    "arch.renderer.title": "Shared renderer",
    "arch.renderer.body": "Explicit targets, dependencies, ownership, synchronization, scene submission and native Vulkan execution live underneath both paths.",
    "status.eyebrow": "Project state",
    "status.title": "Built in public-facing alpha, tested like renderer infrastructure.",
    "status.lead": "Compatibility is intentionally incomplete. LSB opens stages only when their required data and producer state have been demonstrated in runtime testing.",
    "status.target.label": "Target",
    "status.sodium": "Optional adapter",
    "status.work": "Active alpha",
    "status.frontier.title": "Current engineering focus",
    "status.frontier.body": "Photon is currently LSB's primary real-world legacy development workload and stress test. It is used to finish and validate the bridge itself, not as the scope of the project. Once that target is working reliably enough, the main development frontier moves toward the native LSB shader path.",
    "future.eyebrow": "Beyond compatibility",
    "future.title": "The bridge should eventually lead somewhere new.",
    "future.body": "Once the current legacy development target has proven the renderer fundamentals, LSB can move to a versioned native shader API with explicit render targets, compute workloads, storage resources, temporal lifetimes and modern dependency scheduling.",
    "final.title": "Bring legacy shader semantics into Minecraft's Vulkan era.",
    "final.body": "LSB is under active alpha development. Expect unfinished compatibility, aggressive correctness gates and frequent iteration.",
    "future.docs": "Read stable docs",
    "final.get": "Open on Modrinth",
    "final.docs": "Docs",
    "docs.eyebrow": "Stable documentation",
    "docs.title": "Stable contracts, not moving implementation details.",
    "docs.lead": "This page documents the parts of LSB that are intended to remain true across development. Version-specific renderer frontiers, temporary diagnostics and experimental internals stay out of the public documentation until they stabilize.",
    "docs.model.title": "Project model",
    "docs.model.body": "LSB is an independent client-side Vulkan rendering project for Minecraft. The current frontend reconstructs legacy Iris / OptiFine-style shader behavior. A future native LSB shader frontend is intended to use the same renderer core directly.",
    "docs.platform.title": "Current platform",
    "docs.platform.body": "The active development line targets Minecraft 26.x on Fabric with Java 25+. LSB is client-side and uses a native Vulkan rendering path.",
    "docs.independence.title": "Renderer independence",
    "docs.independence.body": "Renderer integrations are adapters rather than foundations. Sodium support is optional: it may provide acceleration or lifecycle integration when present, but LSB core is designed to remain functional without making Sodium a mandatory dependency.",
    "docs.legacy.title": "Legacy frontend",
    "docs.legacy.body": "Legacy compatibility reconstructs shader-visible contracts such as render stages, resources, attachments, frame state, ordering and texture or sampler semantics. Unsupported behavior should remain explicit instead of being silently replaced by convincing but incorrect data.",
    "docs.native.title": "Native direction",
    "docs.native.body": "The native LSB shader API is a future stage and is not available yet. Its goal is to expose modern renderer capabilities without forcing shader authors through historical OptiFine, Iris or OpenGL-era conventions.",
    "docs.photon.title": "Photon in development",
    "docs.photon.body": "Photon is currently used as a demanding real-world workload and stress test for the legacy side of the bridge. LSB is not a Photon-specific renderer, and Photon is not the final scope of the project.",
    "docs.report.title": "Diagnostics and reports",
    "docs.report.body": "For rendering issues, a complete game log and a short reproduction recording are more useful than an isolated screenshot. Expensive diagnostics are intended to stay opt-in rather than becoming permanent release overhead.",
    "docs.stability": "Intentionally omitted here: current pass counts, temporary shadow milestones, diagnostic-only state and unstable native API syntax. Those belong to changelogs and development notes until they become durable contracts.",
    "footer": "Legacy Shader Bridge · by Onelsey"
  },
  ru: {
    "nav.bridge": "Мост",
    "nav.architecture": "Архитектура",
    "nav.status": "Статус",
    "nav.future": "Будущее",
    "nav.docs": "Документация",
    "ui.close": "Закрыть",
    "hero.eyebrow": "Minecraft 26.x · Fabric · Native Vulkan",
    "hero.lead": "Legacy-совместимость. Нативный Vulkan. Один рендерер.",
    "hero.body": "LSB — независимый Vulkan shader runtime для Minecraft. Первый frontend реконструирует legacy-пайплайны в стиле Iris / OptiFine, а то же ядро рендерера строится с расчётом на будущий нативный shader API LSB.",
    "hero.get": "Скачать LSB",
    "hero.source": "Исходники",
    "hero.alpha": "Активная alpha",
    "pipeline.label": "МОДЕЛЬ ПАЙПЛАЙНА",
    "pipeline.legacy": "Legacy shader pack",
    "pipeline.compat": "Compatibility frontend",
    "pipeline.contracts": "Контракты рендера",
    "pipeline.vulkan": "Native Vulkan backend",
    "pipeline.noFallback": "Без OpenGL fallback",
    "bridge.eyebrow": "Что делает Bridge",
    "bridge.title": "Совместимость без притворства, будто старый рендерер всё ещё существует.",
    "bridge.lead": "LSB — не шейдерпак и не OpenGL-обёртка. Он восстанавливает семантику, на которую опираются паки, а затем проводит её через рендерер с явным Vulkan-era состоянием, владением ресурсами и порядком стадий.",
    "bridge.card1.title": "Семантика",
    "bridge.card1.body": "Frame state, render stages, sampler bindings, attachments и порядок стадий рассматриваются как контракты, а не как визуальные догадки.",
    "bridge.card2.title": "Геометрия",
    "bridge.card2.body": "Terrain и scene geometry проходят через явное владение и provenance вместо выдуманных compatibility-данных.",
    "bridge.card3.title": "Исполнение",
    "bridge.card3.body": "Цель — реальное нативное выполнение на современном рендерере; неподдержанные пути остаются fail-closed до доказательства.",
    "arch.eyebrow": "Архитектура",
    "arch.title": "Два frontend. Один renderer.",
    "arch.lead": "Legacy-совместимость — только одна сторона моста. Долгосрочная архитектура держит compatibility frontend и будущий LSB Native Shader API над общей Vulkan-основой.",
    "arch.legacy.title": "Legacy сегодня",
    "arch.legacy.body": "Существующие шейдерпаки идут через compatibility frontend, который восстанавливает ожидаемое ими поведение.",
    "arch.native.title": "Native завтра",
    "arch.native.body": "Будущий LSB-native путь сможет дать современный доступ к ресурсам и scheduling без исторических ограничений OpenGL-era API.",
    "arch.renderer.title": "Общий renderer",
    "arch.renderer.body": "Явные render targets, зависимости, владение, synchronization, scene submission и native Vulkan execution находятся под обоими frontend.",
    "status.eyebrow": "Состояние проекта",
    "status.title": "Alpha с жёсткими критериями как у renderer infrastructure.",
    "status.lead": "Совместимость намеренно неполная. LSB открывает стадии только когда нужные данные и producer state подтверждены runtime-тестами.",
    "status.target.label": "Цель",
    "status.sodium": "Опциональный adapter",
    "status.work": "Активная alpha",
    "status.frontier.title": "Текущий инженерный фокус",
    "status.frontier.body": "Photon сейчас используется как основная реальная legacy-нагрузка и стресс-тест LSB. Он нужен, чтобы довести и проверить сам мост, а не как конечная цель проекта. Когда этот этап будет достаточно надёжно работать, основной фронтир разработки перейдёт к нативному shader path LSB.",
    "future.eyebrow": "После compatibility",
    "future.title": "Мост должен вести не только назад, но и вперёд.",
    "future.body": "Когда текущая legacy-цель разработки достаточно подтвердит фундамент рендерера, LSB сможет перейти к versioned native shader API с явными render targets, compute workloads, storage resources, temporal lifetime и современной dependency scheduling.",
    "final.title": "Перенести legacy shader semantics в Vulkan-эпоху Minecraft.",
    "final.body": "LSB находится в активной alpha-разработке. Совместимость ещё неполная, correctness gates жёсткие, изменения частые.",
    "future.docs": "Открыть устойчивую документацию",
    "final.get": "Открыть на Modrinth",
    "final.docs": "Документация",
    "docs.eyebrow": "Устойчивая документация",
    "docs.title": "Стабильные контракты, а не временные детали реализации.",
    "docs.lead": "Здесь описываются части LSB, которые должны оставаться верными по мере разработки. Версионные фронтиры рендерера, временная диагностика и экспериментальные внутренности не попадают в публичную документацию, пока не стабилизируются.",
    "docs.model.title": "Модель проекта",
    "docs.model.body": "LSB — независимый клиентский Vulkan-проект рендеринга для Minecraft. Текущий frontend реконструирует поведение legacy-шейдеров в стиле Iris / OptiFine. В будущем нативный shader frontend LSB должен использовать то же ядро рендерера напрямую.",
    "docs.platform.title": "Текущая платформа",
    "docs.platform.body": "Активная ветка разработки нацелена на Minecraft 26.x, Fabric и Java 25+. LSB работает на стороне клиента и использует нативный Vulkan rendering path.",
    "docs.independence.title": "Независимость рендерера",
    "docs.independence.body": "Интеграции с другими рендерами остаются адаптерами, а не фундаментом. Sodium опционален: при наличии он может давать ускорение или lifecycle-интеграцию, но ядро LSB проектируется без обязательной зависимости от Sodium.",
    "docs.legacy.title": "Legacy frontend",
    "docs.legacy.body": "Legacy-совместимость реконструирует видимые шейдеру контракты: render stages, ресурсы, attachments, frame state, порядок, texture и sampler semantics. Неподдерживаемое поведение должно оставаться явным, а не молча заменяться убедительно выглядящими, но неправильными данными.",
    "docs.native.title": "Нативное направление",
    "docs.native.body": "Нативный shader API LSB — будущая стадия и пока недоступен. Его цель — дать современные возможности рендерера без необходимости заставлять авторов шейдеров наследовать исторические соглашения OptiFine, Iris или OpenGL-эпохи.",
    "docs.photon.title": "Photon в разработке",
    "docs.photon.body": "Photon сейчас используется как сложная реальная нагрузка и стресс-тест legacy-стороны моста. LSB не является рендерером специально для Photon, а сам Photon не определяет конечные границы проекта.",
    "docs.report.title": "Диагностика и отчёты",
    "docs.report.body": "Для проблем рендеринга полный игровой лог и короткая запись воспроизведения полезнее отдельного скриншота. Тяжёлая диагностика должна оставаться опциональной, а не превращаться в постоянные накладные расходы релизной версии.",
    "docs.stability": "Здесь намеренно не фиксируются: текущее число pass'ов, временные этапы shadow-разработки, диагностические состояния и нестабильный синтаксис будущего Native API. До превращения в устойчивые контракты им место в changelog и development notes.",
    "footer": "Legacy Shader Bridge · by Onelsey"
  }
};

const root = document.documentElement;
const menu = document.querySelector(".mobile-menu");
const menuButton = document.querySelector(".menu-button");
const menuClose = document.querySelector(".menu-close");

function getInitialLanguage() {
  const saved = localStorage.getItem("lsb-language");
  if (saved === "ru" || saved === "en") return saved;
  return navigator.language.toLowerCase().startsWith("ru") ? "ru" : "en";
}

function setLanguage(language) {
  const table = translations[language] || translations.en;
  root.lang = language;
  localStorage.setItem("lsb-language", language);
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (key && table[key]) node.textContent = table[key];
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.getAttribute("data-lang") === language);
  });
  const description = language === "ru"
    ? "Независимый Vulkan shader runtime для Minecraft: legacy-совместимость сейчас, нативные шейдеры LSB — следующий этап."
    : "Independent Vulkan shader runtime for Minecraft: legacy compatibility today, native LSB shaders next.";
  document.querySelector('meta[name="description"]')?.setAttribute("content", description);
}

function openMenu() {
  menu?.classList.add("open");
  menu?.setAttribute("aria-hidden", "false");
  document.body.classList.add("menu-open");
}

function closeMenu() {
  menu?.classList.remove("open");
  menu?.setAttribute("aria-hidden", "true");
  document.body.classList.remove("menu-open");
}

menuButton?.addEventListener("click", openMenu);
menuClose?.addEventListener("click", closeMenu);
menu?.querySelectorAll("nav a").forEach((link) => link.addEventListener("click", closeMenu));
document.querySelectorAll("[data-lang]").forEach((button) => button.addEventListener("click", () => setLanguage(button.getAttribute("data-lang"))));

setLanguage(getInitialLanguage());

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll("[data-reveal]").forEach((node) => node.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -7% 0px" });
  document.querySelectorAll("[data-reveal]").forEach((node) => observer.observe(node));
}
