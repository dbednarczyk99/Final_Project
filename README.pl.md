# BagPack – Online Backpack Store

[English version](README.md)

Live demo:
https://bagpack-best-selection-of-backpacks.onrender.com

Repozytorium:
https://github.com/dbednarczyk99/BagPack---online-backpack-store


## Opis projektu

BagPack – Online Backpack Store to aplikacja typu e-commerce, umożliwiająca użytkownikom przeglądanie oferty plecaków, dodawanie produktów do koszyka oraz składanie zamówień.

Projekt został zrealizowany jako:
- projekt końcowy w ramach kursu,
- projekt portfolio (fullstack).

Backend aplikacji został napisany w NestJS, z wykorzystaniem Prisma ORM oraz bazy danych PostgreSQL, natomiast frontend w React z użyciem Redux do zarządzania stanem aplikacji.


## Funkcjonalności

- przeglądanie listy produktów
- podział produktów na kategorie
- widok szczegółów produktu
- dodawanie produktów do koszyka
- zarządzanie koszykiem (zmiana ilości, usuwanie)
- składanie zamówienia
- obsługa danych klienta
- responsywny interfejs użytkownika


## Technologie

### Backend
- NestJS
- TypeScript
- Prisma ORM
- PostgreSQL
- REST API
- class-validator
- CORS

### Frontend
- React
- TypeScript
- Redux + Redux Thunk
- React Router
- Bootstrap / React-Bootstrap
- Sass (SCSS)


## Uruchomienie projektu lokalnie

### Wymagania
- Node.js (zalecana wersja LTS)
- npm
- PostgreSQL

### Klonowanie repozytorium
```bash
git clone https://github.com/dbednarczyk99/BagPack---online-backpack-store.git
cd BagPack---online-backpack-store
```
### Konfiguracja zmiennych środowiskowych

Projekt wymaga pliku .env, który nie znajduje się w repozytorium.
Utwórz plik .env w katalogu głównym projektu:
```JS
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
```
Przykład konfiguracji lokalnej:
```JS
DATABASE_URL="postgresql://postgres:password@localhost:5432/bagpack"
```

### Backend – NestJS
```bash
npm install
npx prisma migrate dev
npm run start:dev
```
Backend uruchomi się pod adresem:
http://localhost:8000

API dostępne jest pod prefiksem:
http://localhost:8000/api

### Frontend – React
```bash
cd client
npm install
npm start
```

Frontend uruchomi się pod adresem:
http://localhost:3000

### Wersja produkcyjna

W wersji produkcyjnej:
- frontend React jest budowany poleceniem npm run build,
- backend NestJS serwuje statyczne pliki frontendu z katalogu client/build,
- aplikacja działa jako jedna spójna usługa (backend + frontend).

### Model danych

Aplikacja obsługuje:
- produkty (plecaki) z kategoriami,
- obrazy produktów,
- koszyk zakupowy,
- zamówienia i pozycje zamówień,
- dane klienta (adres, email, numer telefonu).

## Status projektu

Projekt ma charakter edukacyjny oraz portfolio.
Stanowi działającą aplikację typu MVP, gotową do dalszego rozwoju.

## Autor

Daniel Bednarczyk
[LinkedIn](https://www.linkedin.com/in/danielbednarczyk99)
[GitHub](https://github.com/dbednarczyk99)