var plugLargeWithReviews = `
<!-- Plug Large With Reviews -->
<table mc:repeatable mc:hideable><tr><td>
<table align="center" class="container radius float-center">
  <tbody>
    <tr>
      <td>
        <table class="row collapse">
          <tbody>
            <tr>
              <th class="small-12 large-12 columns">
                <table>
                  <tr>
                    <th>
                      <center>
                        <img mc:edit="pluglarge1_image" src="http://placehold.it/580x320" align="center" class="float-center radius-top" alt="Nytt i NRK TV">
                      </center>
                    </th>
                  </tr>
                </table>
              </th>
            </tr>
          </tbody>
        </table>
        <!-- Row of title -->
        <table class="row">
          <tbody>
            <tr>
              <th class="large-2 columns show-for-large">
              </th>
              <th class="small-12 large-8 columns extra-padding-left-for-mobile extra-padding-right-for-mobile">
                <table>
                  <tr>
                    <th>
                      <h1 mc:edit="pluglarge1_title" class="text-center plugtitle-large">Du vil ikke tro hvor noen faktisk kan bo</h1>
                      <p class="text-center" mc:edit="pluglarge1_text">This will be the body text of this plug. This will be the body text of this plug. This will
                        be the body text of this plug.</p>
                      <table class="spacer">
                        <tbody>
                          <tr>
                            <td height="8px" style="font-size:8px;line-height:8px;"></td>
                          </tr>
                        </tbody>
                      </table>
                      <center>
                        <span mc:hideable mc:edit="teaser2_simplebutton1" class="simplebutton float-center" align="center">
                          Se nå
                        </span>
                        <span mc:hideable mc:edit="teaser2_simplebutton2" class="simplebutton float-center" align="center">
                          Trailer
                        </span>
                      </center>
                    </th>
                  </tr>
                </table>
              </th>
              <th class="large-2 columns show-for-large">
              </th>
            </tr>
          </tbody>
        </table>

        <!-- Row of one raving review -->
        <table class="row" mc:repeatable>
          <tbody>
            <tr>
              <th class="large-1 columns show-for-large"></th>
              <th class="small-12 large-10 columns">
                <!-- Die face and quote -->
                <table class="container quote-container">
                  <tr>
                    <td width="30px" valign="middle" class="quote-die-container">
                      <img mc:edit="terningkast" src="http://thegoldengod.westeurope.cloudapp.azure.com/nyhetsbrev/img/terning-6.png" alt="Omtale"
                        width="30" height="30" />
                    </td>
                    <td valign="middle">
                      <p class="quote-text--die" mc:edit="review-quote">
                        «Dette var bra saker. Bra jobba folkens. God serie. Godt arbeid. Veldig spennende. Dette er en placeholder tekst.»
                        <br>
                        <span class="quote-source">
                          Fiskeposten
                        </span>
                      </p>
                    </td>
                  </tr>
                </table>
              </th>
              <th class="large-1 columns show-for-large" valign="middle">
              </th>
            </tr>
          </tbody>
        </table>

        <!-- Row of one review no die -->
        <table class="row" mc:hideable mc:repeatable>
          <tbody>
            <tr>
              <th class="large-1 columns show-for-large"></th>
              <th class="small-12 large-10 columns">
                <!-- Die face and quote -->
                <table class="container quote-container">
                  <tr>
                    <td valign="middle">
                      <p class="quote-text" mc:edit="review-quote-nodie">
                        «Dette var bra saker. Bra jobba folkens. God serie. Godt arbeid. Veldig spennende. Dette er en placeholder tekst.»
                        <br>
                        <span class="quote-source">
                          Fiskeposten
                        </span>
                      </p>
                    </td>
                  </tr>
                </table>
              </th>
              <th class="large-1 columns show-for-large" valign="middle">
              </th>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>

<table class="spacer">
    <tbody>
      <tr>
        <td height="16px" style="font-size:16px;line-height:16px;">&nbsp;</td>
      </tr>
    </tbody>
  </table>

</td></tr></table>
<!-- END Plug Large With Reviews -->
`