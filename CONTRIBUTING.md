# Соглашения

В этом документе описаны соглашения и договорённости по внесению изменений в этом репозитории.

## Публикация Storybook

Storybook автоматически публикуется в GitHub Pages после успешного прохождения CI в ветке `main`.
Сгенерированную директорию `docs` добавлять в репозиторий не нужно.

Соглашение о коммитах описаны в спецификации https://www.conventionalcommits.org/ru/v1.0.0/

## Релиз пакета

Перед релизом обновите локальную ветку `main`, установите зависимости и выполните полную проверку:

```shell
npm ci
npm run check:full
```

Создайте релизный коммит и тег. По умолчанию версия определяется автоматически на основании Conventional Commits:

```shell
npm run release
```

При необходимости тип следующей версии можно указать явно:

```shell
npm run release:patch
npm run release:minor
npm run release:major
```

Команда обновит версии в `package.json` и `package-lock.json`, дополнит `CHANGELOG.md`, создаст коммит `chore(release): <version>` и тег `v<version>`. После проверки отправьте коммит и тег в репозиторий:

```shell
git push --follow-tags origin main
```

Создайте и опубликуйте GitHub Release из нового тега. Существующий GitHub Actions workflow автоматически опубликует пакет в npm.
