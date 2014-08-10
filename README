# [darbas.opendata.lt](http://darbas.opendata.lt)

We have always been fans of the idea behind opendata, and we were a bit envious about all the developments in the UK and the USA,
with dedicated government portals popping up with loads of data. So when the [Lithuanian Social Insurance Fund](http://www.sodra.lt/en)
started publishing daily statistics on the number of insured policyholders (effectively, all working people),
we jumped at the opportunity to save that data and do something with it. That's how [darbas.opendata.lt](http://darbas.opendata.lt).

For the moment, this project does two things:
+ saves the daily statistics to a dabatase (statistics comprise a count of workers insured by a insurer (effectively, an enterprise))
+ shows a total Lithuanian "employment" chart, so you can enjoy near-real-time pulse of Lithuanian economy.

## Code

A bit of [Bootstrap](http://twitter.github.io/bootstrap/) and [Highcharts](http://www.highcharts.com/) for the frontend. PHP and Python for the backend.

## Installation notes

+ You need to provide your dabatase credentials and some other information in settings/settings.ini. A sample settings file has been provided for your convenience.
+ The collection of data is done by running the python script backend/sodra.py. It will also create the necessary table structure in MySQL during the first run.
+ The statistics are published daily, around 17:00 Lithuanian time (GMT + 3). We suggest running a cron on the python script twice daily (around 17:00 and in the morning, around 9:00), in case the statistics were published late.

## Authors
**Ernesta Orlovaitė**

+ [ernes7a.lt](http://ernes7a.lt)
+ [@ernes7a](http://twitter.com/ernes7a)

**Aurimas Račas**

+ [aurimas.eu](http://aurimas.eu)
+ [@Aurimas](http://twitter.com/aurimas)

## Screenshot
 ![@#london2012](https://github.com/ernesta/London2012/blob/e9abc3a021874b987a1ac9cca2e6dbca74407fe6/darbas.opendata.lt.png)

## Įžanga lietuviškai

[darbas.opendata.lt](http://darbas.opendata.lt) - mūsų bandymas dėti pirmuosius žingsnius lietuviškoje atvirų duomenų erdvėje. 
Ne daug kas žino, kad SoDra kas dieną skelbia duomenis apie Lietuvoje dirbančių (apdraustųjų soc. draudimu) skaičių. 
Todėl mes sukūrėme šį projektą, kuris kol kas daro 2 dalykus:
+ Kiekvieną dieną išsaugo SoDros pateiktus duomenis apie Lietuvoje esančių apdraustųjų skaičių (pateikiami duomenys kiekvienam draudiko kodui, taip pat nurodomos ir PVM mokėtojo kodas, jei toks yra)
+ Svetainėje pateikia grafiką, kuriame galima matyti apdraustųjų skaičiaus kitimą kiekvieną dieną. Čia jums ne Statistikos Departamento 3 mėnesius laukti.

Su kaupiamais duomenimis galima nuveikti gerokai daugiau - mes tenorėjome parodyti, kad tai galima padaryti ir, iš tiesų, tai labai lengva padaryti.
Per projekto gyvavimo laiką SoDra pradėjo [teikti dar daugiau duomenų](http://www.sodra.lt/lt/paslaugos/informacijos_rinkmenos/draudeju_duomenys) - dabar teikiami ir SoDrai skolingų įmonių sąrašai, skolų dydžiai ir pan. Rojus atvirų duomenų entuziastams!
