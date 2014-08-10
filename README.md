# [darbas.opendata.lt](http://darbas.opendata.lt)

We have always been fans of the idea behind open data, and we were a bit envious about all the developments in the UK and the USA,
with dedicated government portals popping up with loads of datasets. So when the [Lithuanian Social Insurance Fund](http://www.sodra.lt/en)
started publishing daily statistics on the number of insured policyholders (effectively, all working people),
we jumped at the opportunity to save that data and do something with it. That's how [darbas.opendata.lt](http://darbas.opendata.lt) was born.

For the moment, this project does two things:
+ saves the daily statistics to a database (statistics comprise a count of workers insured by an insurer (usually, an enterprise, with its VAT payee code provided, too))
+ shows a total Lithuanian "employment" chart, so you can enjoy a near-real-time pulse of the Lithuanian economy.

We have been collecting this data from May 2012 - in case you'd like to get your hand on this dataset, [let us know](mailto://mail@aurimas.eu) as that massive X-Gigabyte database is not included in this repository.

## Code

A bit of [Bootstrap](http://twitter.github.io/bootstrap/) and [Highcharts](http://www.highcharts.com/) for the frontend. PHP and Python for the backend.

## Installation notes

+ You need to provide your database credentials and some other information in settings/settings.ini. A sample settings file is provided under the same folder.
+ The collection of data is done by running a python script 'backend/sodra.py'. It will also create the necessary table structure in MySQL during the first run.
+ The statistics are published daily, around 17:00 Lithuanian time (GMT + 3). We suggest running a cron on the python script twice daily (around 17:00 and in the morning, around 9:00), in case the statistics are published late.

## Authors
**Ernesta Orlovaitė**

+ [ernes7a.lt](http://ernes7a.lt)
+ [@ernes7a](http://twitter.com/ernes7a)

**Aurimas Račas**

+ [aurimas.eu](http://aurimas.eu)
+ [@Aurimas](http://twitter.com/aurimas)

## Screenshot
 ![@#darbas.opendata.lt](https://raw.githubusercontent.com/kamicollo/darbas.opendata.lt/master/darbas.opendata.lt.png)

## Įžanga lietuviškai

[darbas.opendata.lt](http://darbas.opendata.lt) - mūsų bandymas dėti pirmuosius žingsnius lietuviškoje atvirų duomenų erdvėje. 
Tam mes panaudojome vieną geriausių atvirų duomenų pavyzdžių Lietuvoje - SoDros kas dieną skelbiamus duomenis apie Lietuvoje dirbančių (apdraustųjų soc. draudimu) skaičių. 
Mūsų projektas kol kas daro 2 dalykus:
+ Kiekvieną dieną išsaugo SoDros pateiktus duomenis apie Lietuvoje esančių apdraustųjų skaičių (pateikiami duomenys kiekvienam draudiko kodui, taip pat nurodomos ir PVM mokėtojo kodas, jei toks yra)
+ Svetainėje pateikia grafiką, kuriame galima matyti apdraustųjų skaičiaus kitimą kiekvieną dieną.

Su kaupiamais duomenimis galima nuveikti gerokai daugiau - mes tenorėjome parodyti, kad tai galima padaryti ir, iš tiesų, tai labai lengva padaryti. Turbūt būtų galima sudėlioti neblogą alternatyvą kai kuriems Statistikos Departamento teikiamiems duomenims apie darbo rinką. Ir nereiktų 3 mėnesių laukti!
Per projekto gyvavimo laiką SoDra pradėjo [teikti dar daugiau duomenų](http://www.sodra.lt/lt/paslaugos/informacijos_rinkmenos/draudeju_duomenys) - dabar teikiami ir SoDrai skolingų įmonių sąrašai, skolų dydžiai ir pan. Tad galimybės tikrai nemažos!

P.S. mes SoDros duomenis pradėjome kaupti nuo 2012 metų gegužės - jei norėtum juos gauti, rašyk mail@aurimas.eu ir pasidalinsime!
