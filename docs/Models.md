# Database models 

Database models in Spoon zijn geplaatse in de `app/Models` directory in plaats van de applicatie root directory. 
Dit is gedaan wegens organisatorische redenen en om een didelijker structuur te hebben in de broncode van jouw applicatie. 

De namespace staat gelijk aan de directory structuur zoals gewoonlijk. 

## Base model 

De applicatie bezit ook een basis model dat te vinden is onder de volgende path. `app/Model.php`. Deze model 
Is bedoeld voor gezamelijk logica tussen alle models buiten de models die gebruikt worden voor authenticatie. 

Om u wild idee te geven over wt u hier kunt plaatsen: 

- Validatie regels 
- Overschrijven van huidige Eloquent methodes. 
- Wijzigen van de PRIMARY KEY. 
- Enz. 

Standaard ziet de model er als volgd uit. 

```php 
<?php

namespace App;

use Illuminate\Database\Eloquent\Model as BaseModel;

/**
 * Class Model
 *
 * Base model for all the shard logic between all the application models in the application.
 * Except the user or other authentication models.
 *
 * @see https://activisme-be.github.io/Spoon-documentatie/Models.html#basis-model
 *
 * @package App
 */
class Model extends BaseModel
{
    //
}
```
