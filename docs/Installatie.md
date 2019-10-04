# Installatie

U kunt spoon installeren met de volgende stappen. 

## 1. Download 

Download een leeg spoon project en plaats het op je lokale dev. server. (Dit project is ontwikkeld in Laravel homestead) en we raden ook 
aan om Homstead of Laravel valet te gebruiken, om de optimale server instellingen te bezitten en geen errors te hebben tijdens de installatie

``` bash
# Git clone 
git clone https://github.com/Activisme-be/Spoon.git

# Composer install
composer create-project --prefer-dist actb/spoon <YOUR DIRECTORY>
```

## 2. Environment bestand 

Spoon komt met een **.env.example** bestand in de root directory van het project. 
Deze file moet hernoemd of gekopieerd worden naar een **.env** bestand.

::: tip LET OP!
Wees zeker dat verborgen dot files zichtbaar zijn in je systeem. 
:::

## 3. Composer 

Sppon project dependencies worden beheerd door de PHP Composer tool. De eerste stap is het installeren van de dependencies door je terminal 
te navigeren naar je project en het volgende commando uit te voeren: 

``` bash
composer install
```

## 4. NPM / Yarn 

Om de dependencies te installeren voor je frontend development, is het vereist om de Node package manage, en optioneel de Yarn package manager 
te installeren 

Als u alleen NPM ter beschikking heeft moet het volgende commando uitvoeren in de root van het project: 

``` bash
npm install
```

Indien u beschikt over Yarn kunt u het volgende commando uitvoeren in de root van het project: 

```
yarn
```

## 5. Creeren van een databank. 

He is vereist om een databank aan te maken op je server en je **.env** bestand. 
In je .env bestand pas je de volgende regels aan:

``` bash
DB_CONNECTION=mysql 
DB_HOST=127.0.0.1
DB_DATABASE=homestead
DB_USERNAME=homestead
DB_PASSWORD=secret
```

Pas de bovenstaande regels aan naar jouw instellingen om je nieuwe databank instellingen te implementeren. 

## 6. Artisan commands

Het eerste wat we gaan doen is het genereren van een sleutel die Laravel zal gebruiken tijdens de interne encryptie. 
Voer het volgende commando uit in de terminal van je project.

``` bash
php artisan key:generate
```

Als alles goed is verlopen zou je in je terminal een bericht moeten krijgen met een groene achtergrond. Als 
ook zou je `APP_KEY=` instelling in je **.env** moeten aangepast zijn.

Vervolgens gaan we de databank migreren en voorzien van data. De database migraties kunnen worden uitgevoerd 
doormiddel van het volgende commando: 

``` bash
php artisan migrate
```

Als alles goed loopt zou je een bericht moeten zien voor elke tabel die is gemigreerd, Als je geen fouten zien. Dan zij je credentials correct. 
Het volgende wat we gaan doen is het migreren van de basis gegevens in de databank. 

Het migreren kan met het volgende commando: 

``` bash
php artisan db:seed
```

Als alles goed loopt zou je voor elk bestand dat is ingevoerd een bericht te zien moeten zijn. 

## 7. PHPUnit 

Nadat je project geinstalleerd is voer je PHPunit uit om er zeker van te zijn dat alle delen van je applicatie correct en 
zonder fouten werken. Het testen van je applicatie kan doormiddel te navigeren naar de project root en het volgende commando uit te voeren 

``` bash
phpunit
```

Als alles goed verloopt zouden er geen fouten moeten zijn bij een nieuwe installatie van spoon. 

## 8. Storage:link 

Nadat Spoon is geinstalleerd is het aangeraden om het volgende commando uit te voeren: 

``` bash
php artisan storage:link
```

Het commando is nodig om je publieke opslag locatie te koppens aan je backend opslag locatie. 

## 9. Login 

Nadat spoon is geinstalleerd en je toegang hebt tot een web browser, kan je inloggen op spoon. Met 1 van de volgende standaard logins. 

::: danger SECURITY!
Laat je gebruikers bij het deployen van je applicatie best het wachtwoord veranderen. 
:::

| Email                                | Wachtwoord |
| ------------------------------------ | ---------- |
| Tim@activisme.be                     | `password` |
| Sara@activisme.be                    | `password` |
| Tom@activisme.be                     | `password` |

## 10. Wat is het volgende 

Op dit moment zijn bovenstaande stappen het enige wat je hoeft uit te voeren bij een installatie. Het volgende wat je kunt doen 
is het navigeren doorheen de codebase en het bouwen van je applicatie. Of je kunt verder lezen in de documentatie van Spoon, 
Om een goed inzicht te hebben van wat er achter de schermen allemaal gebeurd.