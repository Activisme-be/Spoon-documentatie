# Providers 

Service providers zijn classes die u project min of meer 'opstarten'. Laravel komt me enkele providers. 
Er zijn sommige providers toegevoegd aan Spoon en enkele standaard providers die hier en daar wat aanpassingen hebben. 

AppServiceProvider - Aangepast 
AuthServiceProvider - Aangepast
BroadcastServiceProvider - Standaard
EventServiceProvider - Aangepast
RouteServiceProvidder - Aangepast

## AppServiceProvider 

De volgende modificaties aan de AppServiceProvider zijn aangepast. 

- De volgende view composers zijn toegevoegd: `LayoutComposer`, `KioskComposer`, `AlertComposer`
- Implementatie van de `TelescopeServieProvider` onder de dev environment. 

## AuthServiceProvider 

De volgende aanpassing is doorgevoerd in de service provider 

- Implementatie van de `UserPolicy` die gekoppeld is aan de `User` Model.

## EventServiceProvider 

De volgende aanpassing is doorgevoerd in de service provider

- Implementatie van de `LogSuccessfulLogin` listener die de timestamp login registreerd in de databank. 

## RouteServiceProvider

De volgende aanpassingen zijn doorgevoerd in de service provider

- Implementatie van `->mapKioskRoutes()`. Deze mapping is bedoeld voor de routeringen die alleen maar gebruikt worden in de kiosk van de applicatie. 
- Implementatie van `->mapFrontendRoutes()`. Deze mapping is bedoeld voor de routering die alleen maar gebruikt worden in de frontend van de applicatie