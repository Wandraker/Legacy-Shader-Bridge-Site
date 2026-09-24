const translations = {
  en: {
    "nav.bridge": "Bridge",
    "nav.architecture": "Architecture",
    "nav.status": "Status",
    "nav.future": "Future",
    "nav.docs": "Docs",
    "ui.close": "Close",
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
    "bridge.visual.legacy": "LEGACY",
    "bridge.visual.contract": "CONTRACT",
    "bridge.visual.semanticCaption": "state · bindings · targets · ordering",
    "bridge.visual.terrain": "terrain",
    "bridge.visual.scene": "scene mesh",
    "bridge.visual.entity": "entity",
    "bridge.visual.executionCaption": "translated passes → native GPU work",
    "bridge.card1.body": "LSB preserves what each stage expects: frame state, bindings, attachments and ordering become explicit renderer contracts.",
    "bridge.card2.title": "Geometry",
    "bridge.card2.body": "Terrain, entities and other scene geometry are submitted as real renderer data with explicit ownership and provenance.",
    "bridge.card3.title": "Execution",
    "bridge.card3.body": "Reconstructed stages become actual Vulkan work. Unsupported paths remain closed instead of being replaced with fake success.",
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
    "future.title": "The bridge starts with legacy. It does not have to end there.",
    "future.body": "Once Photon reaches a truthful working state on the legacy frontend, the primary development frontier moves to the native LSB shader API. Legacy compatibility remains available and can expand later where it is actually useful, without blocking the renderer's next stage.",
    "final.title": "Legacy bridge now. Native shader platform next.",
    "final.body": "LSB is under active alpha development. The current legacy frontend is still incomplete, and the native LSB shader API is a future development stage rather than an available feature today.",
    "future.docs": "Documentation",
    "final.get": "Open on Modrinth",
    "final.docs": "Docs",
    "docs.eyebrow": "Documentation",
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
    "docs.portal.kicker": "Documentation",
    "docs.portal.title": "Start with the renderer model.",
    "docs.portal.lead": "LSB documentation is structured as a path: understand the project first, then the renderer, the legacy frontend, diagnostics, and finally the planned native direction.",
    "docs.portal.start": "Start here",
    "docs.portal.site": "Project site",
    "docs.portal.stable": "Only stable contracts are documented here. Build-specific pass counts, temporary diagnostics and moving implementation frontiers stay in changelogs until they become durable.",
    "docs.card.start.title": "Getting started",
    "docs.card.start.body": "What LSB is, what it is not, and how to read the rest of the documentation.",
    "docs.card.renderer.title": "Renderer model",
    "docs.card.renderer.body": "How the shared Vulkan renderer sits below compatibility and the future native frontend.",
    "docs.card.legacy.title": "Legacy frontend",
    "docs.card.legacy.body": "The compatibility contract, fail-closed behavior and the role of Photon during development.",
    "docs.card.diagnostics.title": "Diagnostics",
    "docs.card.diagnostics.body": "What evidence is useful when a rendering path breaks and what belongs in bug reports.",
    "docs.card.native.title": "Native LSB",
    "docs.card.native.body": "The planned direction after the legacy development target is working. No unstable API syntax is frozen here.",
    "docs.badge.available": "Available",
    "docs.badge.planned": "Planned",
    "docs.side.start": "Start here",
    "docs.side.concepts": "Concepts",
    "docs.side.development": "Development",
    "docs.side.future": "Future",
    "docs.nav.home": "Overview",
    "docs.nav.start": "Getting started",
    "docs.nav.renderer": "Renderer model",
    "docs.nav.legacy": "Legacy frontend",
    "docs.nav.diagnostics": "Diagnostics & reports",
    "docs.nav.native": "Native LSB",
    "docs.article.start.kicker": "Start here",
    "docs.article.start.title": "Understand the bridge before the details.",
    "docs.article.start.lead": "LSB is a client-side Vulkan rendering project for Minecraft. Its current frontend reconstructs legacy shader-pack behavior, while the renderer underneath is being built as the foundation for a future native shader path.",
    "docs.article.start.what.title": "What LSB is",
    "docs.article.start.what.body": "LSB is a rendering platform and compatibility bridge. It reconstructs shader-visible contracts such as stages, resources, attachments, frame state and ordering, then executes compatible work on its Vulkan renderer.",
    "docs.article.start.not.title": "What LSB is not",
    "docs.article.start.not.body": "LSB is not a shader pack, not an OpenGL wrapper and not a visual preset that imitates another renderer. Unsupported behavior should stay explicit instead of being hidden behind convincing approximations.",
    "docs.article.start.stage.title": "Current stage",
    "docs.article.start.stage.body": "Development is currently focused on bringing the legacy side to a truthful working state with Photon as a demanding real-world workload. Once that target is sufficiently complete, the main frontier moves toward the native LSB shader path.",
    "docs.article.renderer.kicker": "Concepts",
    "docs.article.renderer.title": "One renderer, multiple frontends.",
    "docs.article.renderer.lead": "The compatibility layer is not the renderer itself. Legacy and future native shader paths are intended to meet above the same renderer core.",
    "docs.article.renderer.core.title": "Shared Vulkan core",
    "docs.article.renderer.core.body": "Scene submission, resource ownership, render targets, ordering, synchronization and native Vulkan execution belong to the shared renderer rather than to one shader frontend.",
    "docs.article.renderer.frontends.title": "Frontend boundary",
    "docs.article.renderer.frontends.body": "The legacy frontend translates historical shader-pack expectations. A future native frontend can expose modern renderer capabilities directly without forcing authors through legacy conventions.",
    "docs.article.renderer.independence.title": "Renderer independence",
    "docs.article.renderer.independence.body": "External renderer integrations remain adapters. Sodium may be useful when present, but it is not a mandatory foundation of LSB core.",
    "docs.article.legacy.kicker": "Compatibility",
    "docs.article.legacy.title": "Legacy is the first side of the bridge.",
    "docs.article.legacy.lead": "The goal is a truthful working compatibility frontend, not endless emulation of every historical quirk ever used by every shader pack.",
    "docs.article.legacy.contract.title": "Compatibility contract",
    "docs.article.legacy.contract.body": "LSB reconstructs the stages, bindings, resources and ordering a legacy pack expects. A stage is not treated as working merely because its shader compiles.",
    "docs.article.legacy.fail.title": "Fail closed",
    "docs.article.legacy.fail.body": "Missing producer data stays missing. Unsupported behavior remains visible as unsupported instead of being silently replaced by fabricated attachment contents or fake producer state.",
    "docs.article.legacy.photon.title": "Why Photon",
    "docs.article.legacy.photon.body": "Photon is currently a primary real-world workload because its multi-pass pipeline exposes renderer and compatibility problems efficiently. It is a development target and stress test, not the final scope of LSB.",
    "docs.article.diagnostics.kicker": "Development",
    "docs.article.diagnostics.title": "Useful reports need runtime evidence.",
    "docs.article.diagnostics.lead": "Renderer problems are often state, lifetime or ordering problems. A single screenshot can show the symptom without showing why it happened.",
    "docs.article.diagnostics.logs.title": "Send the full log",
    "docs.article.diagnostics.logs.body": "A complete game log preserves initialization, capability checks, stage transitions and diagnostics that may happen well before the visible artifact appears.",
    "docs.article.diagnostics.video.title": "Include a short reproduction",
    "docs.article.diagnostics.video.body": "A short recording is useful for timing-sensitive problems, temporal artifacts, black-screen transitions and issues that appear only after movement or scene changes.",
    "docs.article.diagnostics.noise.title": "Temporary diagnostics stay temporary",
    "docs.article.diagnostics.noise.body": "Heavy counters, provenance scans and development-only telemetry should remain opt-in. Public documentation does not freeze temporary diagnostic machinery into the permanent renderer contract.",
    "docs.article.native.kicker": "Future",
    "docs.article.native.title": "Native LSB is the next major stage.",
    "docs.article.native.lead": "The native shader API is not available yet. This page records direction only, not a syntax or API contract that would be expensive to undo later.",
    "docs.article.native.goal.title": "Goal",
    "docs.article.native.goal.body": "Native LSB shaders should be able to target the renderer directly instead of inheriting historical OptiFine, Iris or OpenGL-era assumptions.",
    "docs.article.native.foundation.title": "Same renderer foundation",
    "docs.article.native.foundation.body": "The legacy frontend and the future native frontend are intended to share renderer infrastructure rather than become two unrelated rendering systems.",
    "docs.article.native.freeze.title": "What is deliberately not frozen",
    "docs.article.native.freeze.body": "File layout, shader syntax, resource declarations, pass scheduling syntax and other public API details remain undecided until the renderer core is stable enough to support them cleanly.",
    "docs.pager.previous": "Previous",
    "docs.pager.next": "Next",
    "docs.pager.back": "Back to docs",
    "license.back": "← Legacy Shader Bridge",
    "license.label": "LICENSE",
    "license.title": "Legacy Shader Bridge Source-Available License v1.0",
    "license.copy": "Canonical public copy of the license distributed with Legacy Shader Bridge.",
    "license.authority": "The English text is the authoritative license. The Russian translation is provided for convenience.",
    "license.home": "Home",
    "footer": "© 2026 Onelsey. All rights reserved."
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
    "bridge.visual.legacy": "LEGACY",
    "bridge.visual.contract": "КОНТРАКТ",
    "bridge.visual.semanticCaption": "state · bindings · targets · порядок",
    "bridge.visual.terrain": "terrain",
    "bridge.visual.scene": "геометрия сцены",
    "bridge.visual.entity": "entity",
    "bridge.visual.executionCaption": "переведённые passes → реальная GPU-работа",
    "bridge.card1.body": "LSB сохраняет то, чего ожидает каждая стадия: frame state, bindings, attachments и порядок превращаются в явные контракты renderer-а.",
    "bridge.card2.title": "Геометрия",
    "bridge.card2.body": "Terrain, entities и другая геометрия сцены передаются как реальные данные renderer-а с явным ownership и provenance.",
    "bridge.card3.title": "Исполнение",
    "bridge.card3.body": "Реконструированные стадии превращаются в реальную Vulkan-работу. Неподдерживаемые пути остаются закрытыми вместо фальшивого успеха.",
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
    "future.title": "Мост начинается с legacy. Но он не обязан на нём заканчиваться.",
    "future.body": "Когда Photon достигнет честного рабочего состояния на legacy frontend, основной фронтир разработки перейдёт к нативному shader API LSB. Legacy-совместимость останется доступной и сможет расширяться позже там, где это действительно нужно, не блокируя следующий этап renderer-а.",
    "final.title": "Сейчас — legacy bridge. Следом — нативная shader-платформа.",
    "final.body": "LSB находится в активной alpha-разработке. Текущий legacy frontend ещё не завершён, а нативный shader API LSB — будущая стадия разработки, а не уже доступная функция.",
    "future.docs": "Документация",
    "final.get": "Открыть на Modrinth",
    "final.docs": "Документация",
    "docs.eyebrow": "Документация",
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
    "docs.portal.kicker": "Документация",
    "docs.portal.title": "Начни с модели рендерера.",
    "docs.portal.lead": "Документация LSB построена как маршрут: сначала понять сам проект, затем renderer, legacy frontend, диагностику и только после этого — запланированное нативное направление.",
    "docs.portal.start": "Начать",
    "docs.portal.site": "Сайт проекта",
    "docs.portal.stable": "Здесь фиксируются только устойчивые контракты. Число pass'ов конкретного билда, временная диагностика и движущийся development frontier остаются в changelog, пока не станут постоянной частью проекта.",
    "docs.card.start.title": "С чего начать",
    "docs.card.start.body": "Что такое LSB, чем он не является и как читать остальную документацию.",
    "docs.card.renderer.title": "Модель рендерера",
    "docs.card.renderer.body": "Как общий Vulkan renderer находится под compatibility frontend и будущим нативным frontend.",
    "docs.card.legacy.title": "Legacy frontend",
    "docs.card.legacy.body": "Контракт совместимости, fail-closed поведение и роль Photon во время разработки.",
    "docs.card.diagnostics.title": "Диагностика",
    "docs.card.diagnostics.body": "Какие данные полезны при поломке rendering path и что стоит прикладывать к отчёту.",
    "docs.card.native.title": "Native LSB",
    "docs.card.native.body": "Запланированное направление после завершения текущей legacy-цели. Нестабильный синтаксис API здесь намеренно не фиксируется.",
    "docs.badge.available": "Доступно",
    "docs.badge.planned": "Запланировано",
    "docs.side.start": "Начало",
    "docs.side.concepts": "Концепции",
    "docs.side.development": "Разработка",
    "docs.side.future": "Будущее",
    "docs.nav.home": "Обзор",
    "docs.nav.start": "С чего начать",
    "docs.nav.renderer": "Модель рендерера",
    "docs.nav.legacy": "Legacy frontend",
    "docs.nav.diagnostics": "Диагностика и отчёты",
    "docs.nav.native": "Native LSB",
    "docs.article.start.kicker": "С чего начать",
    "docs.article.start.title": "Сначала пойми мост, потом детали.",
    "docs.article.start.lead": "LSB — клиентский Vulkan-проект рендеринга для Minecraft. Текущий frontend реконструирует поведение legacy shader pack'ов, а renderer под ним строится как фундамент для будущего нативного shader path.",
    "docs.article.start.what.title": "Что такое LSB",
    "docs.article.start.what.body": "LSB — rendering platform и compatibility bridge. Он реконструирует видимые шейдеру контракты: стадии, ресурсы, attachments, frame state и ordering, после чего выполняет совместимую работу через свой Vulkan renderer.",
    "docs.article.start.not.title": "Чем LSB не является",
    "docs.article.start.not.body": "LSB — не shader pack, не OpenGL-обёртка и не визуальный preset, имитирующий другой renderer. Неподдерживаемое поведение должно оставаться явным, а не скрываться за убедительными приближениями.",
    "docs.article.start.stage.title": "Текущий этап",
    "docs.article.start.stage.body": "Сейчас разработка сосредоточена на доведении legacy-стороны до честного рабочего состояния, а Photon используется как сложный реальный workload. Когда эта цель будет достаточно завершена, основной frontier перейдёт к нативному shader path LSB.",
    "docs.article.renderer.kicker": "Концепции",
    "docs.article.renderer.title": "Один renderer, несколько frontend.",
    "docs.article.renderer.lead": "Compatibility layer — не сам renderer. Legacy и будущий native shader path должны сходиться над одним и тем же renderer core.",
    "docs.article.renderer.core.title": "Общее Vulkan-ядро",
    "docs.article.renderer.core.body": "Scene submission, владение ресурсами, render targets, ordering, synchronization и native Vulkan execution принадлежат общему renderer, а не одному конкретному shader frontend.",
    "docs.article.renderer.frontends.title": "Граница frontend",
    "docs.article.renderer.frontends.body": "Legacy frontend переводит исторические ожидания shader pack'ов. Будущий native frontend сможет давать современные возможности renderer напрямую, не заставляя авторов проходить через legacy-конвенции.",
    "docs.article.renderer.independence.title": "Независимость renderer",
    "docs.article.renderer.independence.body": "Интеграции с внешними renderer остаются адаптерами. Sodium может быть полезен при наличии, но он не является обязательным фундаментом LSB core.",
    "docs.article.legacy.kicker": "Совместимость",
    "docs.article.legacy.title": "Legacy — первая сторона моста.",
    "docs.article.legacy.lead": "Цель — честный рабочий compatibility frontend, а не бесконечная эмуляция каждого исторического костыля, который когда-либо использовал любой shader pack.",
    "docs.article.legacy.contract.title": "Контракт совместимости",
    "docs.article.legacy.contract.body": "LSB реконструирует стадии, bindings, ресурсы и ordering, которых ожидает legacy pack. Стадия не считается рабочей только потому, что её shader скомпилировался.",
    "docs.article.legacy.fail.title": "Fail closed",
    "docs.article.legacy.fail.body": "Если producer data нет — их нет. Неподдерживаемое поведение остаётся явно неподдерживаемым вместо подмены выдуманными attachment contents или фейковым producer state.",
    "docs.article.legacy.photon.title": "Почему Photon",
    "docs.article.legacy.photon.body": "Photon сейчас является одним из основных реальных workload, потому что его multi-pass pipeline эффективно вскрывает проблемы renderer и compatibility. Это development target и stress test, а не конечная граница LSB.",
    "docs.article.diagnostics.kicker": "Разработка",
    "docs.article.diagnostics.title": "Полезному отчёту нужны runtime-доказательства.",
    "docs.article.diagnostics.lead": "Проблемы renderer часто связаны со state, lifetime или ordering. Один скриншот может показать симптом, но не причину.",
    "docs.article.diagnostics.logs.title": "Нужен полный лог",
    "docs.article.diagnostics.logs.body": "Полный игровой лог сохраняет инициализацию, capability checks, переходы стадий и диагностику, которая могла появиться задолго до видимого артефакта.",
    "docs.article.diagnostics.video.title": "Добавь короткое воспроизведение",
    "docs.article.diagnostics.video.body": "Короткая запись полезна для timing-sensitive проблем, temporal artifacts, переходов в black screen и ошибок, появляющихся только после движения или изменения сцены.",
    "docs.article.diagnostics.noise.title": "Временная диагностика остаётся временной",
    "docs.article.diagnostics.noise.body": "Тяжёлые counters, provenance scans и development-only telemetry должны оставаться opt-in. Публичная документация не превращает временную диагностическую механику в постоянный renderer contract.",
    "docs.article.native.kicker": "Будущее",
    "docs.article.native.title": "Native LSB — следующий крупный этап.",
    "docs.article.native.lead": "Нативный shader API пока недоступен. Эта страница фиксирует только направление, а не синтаксис или API-контракт, который потом пришлось бы болезненно ломать.",
    "docs.article.native.goal.title": "Цель",
    "docs.article.native.goal.body": "Нативные LSB shaders должны иметь возможность работать с renderer напрямую, не наследуя исторические ограничения и предположения OptiFine, Iris или OpenGL-эпохи.",
    "docs.article.native.foundation.title": "То же основание renderer",
    "docs.article.native.foundation.body": "Legacy frontend и будущий native frontend должны разделять renderer infrastructure, а не превращаться в две несвязанные rendering system.",
    "docs.article.native.freeze.title": "Что намеренно не фиксируется",
    "docs.article.native.freeze.body": "File layout, shader syntax, resource declarations, синтаксис pass scheduling и другие детали публичного API остаются нерешёнными, пока renderer core не станет достаточно стабильным.",
    "docs.pager.previous": "Назад",
    "docs.pager.next": "Дальше",
    "docs.pager.back": "К документации",
    "license.back": "← Legacy Shader Bridge",
    "license.label": "ЛИЦЕНЗИЯ",
    "license.title": "Лицензия Legacy Shader Bridge с доступным исходным кодом v1.0",
    "license.copy": "Публичная копия лицензии, распространяемой вместе с Legacy Shader Bridge.",
    "license.authority": "Юридически применимой версией лицензии является английский текст. Русский перевод предоставлен для удобства.",
    "license.home": "Главная",
    "footer": "© 2026 Onelsey. Все права защищены."
  }
};

const root = document.documentElement;
const menu = document.querySelector(".mobile-menu");
const menuButton = document.querySelector(".menu-button");
const menuClose = document.querySelector(".menu-close");

if (document.body.classList.contains("docs-page")) {
  document.querySelectorAll(
    '.desktop-nav a[href*="#status"], .desktop-nav a[href*="#future"], .desktop-nav a[href$="docs.html"], .mobile-menu nav a[href*="#status"], .mobile-menu nav a[href*="#future"], .mobile-menu nav a[href$="docs.html"]'
  ).forEach((node) => node.remove());
}

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
  document.querySelectorAll("[data-license-lang]").forEach((node) => {
    node.hidden = node.getAttribute("data-license-lang") !== language;
  });
  if (document.body.classList.contains("license-page")) {
    document.title = language === "ru" ? "Legacy Shader Bridge — Лицензия" : "Legacy Shader Bridge — License";
  }
  const copyrightText = language === "ru"
    ? "© 2026 Onelsey. Все права защищены."
    : "© 2026 Onelsey. All rights reserved.";
  const docsCopyright = document.querySelector(".docs-portal-footer > span:first-child");
  if (docsCopyright) docsCopyright.textContent = copyrightText;
  const licenseCopyright = document.querySelector(".license-footer > span:first-child");
  if (licenseCopyright) licenseCopyright.textContent = copyrightText;
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
