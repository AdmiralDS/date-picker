# Участие в разработке

В этом документе описаны основные процессы разработки, проверки, сборки и публикации пакета.

## Требования

В CI используется Node.js 22. Для установки зависимостей используйте `npm ci`, чтобы версии соответствовали `package-lock.json`:

```shell
npm ci
```

## Разработка

Запуск приложения для локальной разработки:

```shell
npm run dev
```

Запуск Storybook на порту `6006`:

```shell
npm run storybook
```

Сгенерированные директории `dist` и `docs` добавлять в репозиторий не нужно.

## Коммиты

Сообщения коммитов должны соответствовать спецификации [Conventional Commits](https://www.conventionalcommits.org/ru/v1.0.0/). `standard-version` использует эти сообщения для определения следующей версии и формирования `CHANGELOG.md`.

Примеры:

```text
fix: correct date range selection
feat: add custom day renderer
feat!: change DatePicker public API
```

## Форматирование и ESLint

Общая проверка Prettier и ESLint:

```shell
npm run format
```

Автоматическое исправление:

```shell
npm run format:fix
```

Инструменты можно запускать отдельно:

| Команда                | Назначение                                            |
| ---------------------- | ----------------------------------------------------- |
| `npm run prettier`     | Проверить форматирование Prettier                     |
| `npm run prettier:fix` | Исправить форматирование Prettier                     |
| `npm run eslint`       | Запустить ESLint                                      |
| `npm run eslint:fix`   | Исправить ошибки ESLint, для которых доступен autofix |

## Тестирование

### Unit-тесты

Однократный запуск тестов Vitest:

```shell
npm test
```

### Storybook-тесты

Storybook Test Runner проверяет рендер stories в Chromium и выполняет их `play`-сценарии.

Для запуска тестов во время разработки сначала запустите Storybook, затем test runner в другом терминале:

```shell
# Терминал 1
npm run storybook

# Терминал 2
npm run test:storybook
```

Для запуска сценария, используемого в CI, сначала установите Chromium и соберите Storybook:

```shell
npx playwright install chromium
npm run build:storybook
npm run test:storybook:ci
```

`test:storybook:ci` поднимает статическую сборку из `docs/current` на `127.0.0.1:4173`, ожидает готовности сервера, запускает тесты с флагом `--ci` и завершает сервер после тестов.

## Сборка

| Команда                     | Результат                                                       |
| --------------------------- | --------------------------------------------------------------- |
| `npm run typecheck`         | Проверить типы TypeScript без создания файлов                   |
| `npm run build:app`         | Собрать демонстрационное Vite-приложение                        |
| `npm run preview`           | Локально открыть собранное Vite-приложение                      |
| `npm run build:storybook`   | Собрать Storybook в `docs/current`                              |
| `npm run preview:storybook` | Локально открыть собранный Storybook                            |
| `npm run build:lib`         | Проверить типы, очистить `dist` и собрать npm-пакет             |
| `npm run test:package`      | Проверить npm tarball в ESM, CJS и TypeScript consumer-проектах |
| `npm run clean`             | Очистить результаты сборки библиотеки                           |

Скрипт `prepare` автоматически выполняется npm при локальной установке пакета и вызывает `build:lib`.

## Полная локальная проверка

Основной набор проверок запускается командой:

```shell
npm run check:full
```

Она последовательно выполняет:

1. Prettier и ESLint.
2. Проверку типов TypeScript.
3. Unit-тесты Vitest.
4. Сборку Storybook.
5. Сборку библиотеки.
6. Проверку собранного npm-пакета.

`test:package` создаёт настоящий tarball через `npm pack`, проверяет publish-состав и все targets из `package.json#exports`, устанавливает пакет в изолированный consumer-проект, компилирует ESM/CJS TypeScript-импорты и собирает через Vite отдельные consumers с ESM `import` и CJS `require()`. Проверка выполняется по содержимому tarball, а не по package self-reference рабочего репозитория.

Storybook browser-тесты не входят в `check:full`, поскольку им требуется установленный Chromium. Для полного воспроизведения CI локально выполните:

```shell
npm ci
npm run check:full
npx playwright install chromium
npm run test:storybook:ci
```

## CI и публикация Storybook

Workflow CI запускается для каждого pull request и при push в `main`. Он выполняет:

1. Установку зависимостей через `npm ci`.
2. Проверку Prettier и ESLint.
3. Unit-тесты.
4. Сборку Storybook.
5. Установку Chromium и Storybook browser-тесты.
6. Загрузку сборки Storybook как GitHub Pages artifact.
7. Сборку и проверку npm-пакета.
8. Проверку publish-состава и consumer-сборок фактического npm tarball.

После успешного CI в ветке `main` Storybook автоматически публикуется в GitHub Pages. Для pull request выполняются проверки и создаётся artifact, но публикация в GitHub Pages не запускается.

## Релиз пакета

### 1. Подготовка

Релиз выполняется из актуальной ветки `main` с чистой рабочей директорией:

```shell
git switch main
git pull --ff-only origin main
npm ci
npm run check:full
npx playwright install chromium
npm run test:storybook:ci
git status --short
```

Перед продолжением убедитесь, что последняя сборка CI для `main` завершилась успешно и `git status --short` не выводит изменений.

### 2. Создание версии и тега

По умолчанию следующая версия определяется автоматически на основании Conventional Commits:

```shell
npm run release
```

При необходимости тип версии можно указать явно:

```shell
npm run release:patch
npm run release:minor
npm run release:major
```

`standard-version` выполняет следующие действия:

1. Обновляет версию в `package.json` и `package-lock.json`.
2. Создаёт или дополняет `CHANGELOG.md`.
3. Создаёт коммит `chore(release): <version>`.
4. Создаёт Git-тег `v<version>`.

Проверьте созданный коммит и тег:

```shell
git show --stat
git tag --points-at HEAD
```

### 3. Отправка релиза

Отправьте release-коммит и тег:

```shell
git push --follow-tags origin main
```

Создайте GitHub Release из нового тега и опубликуйте его. Workflow `Publish Package to npmjs` срабатывает на событие публикации GitHub Release и выполняет `npm publish --provenance --access public`.

После завершения workflow проверьте, что новая версия пакета `@admiral-ds/date-picker` появилась в npm.
