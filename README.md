
# NRK TV Nyhetsbrev template  

Modulene i nyhetsbrevet, som for eksempel header / stor plugg / footer, er splittet opp i nunjucks-partials. Kombinér modulene du ønsker, og Gulp rendrer nunjucksene sammen til én HTML-fil. 

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

## Hvordan

For å jobbe kjør

$ `npm start` eller  $ `gulp`

I editoren, åpne `src/emails/index.nunjucks` 

Inkludér partials du vil ha fra `src/templates/partials`

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

$ `gulp inlinecss`

Da får HTML-filene i `/build/` inlined CSS.