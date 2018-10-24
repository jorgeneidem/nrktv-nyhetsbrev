
# NRK TV Nyhetsbrev mal  

Modulene i nyhetsbrevet er splittet opp i nunjucks-partials. Kombinér modulene som du ønsker, og Gulp rendrer nunjucksene sammen til én HTML-fil. 

Når du er fornøyd lar du gulp inline CSS'en, da får du en ferdig HTML-template som du kan paste inn i Mailchimp.

📰 📧 ✂️ 📋 🐵

## Dette brukes 
* CSS-versjonen av Foundation for emails 2   
* Browser-sync
* Gulp
* Nunjucks
* _og mer!_

## Installere
$ `npm install` 

Hvis du har for gammel versjon av Gulp globalt installert må du fjerne din globale gulp før installasjon: 

$ `npm rm -g gulp`


## Hvordan

For å jobbe kjør

$ `npm start` eller  $ `gulp`

I editoren, åpne `src/emails/index.nunjucks` 

Inkludér partials du vil ha fra `src/templates/partials`

Pass på at `header.nunjucks` er øverst og `footer.nunjucks` er nederst.

For eksempel:


```
{% include "partials/header.nunjucks" %}

{% include "partials/plug-large.nunjucks" %}

{% include "partials/text.nunjucks" %}

{% include "partials/plug-sideways.nunjucks" %}

{% include "partials/spacer-16.nunjucks" %}

{% include "partials/footer.nunjucks" %} 
```

Lagre filen og følg med i nettleseren hvor Browser-sync sørger for at du ser endringene i templaten umiddelbart.

Når du er klar til å flytte over i Mailchimp, kjør  

$ `gulp inline`

Da får HTML-filene i `/build/` inlined CSS.