# SET Power - 4-Page Version

Сайт SET Power - 4-страничный вариант.

## Структура

- `/` - Главная (Hero + About)
- `/services` - Услуги (Services)
- `/projects` - Проекты (Projects)
- `/contact` - Контакты (Contact)

## Запуск

```bash
npm install
npm run dev
```

Открой http://localhost:3002

## Деплой

### Vercel
1. Зайди на vercel.com
2. New Project → выбери этот репозиторий
3. Framework: Vite
4. Deploy

### Netlify
1. Зайди на netlify.com
2. Add new site → Import an existing project
3. Подключи GitHub, выбери репозиторий
4. Build command: `npm run build`
5. Publish directory: `dist`

### GitHub Pages
1. Settings → Pages
2. Source: GitHub Actions
3. При каждом пуше в main сайт автоматически деплоится

## Домен

После подключения домена setpower.az:
- Настрой DNS записи у провайдера
- Привяжи домен в настройках хостинга (Vercel/Netlify)
