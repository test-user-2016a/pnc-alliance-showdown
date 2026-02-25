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
    tips: { gatherQuest: "Before you send out your troops to gather:\nUse a resource gather speedup item\nSwitch to your economy page" },
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
      "Transport Resources to Allies": "Transport Resources to Allies",
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
    tips: { gatherQuest: "Prima di inviare le tue truppe a raccogliere:\nUsa un oggetto di velocità di raccolta risorse\nCambia sulla pagina economia" },
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
      "Transport Resources to Allies": "Trasporta Risorse agli Alleati",
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
    tips: { gatherQuest: "Antes de enviar suas tropas para coletar:\nUse um item de velocidade de coleta de recursos\nMude para a página de economia" },
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
      "Transport Resources to Allies": "Transportar Recursos para Aliados",
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
    tips: { gatherQuest: "Bevor Sie Ihre Truppen zum Sammeln schicken:\nVerwenden Sie einen Ressourcen-Sammelverschnellerer\nWechseln Sie zur Wirtschaftsseite" },
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
      "Transport Resources to Allies": "Ressourcentransport an Verbündete",
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
    tips: { gatherQuest: "Перед отправкой войск на сбор:\nИспользуйте предмет ускорения сбора ресурсов\nПерейдите на страницу экономики" },
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
      "Transport Resources to Allies": "Транспорт ресурсов союзникам",
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
    tips: { gatherQuest: "Перед відправленням військ на збір:\nВикористовуйте предмет прискорення збору ресурсів\nПерейдіть на сторінку економіки" },
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
      "Transport Resources to Allies": "Транспорт ресурсів союзникам",
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
    tips: { gatherQuest: "Avant d'envoyer vos troupes à la récolte:\nUtilisez un accélérateur de récolte de ressources\nPassez à la page économie" },
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
      "Transport Resources to Allies": "Transporter des Ressources",
      "Buy Packs": "Acheter des Packs",
      "Gain Diamonds via Packs": "Gagner des Diamants via Packs"
    }
  }
};
