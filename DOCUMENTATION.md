## **1. Az alkalmazás célja**

Az alkalmazás célja, hogy a bevételeink és kiadásaink áttekinthetővé váljanak, az adatokat nyilvántartsa és kezelje.

## **2. Az alkalmazás telepítése**

- Forkolni kell az adott GitHub repository tartalmát:

    https://github.com/ivbalazs/vizsgaremek

- A célgépre le kell klónozni az adott GitHub repository tartalmát.

   `git clone https://github.com/ivbalazs/vizsgaremek.git`

- Telepíteni kell az alkalmazás függőségeit:

    - Backend

        - A terminálon be kell lépni a /backend mappába és futtatni az `npm i` parancsot.
    
    - Frontend

        - A terminálon be kell lépni a /frontend mappába és futtatni az `npm i` parancsot.  

- Ha még nincsen fenn a célgépen, akkor telepíteni kell az Angular keretrendszert az `npm i -g @angular/cli` paranccsal.
- A terminálban ki kell adni az `ng build` parancsot.
- A /frontend/dist mappa tartalmát be kell másolni a /backend/public mappába.

## **3. Az alkalmazás indítása**

- El kell indítani a Docker Desktop alkalmazást.
- A /backend mappába belépve a terminálban ki kell adni az `npm run docker-compose:up` parancsot. 
- A /frontend mappába belépve a terminálban ki kell adni az `npm start` parancsot. 
- A tesztek elindításához a /backend mappába belépve a terminálban ki kell adni az `npm test` parancsot. 

_Megjegyzés_:  
A belépéshez egy érvényes e-mail-cím és jelszó kell:  

E-mail | Jelszó
------------ | -------------
admin@gmail.com | admin_pw
user@gmail.com | user_pw


## **4. A végpontok dokumentációja**

Swagger 
- Az alábbi URL-t kell beírni a böngészőbe: https://localhost:3000/api-docs

---
---

## **Linkek:**  

- [A User Story (adminisztrátori szerepkör) itt érhető el.](https://github.com/ivbalazs/vizsgaremek/blob/main/README.md)

- [A kiegészítő anyagok itt érhetők el.](https://github.com/ivbalazs/vizsgaremek/blob/main/Developer%20Documentation%20-%20Supplementary%20Material/supplementary-material.md)
