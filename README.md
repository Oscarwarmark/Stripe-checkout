# Stripe checkout

### Github repo: https://github.com/Oscarwarmark/Stripe-checkout

### Projekt beskrivning:

Det här projektet är en simpel webbshop med stripe integrerat för checkout processen. Det är byggt med hjälp utav nodeJS och express på backenden och React för frontend.

### krav som uppfyllts

1. Uppgiften lämnas in i tid.
2. Produkter ska listas på en sida.
3. Produkter som visas och köps skall hämtas ifrån Stripe.
4. Det ska gå att lägga till produkter i en kundvagn.
5. Baserad på kundvagnen skall det gå att lägga en order genom Stripe.
6. Man skall kunna registrera sig som en användare i webbshoppen. Detta skall resultera i att en ”Customer” skapas i Stripe och användaren sparar i en JSON-fil. (samtliga lösenord skall sparas hashade).
7. Man skall kunna logga in som kund. Den inloggade kunden (som även är sparad i Stripe) skall användas vid placering av order.
8. Man skall inte kunna placera en order om man inte är inloggad.
9. Det skall gå att ange en rabattkod för att få rabatt på sitt köp (Detta görs genom Stripe)

### För att köra projektet

1. Öppna två terminaler och installera all nödvädiga dependencies med `npm install` i både server och client mappen.
2. Skapa sedan en .env fil och skriv: `STRIPE_SECRET_KEY=` och sedan din egen API nyckel.
3. Kör sedan komandot `npm run dev` i både client och server map.
4. Öppna webbläsaren och navigera till: http://localhost:5173/
