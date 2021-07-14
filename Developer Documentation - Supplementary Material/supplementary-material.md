## **Egyéni költségeket nyilvántartó rendszer**
---
---

## Az alkalmazás leírása

**Célja:**

A felhasználó számára áttekinthetőbbé válnak bevételei és kiadásai. Az oldal használata hozzájárulhat költségeinek jövőbeni optimalizálásához, tervezhetőséget biztosít és akár megtakarítása növekedését eredményezheti.

**Technikai követelmények, előírások:**
- Az alkalmazás Angular-alapú, model-service-component architektúra jellemzi
- A dizájnért a Bootstrap, a Font Awesome, a CSS/SCSS és a jQuery felel
- Az adatbázis NoSQL alapú MongoDB
- NodeJS API: saját API szolgálja ki a frontendet
- Minden API útvonalhoz egy unit teszt kapcsolódik
- Az API-hoz Swagger alapú dokumentáció tartozik
- A felület bizonyos oldalai csak belépés után elérhetők (JWT autentikáció) 
- Adminisztrátori szerepkört leíró User Story a README.md-ben
- Markdown dokumentáció a documentaton.md-ben
- Az alkalmazás dockerizálva van, konténerből futtatható 

**Megjelenése:**

- Az alkalmazás egy fejléces navigációval rendelkezik, amelyen az egyes oldalak között lehet váltani
- Teljesen reszponzív, mobile-first szemléletű

---
---

## **Főbb részei:**

---

## _**1. Főoldal**_

---

**Komponens neve:** Dashboard  
**Komponens helye:** page/dashboard


---
---

## _**2. Navigáció**_

---

**Komponens neve:** navigation  
**Komponens helye:** common/navigation


## _**3. Költségek adatbázis**_
---

**Osztály neve:** cost   
**Osztály helye:** model/cost

**Service neve:** cost  
**Osztály helye:** service/cost

**Komponens neve:** cost  
**Komponens helye:** page/cost


A költségekhez tartozó adatok:
- date (dátum)
- name (név)
- sum (összeg)
- description (leírás)
- costCategoryName (költség kategória neve)
- costServiceName (költség szolgáltatójának neve)
- _id (azonosító)


**Create:**

> _Az új költség gombra kattintva egy űrlap segítségével 
> új költség adatai vehetők fel és menthetők az adatbázisban._

- Az új költség gombra való kattintással egy új oldal nyílik meg, ahol egy új költség adatait lehet input mezők segítségével bevinni.
- A Mentés gombra kattintva a program az adatbázisba menti a megadott adatokat.
- A Vissza gombra kattintva az összes költséget listázó oldalra navigál vissza az alkalmazás.

---

**Update:**

> _Az Update ikonnal ellátott gombra kattintva egy űrlap segítségével
> a költség adatai szerkeszthetők és menthetők az adatbázisban._

- Az Update gombra való kattintással a költség egyedi adatait tartalmazó aloldal nyílik meg, ahol a választott költség adatait lehet szerkeszthető mezők segítségével módosítani.
- A Mentés gombra kattintva a program az adatbázisba menti a módosított adatokat.
- A Vissza gombra kattintva az összes költséget listázó oldalra navigál vissza az alkalmazás.

---

**Delete:**

> _A Delete ikonnal ellátott gombra kattintva 
> egy költség törölhető az adatbázisból._

- A Delete gombra való kattintással az alkalmazás törli az adott költséget az adatbázisból.
- Az adatbázisból való törlést követően az alkalmazás frissíti a listaoldalt, ahol a már törölt költség nem lesz látható.

---

**Listázás:**

> _Egy legördülő menü segítségével kategóriák szerint listázhatóak a költségek._

- A Search gombra való kattintással az alkalmazás kikeresi a választott kategóriának megfelelő entitásokat az adatbázisból, és listázza azokat.

---

**Szabadszavas keresés:**

> _Egy szabadszavas input mező segítségével bármilyen kulcsszóra lehet keresni az adatbázisban a választott kategórián belül._

- A Search gombra való kattintással az alkalmazás kikeresi a kulcsszónak megfelelő entitásokat az adatbázisnak a legördülő menüben választott kategóriájából, és listázza azokat.

---

**Rendezés:**

> _A lista oszlopainak fejlécére való kattintással növekvő és csökkenő sorrendbe rendezhetőek a szám típusú adatok, illetve abc-sorrendbe, valamint fordított abc-sorrendbe rendezhetőek a szöveges adatok._

- A fejlécen található lefelé mutató nyíl ikonra kattintva az alkalmazás sorba rendezi a választott oszlopadatok szerint.
- A fejlécen található felfelé mutató nyíl ikonra kattintva az alkalmazás fordított sorba rendezi a választott oszlopadatok szerint.

---

## _**4. Költség kategória adatbázis**_
---

**Osztály neve:** cost-category
**Osztály helye:** model/cost-category  

**Service neve:** cost-category   
**Osztály helye:** service/cost-category  

**Komponens neve:** cost-category    
**Komponens helye:** page/cost-category  

A költség kategóriához tartozó adatok:
- costCategoryName (költség kategória neve)
- description (leírás)
- active (Aktív)
- _id (azonosító)

**Create:**

> _Az új költség kategória gombra kattintva egy űrlap segítségével az
> új kategória adatai vehetők fel és menthetők az adatbázisban._

- Az új költség kategória gombra való kattintással egy új oldal nyílik meg, ahol egy új kategória adatait lehet input mezők segítségével bevinni.
- A Mentés gombra kattintva a program az adatbázisba menti a megadott adatokat.
- A Vissza gombra kattintva az összes kategóriat listázó oldalra navigál vissza az alkalmazás.

---

**Update:**

> _Az Update ikonnal ellátott gombra kattintva egy űrlap segítségével
> a kategória adatai szerkeszthetők és menthetők az adatbázisban._

- Az Update gombra való kattintással a költség kategória egyedi adatait tartalmazó aloldal nyílik meg, ahol a választott kategória adatait lehet szerkeszthető mezők segítségével módosítani.
- A Mentés gombra kattintva a program az adatbázisba menti a módosított adatokat.
- A Vissza gombra kattintva az összes kategóriát listázó oldalra navigál vissza az alkalmazás.

---

**Delete:**

> _A Delete ikonnal ellátott gombra kattintva 
> egy kategória törölhető az adatbázisból._

- A Delete gombra való kattintással az alkalmazás törli az adott kategóriát az adatbázisból.
- Az adatbázisból való törlést követően az alkalmazás frissíti a listaoldalt, ahol a már törölt kategória nem lesz látható.

---

**Listázás:**

> _Egy legördülő menü segítségével típusok szerint listázhatóak a költség kategóriák._

- A Search gombra való kattintással az alkalmazás kikeresi a választott kategóriának megfelelő entitásokat az adatbázisból és listázza azokat.

---

**Szabadszavas keresés:**

> _Egy szabadszavas input mező segítségével bármilyen kulcsszóra lehet keresni az adatbázisban a választott kategórián belül._

- A Search gombra való kattintással az alkalmazás kikeresi a kulcsszónak megfelelő entitásokat az adatbázisnak a legördülő menüben választott kategóriájából, és listázza azokat.

---

**Rendezés:**

> _A lista oszlopainak fejlécére való kattintással növekvő és csökkenő sorrendbe rendezhetőek a szám típusú adatok, illetve abc-sorrendbe, valamint fordított abc-sorrendbe rendezhetőek a szöveges adatok._

- A fejlécen található lefelé mutató nyíl ikonra kattintva az alkalmazás sorba rendezi a választott oszlopadatok szerint.
- A fejlécen található felfelé mutató nyíl ikonra kattintva az alkalmazás fordított sorba rendezi a választott oszlopadatok szerint.



---

## _**5. Költség szolgáltató adatbázis**_
---

**Osztály neve:** cost-service

**Osztály helye:** model/cost-service  

**Service neve:** cost-service   
**Osztály helye:** service/cost-service  

**Komponens neve:** cost-service    
**Komponens helye:** page/cost-service  

A költség szolgáltatókhoz tartozó adatok:
- costServiceName(költség szolgáltatójának neve)
- address (címe)
- description (leírás)
- _id (azonosító)

**Create:**

> _Az új költség szolgáltató gombra kattintva egy űrlap segítségével az
> új szolgáltató adatai vehetők fel és menthetők az adatbázisban._

- Az új költség szolgáltató gombra való kattintással egy új oldal nyílik meg, ahol egy új szolgáltató adatait lehet input mezők segítségével bevinni.
- A Mentés gombra kattintva a program az adatbázisba menti a megadott adatokat.
- A Vissza gombra kattintva az összes szolgáltatót listázó oldalra navigál vissza az alkalmazás.

---

**Update:**

> _Az Update ikonnal ellátott gombra kattintva egy űrlap segítségével
> a szolgáltató adatai szerkeszthetők és menthetők az adatbázisban._

- Az Update gombra való kattintással a költség szolgáltató egyedi adatait tartalmazó aloldal nyílik meg, ahol a választott szolgáltató adatait lehet szerkeszthető mezők segítségével módosítani.
- A Mentés gombra kattintva a program az adatbázisba menti a módosított adatokat.
- A Vissza gombra kattintva az összes szolgáltatót listázó oldalra navigál vissza az alkalmazás.

---

**Delete:**

> _A Delete ikonnal ellátott gombra kattintva 
> egy szolgáltató törölhető az adatbázisból._

- A Delete gombra való kattintással az alkalmazás törli az adott szolgáltatót az adatbázisból.
- Az adatbázisból való törlést követően az alkalmazás frissíti a listaoldalt, ahol a már törölt szolgáltató nem lesz látható.

---

**Listázás:**

> _Egy legördülő menü segítségével kategóriák szerint listázhatóak a költség szolgáltatók._

- A Search gombra való kattintással az alkalmazás kikeresi a választott kategóriának megfelelő entitásokat az adatbázisból, és listázza azokat.

---

**Szabadszavas keresés:**

> _Egy szabadszavas input mező segítségével bármilyen kulcsszóra lehet keresni az adatbázisban a választott kategórián belül._

- A Search gombra való kattintással az alkalmazás kikeresi a kulcsszónak megfelelő entitásokat az adatbázisnak a legördülő menüben választott kategóriájából, és listázza azokat.

---

**Rendezés:**

> _A lista oszlopainak fejlécére való kattintással növekvő és csökkenő sorrendbe rendezhetőek a szám típusú adatok, illetve abc-sorrendbe, valamint fordított abc-sorrendbe rendezhetőek a szöveges adatok._

- A fejlécen található lefelé mutató nyíl ikonra kattintva az alkalmazás sorba rendezi a választott oszlopadatok szerint.
- A fejlécen található felfelé mutató nyíl ikonra kattintva az alkalmazás fordított sorba rendezi a választott oszlopadatok szerint.


---

## _**6. Bevétel adatbázis**_
---

**Osztály neve:** income

**Osztály helye:** model/income  

**Service neve:** income   
**Osztály helye:** service/income  

**Komponens neve:** income    
**Komponens helye:** page/income  

A bevételhez tartozó adatok:
- id (azonosító)
- incomeName (bevétel neve)
- date (dátum)
- description (leírás)


**Create:**

> _Az új bevétel gombra kattintva egy űrlap segítségével az
> új bevétel adatai vehetők fel és menthetők az adatbázisban._

- Az új bevétel gombra való kattintással egy új oldal nyílik meg, ahol egy új bevétel adatait lehet input mezők segítségével bevinni.
- A Mentés gombra kattintva a program az adatbázisba menti a megadott adatokat.
- A Vissza gombra kattintva az összes bevételt listázó oldalra navigál vissza az alkalmazás.

---

**Update:**

> _Az Update ikonnal ellátott gombra kattintva egy űrlap segítségével
> a bevétel adatai szerkeszthetők és menthetők az adatbázisban._

- Az Update gombra való kattintással a bevétel egyedi adatait tartalmazó aloldal nyílik meg, ahol a választott bevétel adatait lehet szerkeszthető mezők segítségével módosítani.
- A Mentés gombra kattintva a program az adatbázisba menti a módosított adatokat.
- A Vissza gombra kattintva az összes bevételt listázó oldalra navigál vissza az alkalmazás.

---

**Delete:**

> _A Delete ikonnal ellátott gombra kattintva 
> egy bevétel törölhető az adatbázisból._

- A Delete gombra való kattintással az alkalmazás törli az adott bevételt az adatbázisból.
- Az adatbázisból való törlést követően az alkalmazás frissíti a listaoldalt, ahol a már törölt bevétel nem lesz látható.

---

**Listázás:**

> _Egy legördülő menü segítségével kategóriák szerint listázhatóak a bevételk._

- A Search gombra való kattintással az alkalmazás kikeresi a választott kategóriának megfelelő entitásokat az adatbázisból, és listázza azokat.

---

**Szabadszavas keresés:**

> _Egy szabadszavas input mező segítségével bármilyen kulcsszóra lehet keresni az adatbázisban a választott kategórián belül._

- A Search gombra való kattintással az alkalmazás kikeresi a kulcsszónak megfelelő entitásokat az adatbázisnak a legördülő menüben választott kategóriájából, és listázza azokat.

---

**Rendezés:**

> _A lista oszlopainak fejlécére való kattintással növekvő és csökkenő sorrendbe rendezhetőek a szám típusú adatok, illetve abc-sorrendbe, valamint fordított abc-sorrendbe rendezhetőek a szöveges adatok._

- A fejlécen található lefelé mutató nyíl ikonra kattintva az alkalmazás sorba rendezi a választott oszlopadatok szerint.
- A fejlécen található felfelé mutató nyíl ikonra kattintva az alkalmazás fordított sorba rendezi a választott oszlopadatok szerint.

---


## _**7. Felhasználók adatbázis**_
---
---

> _Az alkalmazás a felhasználók aloldalra navigálva megjeleníti a felhasználók adatbázisban tárolt adatait._

**Osztály neve:** user  
**Osztály helye:** model/user

**Service neve:** user  
**Osztály helye:** service/user 

**Komponens neve:** user    
**Komponens helye:** page/user

Az aloldal megjeleníti az összes felhasználó adatait lista formátumban.  

Ezek az adatok a következők:
- id (azonosító)
- name (név)
- username (felhasználónév)
- email (e-mail)
- password (jelszó)

**Create:**

> _Az új felhasználó gombra kattintva egy űrlap segítségével 
> új felhasználó adatai vehetők fel és menthetők az adatbázisban._

- Az új felhasználó gombra való kattintással egy új oldal nyílik meg, ahol egy új felhasználó adatait lehet input mezők segítségével bevinni.
- A Mentés gombra kattintva a program az adatbázisba menti a megadott adatokat.
- A Vissza gombra kattintva az összes felhasználót listázó oldalra navigál vissza az alkalmazás.

---

**Update:**

> _Az Update ikonnal ellátott gombra kattintva egy űrlap segítségével
> a felhasználó adatai szerkeszthetők és menthetők az adatbázisban._

- Az Update gombra való kattintással a felhasználó egyedi adatait tartalmazó aloldal nyílik meg, ahol a felhasználó adatait lehet szerkeszthető mezők segítségével módosítani.
- A Mentés gombra kattintva a program az adatbázisba menti a módosított adatokat.
- A Vissza gombra kattintva az összes felhasználót listázó oldalra navigál vissza az alkalmazás.

---

**Delete:**

> _A Delete ikonnal ellátott gombra kattintva 
> egy felhasználó törölhető az adatbázisból._

- A Delete gombra való kattintással az alkalmazás törli a felhasználót az adatbázisból.
- Az adatbázisból való törlést követően az alkalmazás frissíti a listaoldalt, ahol a már törölt felhasználó nem lesz látható.
---

## **Linkek:**  

- [A User Story (adminisztrátori szerepkör) itt érhető el.](https://github.com/ivbalazs/vizsgaremek/blob/main/README.md)

- [A dokumentáció itt érhető el.](https://github.com/ivbalazs/vizsgaremek/blob/main/DOCUMENTATION.md)
