export const siteConfig = {
  title: "Татарская кухня",
  description: "Рецепты татарской кухни",
  navItems: [
    { href: "/", label: "Рецепты" },
    { href: "/ingredients", label: "Ингредиенты" },
    { href: "/about", label: "О нас" },
  ],
  pagesContent: {
    "/": {
      content: "Здесь будут руцепты...",
    },
    "/ingredients": {
      content: "Здесь будут ингредиенты...",
    },
    "/about": {
      content: `<p>Татарская кухня - самая национальная кухня России.</p>
      <h1>Главные блюда Татарской кухни</h1>

      <ul>
        <li>Каша</li>
        <li>Суп</li>
        <li>Пицца</li>
      </ul>
      `,
    },
  },
};
