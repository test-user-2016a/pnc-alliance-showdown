export type Language = "en" | "it" | "pt" | "de" | "ru" | "uk" | "fr";

export interface Translations {
  header: {
    title: string;
    subtitle: string;
    dashboard: string;
  };
  welcome: {
    badge: string;
    title: string;
    subtitle: string;
  };
  filters: {
    search: string;
    all: string;
    personal: string;
    sort: string;
    quest: string;
    type: string;
    points: string;
    time: string;
  };
  stats: {
    showing: string;
    sorting: string;
    asc: string;
    desc: string;
  };
  card: {
    requirement: string;
    points: string;
    time: string;
    noTime: string;
  };
  modal: {
    reward: string;
    timeLimit: string;
    tip: string;
    close: string;
    noTip: string;
  };
  empty: {
    title: string;
    subtitle: string;
  };
  recommendation: {
    recommended: string;
    not_recommended: string;
    neutral: string;
  };
  tips: {
    gatherQuest: string;
    heroShard: string;
  };
  info: {
    button: string;
    slides: {
      slide1: string;
      slide2: string;
      slide3: string;
    };
  };
  types: Record<string, string>;
  questNames: Record<string, string>;
}

export const translations: Record<Language, Translations> = {
  en: {
    header: { title: "Alliance Showdown", subtitle: "Puzzles & Chaos", dashboard: "Dashboard" },
    welcome: { badge: "Quest Optimization Engine v1.0", title: "Quest Data Dashboard", subtitle: "Visualize, sort, and filter every alliance showdown quest with ease. Maximize your rewards and efficiency with real-time data analysis." },
    filters: { search: "Search quests...", all: "All Types", personal: "Personal (240)", sort: "Sort By", quest: "Quest Name", type: "Quest Type", points: "Points", time: "Time" },
    stats: { showing: "Showing {count} Quests", sorting: "Sorting by {sortBy} ({order})", asc: "asc", desc: "desc" },
    card: { requirement: "Requirement", points: "Points", time: "Time", noTime: "No time limit" },
    modal: { reward: "Reward", timeLimit: "Time Limit", tip: "Helpful Tip", close: "Got it", noTip: "No specific tips available for this quest." },
    empty: { title: "No quests found", subtitle: "Try adjusting your filters or search query." },
    recommendation: { recommended: "✨ Recommended", not_recommended: "⚠️ Not Recommended", neutral: "Standard" },
    tips: {
      gatherQuest: "Before you send out your troops to gather:\nUse a resource gather speedup item\nSwitch to your economy page",
      heroShard: "Before picking the quest, calculate the points from the cards (red, purple, blue) you already have. You can also exchange shards to help reach the requirement — 10 Gina shards from Trial Turret, Fiona shards from the Sapphire Shop, Gerolin shards from the Arena Shop and Arena chests, and Odell/Tutanhet shards from monsters."
    },
    info: {
      button: "Open information",
      slides: {
        slide1: "This is how the quests board looks for everyone (minus signs aren't visible). New quests appear every 30 minutes when refreshed, but bad quests get refreshed almost instantly, so please be patient.",
        slide2: "These are personal quests, only available to you. If you don't like them, you get a chance to refresh them every 10 minutes.",
        slide3: "Avoid quests with a \"?\" sign. Like bad quests, they get refreshed almost instantly, so there's no need to attempt them."
      }
    },
    types: { arena: "Arena", market: "Black Market", alliance: "Alliance", ap: "Consume AP", diamond: "Diamond", stamina: "Stamina", gather: "Gathering", gear: "Gear", hero: "Hero Shards", heal: "Healing", help: "Help Allies", building: "Building Power", research: "Research Power", troop: "Troop Power", rally: "Monster Dens", speedup: "Speedups", transport: "Transport", packs: "Buy Packs", other: "Other" },
    questNames: {
      "Arena Challenge": "Arena Challenge",
      "Black Market": "Black Market",
      "Consume Alliance Coins": "Consume Alliance Coins",
      "Consume AP": "Consume AP",
      "Consume Diamond": "Consume Diamond",
      "Consume Stamina": "Consume Stamina",
      "Gather Food": "Gather Food",
      "Gather Iron": "Gather Iron",
      "Gather Stone": "Gather Stone",
      "Gather Wood": "Gather Wood",
      "Get Gear Materials": "Get Gear Materials",
      "Get Hero Shard": "Get Hero Shard",
      "Heal Units": "Heal Units",
      "Help Allies": "Help Allies",
      "Improve Building Power": "Improve Building Power",
      "Improve Research Power": "Improve Research Power",
      "Improve Troop Power": "Improve Troop Power",
      "Rally on Monster Dens": "Rally on Monster Dens",
      "Research": "Research",
      "Speedups (Build/Tech/Training/Healing)": "Speedups (Build/Tech/Training/Healing)",
      "Speedup (Build/Tech/Training/Healing)": "Speedup (Build/Tech/Training/Healing)",
      "Transport Any Resources to Allies": "Transport Any Resources to Allies",
      "Transport Food among allies": "Transport Food among allies",
      "Transport Iron among allies": "Transport Iron among allies",
      "Transport Stone among allies": "Transport Stone among allies",
      "Transport Wood among allies": "Transport Wood among allies",
      "Buy Packs": "Buy Packs",
      "Gain Diamonds via Packs": "Gain Diamonds via Packs"
    }
  },
  it: {
    header: { title: "Sfida tra Alleanze", subtitle: "Puzzles & Chaos", dashboard: "Dashboard" },
    welcome: { badge: "Motore di Ottimizzazione Missioni v1.0", title: "Dashboard Dati Missioni", subtitle: "Visualizza, ordina e filtra ogni missione della sfida tra alleanze con facilità." },
    filters: { search: "Cerca missioni...", all: "Tutti i Tipi", personal: "Personali (240)", sort: "Ordina per", quest: "Nome Missione", type: "Tipo Missione", points: "Punti", time: "Tempo" },
    stats: { showing: "Mostrando {count} Missioni", sorting: "Ordinamento per {sortBy} ({order})", asc: "cresc", desc: "decresc" },
    card: { requirement: "Requisito", points: "Punti", time: "Tempo", noTime: "Nessun limite" },
    modal: { reward: "Ricompensa", timeLimit: "Limite di Tempo", tip: "Consiglio Utile", close: "Capito", noTip: "Nessun consiglio specifico disponibile." },
    empty: { title: "Nessuna missione trovata", subtitle: "Prova a modificare i filtri o la ricerca." },
    recommendation: { recommended: "✨ Consigliata", not_recommended: "⚠️ Non Consigliata", neutral: "Standard" },
    tips: {
      gatherQuest: "Prima di inviare le tue truppe a raccogliere:\nUsa un oggetto di velocità di raccolta risorse\nCambia sulla pagina economia",
      heroShard: "Prima di scegliere la missione, calcola i punti dalle carte (rosso, viola, blu) che hai già. Puoi anche scambiare frammenti per raggiungere il requisito — 10 frammenti di Gina dalla Trial Turret, frammenti di Fiona dal Sapphire Shop, frammenti di Gerolin dall'Arena Shop e forzieri dell'Arena, e frammenti di Odell/Tutanhet dai mostri."
    },
    info: {
      button: "Apri informazioni",
      slides: {
        slide1: "Ecco come appare la bacheca delle missioni per tutti (i segni meno non sono visibili). Le nuove missioni compaiono ogni 30 minuti quando aggiornate, ma le cattive missioni si aggiornano quasi istantaneamente, quindi per favore sii paziente.",
        slide2: "Queste sono missioni personali, disponibili solo per te. Se non ti piacciono, hai la possibilità di aggiornarle ogni 10 minuti.",
        slide3: "Evita le missioni con un segno \"?\". Come le cattive missioni, si aggiornano quasi istantaneamente, quindi non c'è bisogno di tentarle."
      }
    },
    types: { arena: "Arena", market: "Mercato Nero", alliance: "Alleanza", ap: "Consuma PA", diamond: "Diamante", stamina: "Energia", gather: "Raccolta", gear: "Equipaggiamento", hero: "Frammenti Eroe", heal: "Cura", help: "Aiuto Alleati", building: "Potere Edifici", research: "Potere Ricerca", troop: "Potere Truppe", rally: "Covi di Mostri", speedup: "Accelerazioni", transport: "Trasporto", packs: "Pacchetti", other: "Altro" },
    questNames: {
      "Arena Challenge": "Sfida in Arena",
      "Black Market": "Mercato Nero",
      "Consume Alliance Coins": "Consuma Monete Alleanza",
      "Consume AP": "Consuma PA",
      "Consume Diamond": "Consuma Diamanti",
      "Consume Stamina": "Consuma Energia",
      "Gather Food": "Raccogli Cibo",
      "Gather Iron": "Raccogli Ferro",
      "Gather Stone": "Raccogli Pietra",
      "Gather Wood": "Raccogli Legno",
      "Get Gear Materials": "Ottieni Materiali Equip.",
      "Get Hero Shard": "Ottieni Frammenti Eroe",
      "Heal Units": "Cura Unità",
      "Help Allies": "Aiuta Alleati",
      "Improve Building Power": "Migliora Potere Edifici",
      "Improve Research Power": "Migliora Potere Ricerca",
      "Improve Troop Power": "Migliora Potere Truppe",
      "Rally on Monster Dens": "Rally su Covi di Mostri",
      "Research": "Ricerca",
      "Speedups (Build/Tech/Training/Healing)": "Accelerazioni (Costr./Tecn./Addest./Cura)",
      "Speedup (Build/Tech/Training/Healing)": "Accelerazione (Costr./Tecn./Addest./Cura)",
      "Transport Any Resources to Allies": "Trasporta Qualsiasi Risorsa agli Alleati",
      "Transport Food among allies": "Trasporta Cibo tra gli Alleati",
      "Transport Iron among allies": "Trasporta Ferro tra gli Alleati",
      "Transport Stone among allies": "Trasporta Pietra tra gli Alleati",
      "Transport Wood among allies": "Trasporta Legno tra gli Alleati",
      "Buy Packs": "Acquista Pacchetti",
      "Gain Diamonds via Packs": "Ottieni Diamanti dai Pacchetti"
    }
  },
  pt: {
    header: { title: "Confronto de Alianças", subtitle: "Puzzles & Chaos", dashboard: "Painel" },
    welcome: { badge: "Motor de Otimização de Missões v1.0", title: "Painel de Dados de Missões", subtitle: "Visualize, ordene e filtre todas as missões do confronto de alianças com facilitade." },
    filters: { search: "Pesquisar missões...", all: "Todos os Tipos", personal: "Pessoais (240)", sort: "Ordenar por", quest: "Nome da Missão", type: "Tipo de Missão", points: "Pontos", time: "Tempo" },
    stats: { showing: "Mostrando {count} Missões", sorting: "Ordenando por {sortBy} ({order})", asc: "asc", desc: "desc" },
    card: { requirement: "Requisito", points: "Pontos", time: "Tempo", noTime: "Sem limite" },
    modal: { reward: "Recompensa", timeLimit: "Limite de Tempo", tip: "Dica Útil", close: "Entendido", noTip: "Nenhuma dica específica disponível." },
    empty: { title: "Nenhuma missão encontrada", subtitle: "Tente ajustar seus filtros ou pesquisa." },
    recommendation: { recommended: "✨ Recomendada", not_recommended: "⚠️ Não Recomendada", neutral: "Padrão" },
    tips: {
      gatherQuest: "Antes de enviar suas tropas para coletar:\nUse um item de velocidade de coleta de recursos\nMude para a página de economia",
      heroShard: "Antes de escolher a missão, calcule os pontos dos cartões (vermelho, roxo, azul) que você já tem. Você também pode trocar fragmentos para ajudar a atingir o requisito — 10 fragmentos de Gina da Trial Turret, fragmentos de Fiona da Sapphire Shop, fragmentos de Gerolin da Arena Shop e baús da Arena, e fragmentos de Odell/Tutanhet dos monstros."
    },
    info: {
      button: "Abrir informações",
      slides: {
        slide1: "Assim é como o quadro de missões parece para todos (os sinais de menos não são visíveis). Novas missões aparecem a cada 30 minutos quando atualizadas, mas as missões ruins se atualizam quase instantaneamente, então por favor tenha paciência.",
        slide2: "Estas são missões pessoais, disponíveis apenas para você. Se você não gostar delas, terá uma chance de atualizá-las a cada 10 minutos.",
        slide3: "Evite missões com um sinal \"?\". Como as missões ruins, elas se atualizam quase instantaneamente, então não há necessidade de tentá-las."
      }
    },
    types: { arena: "Arena", market: "Mercado Negro", alliance: "Aliança", ap: "Consumir PA", diamond: "Diamante", stamina: "Estamina", gather: "Coleta", gear: "Equipamento", hero: "Fragmentos de Herói", heal: "Cura", help: "Ajuda de Aliados", building: "Poder de Construção", research: "Poder de Pesquisa", troop: "Poder de Tropas", rally: "Covis de Monstros", speedup: "Acelerações", transport: "Transporte", packs: "Pacotes", other: "Outro" },
    questNames: {
      "Arena Challenge": "Desafio de Arena",
      "Black Market": "Mercado Negro",
      "Consume Alliance Coins": "Consumir Moedas de Aliança",
      "Consume AP": "Consumir PA",
      "Consume Diamond": "Consumir Diamantes",
      "Consume Stamina": "Consumir Estamina",
      "Gather Food": "Coletar Comida",
      "Gather Iron": "Coletar Ferro",
      "Gather Stone": "Coletar Pedra",
      "Gather Wood": "Coletar Madeira",
      "Get Gear Materials": "Obter Materiais de Equip.",
      "Get Hero Shard": "Obter Fragmentos de Herói",
      "Heal Units": "Curar Unidades",
      "Help Allies": "Ajudar Aliados",
      "Improve Building Power": "Melhorar Poder de Const.",
      "Improve Research Power": "Melhorar Poder de Pesq.",
      "Improve Troop Power": "Melhorar Poder de Tropas",
      "Rally on Monster Dens": "Rally em Covis de Monstros",
      "Research": "Pesquisa",
      "Speedups (Build/Tech/Training/Healing)": "Acelerações (Const./Tec./Treino/Cura)",
      "Speedup (Build/Tech/Training/Healing)": "Aceleração (Const./Tec./Treino/Cura)",
      "Transport Any Resources to Allies": "Transportar Qualquer Recurso para Aliados",
      "Transport Food among allies": "Transportar Comida entre Aliados",
      "Transport Iron among allies": "Transportar Ferro entre Aliados",
      "Transport Stone among allies": "Transportar Pedra entre Aliados",
      "Transport Wood among allies": "Transportar Madeira entre Aliados",
      "Buy Packs": "Comprar Pacotes",
      "Gain Diamonds via Packs": "Ganhar Diamantes via Pacotes"
    }
  },
  de: {
    header: { title: "Allianz-Showdown", subtitle: "Puzzles & Chaos", dashboard: "Dashboard" },
    welcome: { badge: "Quest-Optimierungs-Engine v1.0", title: "Quest-Daten-Dashboard", subtitle: "Visualisieren, sortieren und filtern Sie jede Allianz-Showdown-Quest mit Leichtigkeit." },
    filters: { search: "Quests suchen...", all: "Alle Typen", personal: "Persönlich (240)", sort: "Sortieren nach", quest: "Quest-Name", type: "Quest-Typ", points: "Punkte", time: "Zeit" },
    stats: { showing: "Zeige {count} Quests", sorting: "Sortiert nach {sortBy} ({order})", asc: "aufst", desc: "abst" },
    card: { requirement: "Anforderung", points: "Punkte", time: "Zeit", noTime: "Kein Zeitlimit" },
    modal: { reward: "Belohnung", timeLimit: "Zeitlimit", tip: "Hilfreicher Tipp", close: "Verstanden", noTip: "Keine spezifischen Tipps verfügbar." },
    empty: { title: "Keine Quests gefunden", subtitle: "Versuchen Sie, Ihre Filter oder Suche anzupassen." },
    recommendation: { recommended: "✨ Empfohlen", not_recommended: "⚠️ Nicht Empfohlen", neutral: "Standard" },
    tips: {
      gatherQuest: "Bevor Sie Ihre Truppen zum Sammeln schicken:\nVerwenden Sie einen Ressourcen-Sammelverschnellerer\nWechseln Sie zur Wirtschaftsseite",
      heroShard: "Bevor Sie die Quest auswählen, berechnen Sie die Punkte aus den Karten (rot, lila, blau), die Sie bereits haben. Sie können auch Scherben austauschen, um die Anforderung zu erfüllen — 10 Gina-Scherben vom Trial Turret, Fiona-Scherben vom Sapphire Shop, Gerolin-Scherben vom Arena Shop und Arena-Schatztruhen, und Odell/Tutanhet-Scherben von Monstern."
    },
    info: {
      button: "Informationen öffnen",
      slides: {
        slide1: "So sieht das Quest-Board für alle aus (Minuszeichen sind nicht sichtbar). Neue Quests erscheinen alle 30 Minuten, wenn sie aktualisiert werden, aber schlechte Quests werden fast sofort aktualisiert. Bitte haben Sie Geduld.",
        slide2: "Dies sind persönliche Quests, die nur Ihnen zur Verfügung stehen. Wenn Sie sie nicht mögen, haben Sie die Möglichkeit, sie alle 10 Minuten zu aktualisieren.",
        slide3: "Vermeiden Sie Quests mit einem \"?\"-Zeichen. Wie schlechte Quests werden sie fast sofort aktualisiert, daher lohnt sich kein Versuch."
      }
    },
    types: { arena: "Arena", market: "Schwarzmarkt", alliance: "Allianz", ap: "AP verbrauchen", diamond: "Diamant", stamina: "Ausdauer", gather: "Sammeln", gear: "Ausrüstung", hero: "Heldenscherben", heal: "Heilung", help: "Allianz-Hilfe", building: "Gebäudekraft", research: "Forschungskraft", troop: "Truppenkraft", rally: "Monsterhöhlen", speedup: "Beschleuniger", transport: "Transport", packs: "Pakete", other: "Andere" },
    questNames: {
      "Arena Challenge": "Arena-Herausforderung",
      "Black Market": "Schwarzmarkt",
      "Consume Alliance Coins": "Allianz-Münzen verbrauchen",
      "Consume AP": "AP verbrauchen",
      "Consume Diamond": "Diamanten verbrauchen",
      "Consume Stamina": "Ausdauer verbrauchen",
      "Gather Food": "Nahrung sammeln",
      "Gather Iron": "Eisen sammeln",
      "Gather Stone": "Stein sammeln",
      "Gather Wood": "Holz sammeln",
      "Get Gear Materials": "Ausrüstungsmaterial erhalten",
      "Get Hero Shard": "Heldenscherben erhalten",
      "Heal Units": "Einheiten heilen",
      "Help Allies": "Allianz-Hilfe leisten",
      "Improve Building Power": "Gebäudekraft verbessern",
      "Improve Research Power": "Forschungskraft verbessern",
      "Improve Troop Power": "Truppenkraft verbessern",
      "Rally on Monster Dens": "Rally auf Monsterhöhlen",
      "Research": "Forschung",
      "Speedups (Build/Tech/Training/Healing)": "Beschleuniger (Bau/Tech/Train./Heil.)",
      "Speedup (Build/Tech/Training/Healing)": "Beschleuniger (Bau/Tech/Train./Heil.)",
      "Transport Any Resources to Allies": "Beliebige Ressourcen an Verbündete transportieren",
      "Transport Food among allies": "Nahrung unter Verbündeten transportieren",
      "Transport Iron among allies": "Eisen unter Verbündeten transportieren",
      "Transport Stone among allies": "Stein unter Verbündeten transportieren",
      "Transport Wood among allies": "Holz unter Verbündeten transportieren",
      "Buy Packs": "Pakete kaufen",
      "Gain Diamonds via Packs": "Diamanten über Pakete erhalten"
    }
  },
  ru: {
    header: { title: "Противостояние Альянсов", subtitle: "Puzzles & Chaos", dashboard: "Панель" },
    welcome: { badge: "Движок оптимизации квестов v1.0", title: "Панель данных квестов", subtitle: "Визуализируйте, сортируйте и фильтруйте квесты противостояния альянсов." },
    filters: { search: "Поиск квестов...", all: "Все типы", personal: "Личные (240)", sort: "Сортировка", quest: "Название", type: "Тип", points: "Очки", time: "Время" },
    stats: { showing: "Показано {count} квестов", sorting: "Сортировка по {sortBy} ({order})", asc: "возр", desc: "убыв" },
    card: { requirement: "Требование", points: "Очки", time: "Время", noTime: "Без лимита" },
    modal: { reward: "Награда", timeLimit: "Лимит времени", tip: "Полезный совет", close: "Понятно", noTip: "Специфических советов нет." },
    empty: { title: "Квесты не найдены", subtitle: "Попробуйте изменить фильтры." },
    recommendation: { recommended: "✨ Рекомендуется", not_recommended: "⚠️ Не рекомендуется", neutral: "Стандартно" },
    tips: {
      gatherQuest: "Перед отправкой войск на сбор:\nИспользуйте предмет ускорения сбора ресурсов\nПерейдите на страницу экономики",
      heroShard: "Перед выбором квеста рассчитайте очки карт (красная, фиолетовая, синяя), которые у вас уже есть. Вы также можете обменять осколки, чтобы достичь требования — 10 осколков Гины из Trial Turret, осколки Фионы из Sapphire Shop, осколки Геролина из Arena Shop и сундуков Arena, и осколки Одделла/Тутанхета у монстров."
    },
    info: {
      button: "Открыть информацию",
      slides: {
        slide1: "Так выглядит доска квестов для всех (знаки минус невидимы). Новые квесты появляются каждые 30 минут при обновлении, но плохие квесты обновляются почти мгновенно, поэтому пожалуйста, будьте терпеливы.",
        slide2: "Это личные квесты, доступные только вам. Если они вам не нравятся, у вас есть возможность обновлять их каждые 10 минут.",
        slide3: "Избегайте квестов со знаком \"?\". Как и плохие квесты, они обновляются почти мгновенно, поэтому нет смысла их пытаться."
      }
    },
    types: { arena: "Арена", market: "Рынок", alliance: "Альянс", ap: "Очки действия", diamond: "Алмазы", stamina: "Энергия", gather: "Сбор", gear: "Снаряжение", hero: "Герои", heal: "Лечение", help: "Помощь", building: "Стройка", research: "Наука", troop: "Войска", rally: "Логова", speedup: "Ускорители", transport: "Транспорт", packs: "Наборы", other: "Другое" },
    questNames: {
      "Arena Challenge": "Вызов на арене",
      "Black Market": "Черный рынок",
      "Consume Alliance Coins": "Трата монет альянса",
      "Consume AP": "Трата ОД",
      "Consume Diamond": "Трата алмазов",
      "Consume Stamina": "Трата энергии",
      "Gather Food": "Сбор еды",
      "Gather Iron": "Сбор железа",
      "Gather Stone": "Сбор камня",
      "Gather Wood": "Сбор дерева",
      "Get Gear Materials": "Получение материалов снаряжения",
      "Get Hero Shard": "Получение фрагментов героев",
      "Heal Units": "Лечение юнитов",
      "Help Allies": "Помощь союзникам",
      "Improve Building Power": "Повышение мощи зданий",
      "Improve Research Power": "Повышение мощи науки",
      "Improve Troop Power": "Повышение мощи войск",
      "Rally on Monster Dens": "Атака на логова монстров",
      "Research": "Исследование",
      "Speedups (Build/Tech/Training/Healing)": "Ускорения (Стройка/Наука/Войска/Лечение)",
      "Speedup (Build/Tech/Training/Healing)": "Ускорение (Стройка/Наука/Войска/Лечение)",
      "Transport Any Resources to Allies": "Транспорт любых ресурсов союзникам",
      "Transport Food among allies": "Транспорт еды между союзниками",
      "Transport Iron among allies": "Транспорт железа между союзниками",
      "Transport Stone among allies": "Транспорт камня между союзниками",
      "Transport Wood among allies": "Транспорт дерева между союзниками",
      "Buy Packs": "Покупка наборов",
      "Gain Diamonds via Packs": "Получение алмазов из наборов"
    }
  },
  uk: {
    header: { title: "Протистояння Альянсів", subtitle: "Puzzles & Chaos", dashboard: "Панель" },
    welcome: { badge: "Двигун оптимізації квестів v1.0", title: "Панель даних квестів", subtitle: "Візуалізуйте, сортуйте та фільтруйте квести протистояння альянсів." },
    filters: { search: "Пошук квестів...", all: "Всі типи", personal: "Особисті (240)", sort: "Сортування", quest: "Назва", type: "Тип", points: "Очки", time: "Час" },
    stats: { showing: "Показано {count} квестів", sorting: "Сортування за {sortBy} ({order})", asc: "зрост", desc: "спад" },
    card: { requirement: "Вимога", points: "Очки", time: "Час", noTime: "Без ліміту" },
    modal: { reward: "Нагорода", timeLimit: "Ліміт часу", tip: "Корисна порада", close: "Зрозуміло", noTip: "Специфічних порад немає." },
    empty: { title: "Квести не знайдено", subtitle: "Спробуйте змінити фільтри." },
    recommendation: { recommended: "✨ Рекомендовано", not_recommended: "⚠️ Не рекомендовано", neutral: "Стандартно" },
    tips: {
      gatherQuest: "Перед відправленням військ на збір:\nВикористовуйте предмет прискорення збору ресурсів\nПерейдіть на сторінку економіки",
      heroShard: "Перед вибором квесту розрахуйте очки карт (червона, фіолетова, синя), які у вас уже є. Ви також можете обміняти осколки, щоб досягти вимоги — 10 осколків Гіни з Trial Turret, осколки Фіони з Sapphire Shop, осколки Геролина з Arena Shop та сундуків Arena, і осколки Оддела/Тутанхета від монстрів."
    },
    info: {
      button: "Відкрити інформацію",
      slides: {
        slide1: "Ось як виглядає дошка квестів для всіх (знаки мінус невидимі). Нові квести з'являються кожні 30 хвилин при оновленні, але погані квести оновлюються майже миттєво, тому будь ласка, будьте терпеливі.",
        slide2: "Це особисті квести, доступні тільки вам. Якщо вони вам не подобаються, у вас є можливість оновлювати їх кожні 10 хвилин.",
        slide3: "Уникайте квестів зі знаком \"?\". Як і погані квести, вони оновлюються майже миттєво, тому немає сенсу їх намагатися."
      }
    },
    types: { arena: "Арена", market: "Ринок", alliance: "Альянс", ap: "Очки дії", diamond: "Алмази", stamina: "Енергія", gather: "Збір", gear: "Спорядження", hero: "Герої", heal: "Лікування", help: "Допомога", building: "Будівництво", research: "Наука", troop: "Війська", rally: "Лігва", speedup: "Прискорювачі", transport: "Транспорт", packs: "Набори", other: "Інше" },
    questNames: {
      "Arena Challenge": "Виклик на арені",
      "Black Market": "Чорний ринок",
      "Consume Alliance Coins": "Трата монет альянсу",
      "Consume AP": "Трата ОД",
      "Consume Diamond": "Трата алмазів",
      "Consume Stamina": "Трата енергії",
      "Gather Food": "Збір їжі",
      "Gather Iron": "Збір заліза",
      "Gather Stone": "Збір каменю",
      "Gather Wood": "Збір дерева",
      "Get Gear Materials": "Отримання матеріалів спорядження",
      "Get Hero Shard": "Отримання фрагментів героїв",
      "Heal Units": "Лікування юнітів",
      "Help Allies": "Допомога союзникам",
      "Improve Building Power": "Підвищення моці будівель",
      "Improve Research Power": "Підвищення моці науки",
      "Improve Troop Power": "Підвищення моці військ",
      "Rally on Monster Dens": "Атака на лігва монстрів",
      "Research": "Дослідження",
      "Speedups (Build/Tech/Training/Healing)": "Прискорення (Будівництво/Наука/Війська/Лікування)",
      "Speedup (Build/Tech/Training/Healing)": "Прискорення (Будівництво/Наука/Війська/Лікування)",
      "Transport Any Resources to Allies": "Транспорт будь-яких ресурсів союзникам",
      "Transport Food among allies": "Транспорт їжі між союзниками",
      "Transport Iron among allies": "Транспорт заліза між союзниками",
      "Transport Stone among allies": "Транспорт каменю між союзниками",
      "Transport Wood among allies": "Транспорт дерева між союзниками",
      "Buy Packs": "Купівля наборів",
      "Gain Diamonds via Packs": "Отримання алмазів з наборів"
    }
  },
  fr: {
    header: { title: "Confrontation d'Alliances", subtitle: "Puzzles & Chaos", dashboard: "Tableau de bord" },
    welcome: { badge: "Moteur d'Optimisation de Quêtes v1.0", title: "Tableau de Bord des Quêtes", subtitle: "Visualisez, triez et filtrez facilement chaque quête de confrontation d'alliances." },
    filters: { search: "Rechercher des quêtes...", all: "Tous les Types", personal: "Personnelles (240)", sort: "Trier par", quest: "Nom de la Quête", type: "Type de Quête", points: "Points", time: "Temps" },
    stats: { showing: "Affichage de {count} Quêtes", sorting: "Tri par {sortBy} ({order})", asc: "croiss", desc: "décroiss" },
    card: { requirement: "Exigence", points: "Points", time: "Temps", noTime: "Pas de limite" },
    modal: { reward: "Récompense", timeLimit: "Limite de Temps", tip: "Conseil Utile", close: "Compris", noTip: "Aucun conseil spécifique disponible." },
    empty: { title: "Aucune quête trouvée", subtitle: "Essayez d'ajuster vos filtres ou votre recherche." },
    recommendation: { recommended: "✨ Recommandée", not_recommended: "⚠️ Non Recommandée", neutral: "Standard" },
    tips: {
      gatherQuest: "Avant d'envoyer vos troupes à la récolte:\nUtilisez un accélérateur de récolte de ressources\nPassez à la page économie",
      heroShard: "Avant de choisir la quête, calculez les points des cartes (rouge, violet, bleu) que vous possédez déjà. Vous pouvez également échanger des éclats pour atteindre l'exigence — 10 éclats de Gina du Trial Turret, éclats de Fiona de la Sapphire Shop, éclats de Gerolin de l'Arena Shop et des coffres Arena, et éclats d'Odell/Tutanhet des monstres."
    },
    info: {
      button: "Ouvrir les informations",
      slides: {
        slide1: "Voici à quoi ressemble le tableau des quêtes pour tout le monde (les signes moins ne sont pas visibles). Les nouvelles quêtes apparaissent toutes les 30 minutes lors de l'actualisation, mais les mauvaises quêtes sont actualisées presque instantanément, donc s'il vous plaît, soyez patient.",
        slide2: "Ce sont des quêtes personnelles, disponibles uniquement pour vous. Si vous ne les aimez pas, vous avez la possibilité de les actualiser toutes les 10 minutes.",
        slide3: "Évitez les quêtes avec un signe \"?\". Comme les mauvaises quêtes, elles sont actualisées presque instantanément, il n'y a donc pas besoin de les essayer."
      }
    },
    types: { arena: "Arène", market: "Marché Noir", alliance: "Alliance", ap: "Consommer PA", diamond: "Diamant", stamina: "Stamina", gather: "Récolte", gear: "Équipement", hero: "Fragments de Héros", heal: "Soin", help: "Aide Alliés", building: "Puissance de Bâtiment", research: "Puissance de Recherche", troop: "Puissance de Troupes", rally: "Repaires de Monstres", speedup: "Accélérateurs", transport: "Transport", packs: "Packs", other: "Autre" },
    questNames: {
      "Arena Challenge": "Défi d'Arène",
      "Black Market": "Marché Noir",
      "Consume Alliance Coins": "Consommer des Pièces d'Alliance",
      "Consume AP": "Consommer des PA",
      "Consume Diamond": "Consommer des Diamants",
      "Consume Stamina": "Consommer de la Stamina",
      "Gather Food": "Récolter de la Nourriture",
      "Gather Iron": "Récolter du Fer",
      "Gather Stone": "Récolter de la Pierre",
      "Gather Wood": "Récolter du Bois",
      "Get Gear Materials": "Obtenir des Matériaux d'Équip.",
      "Get Hero Shard": "Obtenir des Fragments de Héros",
      "Heal Units": "Soigner des Unités",
      "Help Allies": "Aider les Alliés",
      "Improve Building Power": "Améliorer la Puissance de Bât.",
      "Improve Research Power": "Améliorer la Puissance de Rech.",
      "Improve Troop Power": "Améliorer la Puissance de Troupes",
      "Rally on Monster Dens": "Rallye sur les Repaires",
      "Research": "Recherche",
      "Speedups (Build/Tech/Training/Healing)": "Accélérateurs (Bât./Tech/Entr./Soin)",
      "Speedup (Build/Tech/Training/Healing)": "Accélérateur (Bât./Tech/Entr./Soin)",
      "Transport Any Resources to Allies": "Transporter Toutes les Ressources aux Alliés",
      "Transport Food among allies": "Transporter de la Nourriture entre Alliés",
      "Transport Iron among allies": "Transporter du Fer entre Alliés",
      "Transport Stone among allies": "Transporter de la Pierre entre Alliés",
      "Transport Wood among allies": "Transporter du Bois entre Alliés",
      "Buy Packs": "Acheter des Packs",
      "Gain Diamonds via Packs": "Gagner des Diamants via Packs"
    }
  }
};
