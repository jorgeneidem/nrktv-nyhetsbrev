
# NRK TV Nyhetsbrev template  

Modulene i nyhetsbrevet, som for eksempel header / stor plugg / footer, er splittet opp i nunjucks-partials. Kombinér modulene du ønsker, og Gulp rendrer nunjucksene sammen og inliner CSS'en og spytter ut ferdige HTML-filer som kan pastes inn i Mailchimp.

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

$ `npm start`

Åpne `localhost:8000` i nettleseren

Åpne `src/emails/index.nunjucks` i editoren din

Inkludér det du vil ha fra `src/templates/partials`

For eksempel:




```
{% include "partials/header.nunjucks" %}

{% include "partials/plug-large.nunjucks" %}

{% include "partials/text.nunjucks" %}

{% include "partials/plug-sideways.nunjucks" %}

{% include "partials/spacer-16.nunjucks" %}

{% include "partials/footer.nunjucks" %} 
```

Lagre filen og følg med på localhost:8000 hvor Browser-sync sørger for at du ser templaten din umiddelbart.

## For å bygge:
$ `gulp`

Så ligger ferdig template i `/build/`