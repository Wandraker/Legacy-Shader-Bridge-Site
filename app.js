const translations = {
  en: {
    "nav.bridge": "Bridge",
    "nav.architecture": "Architecture",
    "nav.status": "Status",
    "nav.future": "Future",
    "ui.close": "Close",
    "hero.eyebrow": "Minecraft 26.x · Fabric · Native Vulkan",
    "hero.lead": "Classic shader pipelines. Modern rendering. One bridge between them.",
    "hero.body": "LSB reconstructs the rendering contracts legacy Iris / OptiFine-style shader packs expect and carries them onto Minecraft's native Vulkan-era rendering stack — without an OpenGL compatibility renderer.",
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
    "status.frontier.body": "Legacy frame and G-buffer semantics, scene submission, attachment provenance, terrain ownership and the shadow path are being brought across incrementally. Photon is used heavily because it exercises a broad legacy surface, but LSB is not designed around one shader pack.",
    "rules.title": "Three rules LSB refuses to break",
    "rules.1.title": "No fake producer data",
    "rules.1.body": "Missing data stays missing. Neutral placeholders are not promoted as if a real stage produced them.",
    "rules.2.title": "No accidental hard dependency",
    "rules.2.body": "Renderer integrations remain adapters. Sodium can accelerate or provide lifecycle hooks without becoming LSB core.",
    "rules.3.title": "No compile = pass shortcut",
    "rules.3.body": "A shader compiling is not enough. Runtime ownership, ordering and visible behavior still have to be proven.",
    "future.eyebrow": "Beyond compatibility",
    "future.title": "The bridge should eventually lead somewhere new.",
    "future.body": "Once the renderer fundamentals are stable across real packs, LSB can define a versioned native shader API with explicit render targets, compute workloads, storage resources, temporal lifetimes and modern dependency scheduling.",
    "final.title": "Bring legacy shader semantics into Minecraft's Vulkan era.",
    "final.body": "LSB is under active alpha development. Expect unfinished compatibility, aggressive correctness gates and frequent iteration.",
    "final.get": "Open on Modrinth",
    "footer": "Legacy Shader Bridge · by Onelsey"
  },
  ru: {
    "nav.bridge": "Мост",
    "nav.architecture": "Архитектура",
    "nav.status": "Статус",
    "nav.future": "Будущее",
    "ui.close": "Закрыть",
    "hero.eyebrow": "Minecraft 26.x · Fabric · Native Vulkan",
    "hero.lead": "Классические шейдерные пайплайны. Современный рендеринг. Один мост между ними.",
    "hero.body": "LSB восстанавливает контракты рендеринга, которых ожидают legacy-шейдерпаки в стиле Iris / OptiFine, и переносит их на нативный Vulkan-путь современного Minecraft — без OpenGL compatibility renderer.",
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
    "status.frontier.body": "Legacy frame и G-buffer semantics, scene submission, attachment provenance, terrain ownership и shadow path переносятся постепенно. Photon активно используется в разработке, потому что хорошо нагружает legacy-контракты, но LSB не проектируется под один конкретный шейдерпак.",
    "rules.title": "Три правила, которые LSB не нарушает",
    "rules.1.title": "Никаких фейковых producer data",
    "rules.1.body": "Если данных нет — их нет. Нейтральная заглушка не выдаётся за настоящий результат стадии.",
    "rules.2.title": "Никаких случайных hard dependency",
    "rules.2.body": "Renderer integration остаётся adapter. Sodium может помогать, но не превращается в ядро LSB.",
    "rules.3.title": "Compile не равен PASS",
    "rules.3.body": "Сам факт компиляции шейдера ничего не доказывает. Нужны runtime ownership, ordering и корректный видимый результат.",
    "future.eyebrow": "После compatibility",
    "future.title": "Мост должен вести не только назад, но и вперёд.",
    "future.body": "Когда renderer fundamentals стабилизируются на нескольких реальных shader packs, LSB сможет определить versioned native shader API с явными render targets, compute workloads, storage resources, temporal lifetime и современной dependency scheduling.",
    "final.title": "Перенести legacy shader semantics в Vulkan-эпоху Minecraft.",
    "final.body": "LSB находится в активной alpha-разработке. Совместимость ещё неполная, correctness gates жёсткие, изменения частые.",
    "final.get": "Открыть на Modrinth",
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
    ? "Legacy Shader Bridge переносит legacy shader-pack semantics Minecraft на нативный Vulkan rendering path."
    : "Legacy Shader Bridge carries legacy Minecraft shader-pack semantics onto a native Vulkan rendering path.";
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
