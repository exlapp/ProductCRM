# ProductCRM (MERN + Hexagonal + TypeScript)

Базовая CRM система для фиксации лидов, клиентов, сделок и взаимодействий с клиентами.
Проект построен на стеке **MERN** (MongoDB, Express, React, Node.js) и следует принципам **гексагональной архитектуры**.

## Product Intent
Создать CRM систему, в которой каждый лид, клиент, сделка и взаимодействие с клиентом фиксируются, обеспечивая владельцу бизнеса получение ключевых метрик, необходимых для стратегического планирования.

**Целевая аудитория:** владелец бизнеса.

**Ключевые метрики:**
- Количество лидов.
- Средний размер сделки (Average Deal Size).
- Количество новых лидов за период (Lead Volume).

## Архитектура

Гексагональная архитектура разделяет систему на слои:

- **Domain** — бизнес-сущности, правила и интерфейсы репозиториев.
- **Application** — use-cases, DTO, orchestration бизнес-процессов.
- **Interfaces** — входные адаптеры (HTTP-контроллеры, маршруты).
- **Infrastructure** — внешние адаптеры (MongoDB, HTTP-клиенты, логирование).

```
server/src
├── domain
│   ├── entities
│   ├── repositories
│   └── value-objects
├── application
│   ├── dto
│   └── use-cases
├── interfaces
│   └── http
└── infrastructure
    ├── persistence
    └── http
```

## MVP Roadmap (Phase 1)

- Управление клиентами.
- Управление сделками.
- Учет взаимодействий.

## Скрипты

### Server
```bash
npm run dev
```

### Client
```bash
npm run dev
```

## Репозиторий

- `server/` — backend (Node.js + Express + MongoDB + TypeScript).
- `client/` — frontend (React + TypeScript).
