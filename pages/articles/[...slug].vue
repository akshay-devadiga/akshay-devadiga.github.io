<script setup>
const route = useRoute();
const { data } = await useAsyncData("article", () =>
  queryContent(`articles/${route.params.slug[0]}`).findOne()
);
</script>
<template>
  <v-container
    fluid
    class="article"
    :class="{ 'pa-0': $vuetify.display.smAndDown }"
  >
    <v-row justify="center">
      <v-col
        :cols="$vuetify.display.mdAndUp ? 9 : 12"
        :class="{ 'pa-0': $vuetify.display.smAndDown }"
      >
        <ContentDoc v-slot="{ doc }" tag="article">
          <article>
            <div class="article__title-block">
              <div class="article__title-block__title">
                {{ doc.title }}
              </div>
              <div class="article__title-block__posted-on">
                <v-avatar color="transparent" :size="$vuetify.display.smAndDown?20:30">
                  <v-img
                    src="/images/calendar.svg"
                    contain
                    alt="posted on"
                    :height="$vuetify.display.smAndDown?15:20"
                    class="article__title-block__posted-on__image"
                  ></v-img>
                </v-avatar>
                <span class="article__title-block__posted-on__title"
                  >Posted on
                </span>
                <span class="article__title-block__posted-on__text">
                  {{ doc.postedon }}</span
                >
              </div>
            </div>

            <ContentRendererMarkdown :value="doc" class="article__container" />
          </article>
        </ContentDoc>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss" scoped>
.article {
  &__title-block {
    padding: 4rem 0px 2rem 0px;
    --angle: -1deg;
    --unskew: rotate(calc(var(--angle) * -1)) skew(calc(var(--angle) * -1));
    -webkit-transform: rotate(var(--angle)) skew(var(--angle));
    transform: rotate(var(--angle)) skew(var(--angle));
    margin-bottom: 0rem;
    &__title {
      font-size: 3rem;
      text-transform: uppercase;
      font-weight: 900;
      max-width: 80%;
      font-family: Bebas Neue;
    }
    &__posted-on {
      max-width: fit-content;
      padding: 0rem 1rem;
      border-radius: 24px;
      font-size: 0.8rem;
      background: #a3bdae;
      &__text {
        font-weight: bold;
      }
      &__image {
        :deep(img) {
          margin: 0px !important;
        }
      }
    }
  }
     @media only screen and (max-width: 960px){
 &__title-block {
    &__title {
      font-size: 2rem;
    }
    &__posted-on {
      font-size: 0.6rem;
      vertical-align: middle;
      padding: 0.2rem 0.5rem !important;
        &__image {
          margin-right:4px;
      }
    }
  }
    }

  :deep(article) {
    @media only screen and (max-width: 960px){
          background: #ffff;
      padding-left: 1.5rem !important;
      padding-right: 1.5rem !important;
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      blockquote,
      pre,
      a,
      code,
      pre,
      em,
      img,
      li,
      ol,
      ul,
      p
    {
        margin-left:0px !important;
        a{
           margin-left:0px !important;
        }
  
      }
      p{
        a{
          white-space: normal;
        }
      }
    }
    //and (max-device-width: 960px)
    background: #f2efe1;
    padding: 1rem 4rem 4rem 4rem !important;
    border-radius: 24px;
    font-family: "JetBrains Mono";
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    dd,
    dl,
    dt,
    li,
    ol,
    ul,
    fieldset,
    form,
    label,
    legend,
    button,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td {
      margin: 1rem 0;
      padding: 0;
      border: 0;
      font-weight: normal;
      font-style: normal;
      font-size: 100%;
      line-height: 1;
      font-family: inherit;
      white-space: nowrap;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
      margin-left: 0.5rem;
      background: #fff;
      border-radius: 12px !important;
    }
    ol,
    ul {
      list-style: none;
    }
    q:before,
    q:after,
    blockquote:before,
    blockquote:after {
      content: "";
    }
    a:focus {
      outline: thin dotted;
    }
    a:hover,
    a:active {
      outline: 0;
    }
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    nav,
    section {
      display: block;
    }
    audio,
    canvas,
    video {
      display: inline-block;
      *display: inline;
      *zoom: 1;
    }
    audio:not([controls]) {
      display: none;
    }
    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }
    sup {
      top: -0.5em;
    }
    sub {
      bottom: -0.25em;
    }
    img {
      border: 0;
      -ms-interpolation-mode: bicubic;
    }
    p {
      font-size: 1.0875rem;
      text-wrap: pretty;
      margin-bottom: 1.5rem;
      margin-left: 0.5rem;
      font-weight: normal;
      line-height: 22px;
      line-height: calc(1em + 0.725rem);
    }
    p small {
      font-size: 11px;
      color: #bfbfbf;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: bold;
      color: #404040;
    }
    h1 small,
    h2 small,
    h3 small,
    h4 small,
    h5 small,
    h6 small {
      color: #bfbfbf;
    }
    h1 {
      margin-bottom: 18px;
      font-size: 30px;
      line-height: 36px;
    }
    h1 small {
      font-size: 18px;
    }
    h2 {
      font-size: 28px;
      line-height: 36px;
      margin-left: 0.5rem;
      text-transform: uppercase;
      font-weight: "extra-bold";
      font-family: Bebas Neue;
      margin-top: 3rem !important;
      a {
        text-decoration: none;
      }
    }
    h2 small {
      font-size: 14px;
    }
    h3,
    h4,
    h5,
    h6 {
      line-height: 36px;
    }
    h3 {
      margin-left: 0.5rem;
      letter-spacing: 1px;
      font-size: 20px;
      text-transform: uppercase;
      font-weight: bold;
      font-family: Roboto;
      a {
        text-decoration: none;
      }
    }
    h3 small {
      font-size: 14px;
    }
    h4 {
      font-weight: bold;
      font-size: 16px;
      a {
        text-decoration: none;
      }
    }
    h4 small {
      font-size: 12px;
    }
    h5 {
      text-transform: uppercase;
      font-weight: "extra-bold";
      font-family: Roboto;
      font-size: 14px;
      font-weight: bold;
      a {
        text-decoration: none;
      }
    }
    h6 {
      text-transform: uppercase;
      font-weight: "extra-bold";
      font-family: Roboto;
      font-size: 13px;
      color: #bfbfbf;
      text-transform: uppercase;
      a {
        text-decoration: none;
      }
    }
    ul,
    ol {
      margin: 0 0 18px 25px;
    }
    ul ul,
    ul ol,
    ol ol,
    ol ul {
      margin-bottom: 0;
    }
    ul {
      list-style: disc;
      margin-left: 1rem;
    }
    ol {
      list-style: decimal;
      margin-left: 1rem;
    }
    li {
      color: #808080;
      margin-left: 1.2rem;
    }
    ul.unstyled {
      list-style: none;
      margin-left: 0;
    }
    hr {
      margin: 20px 0 19px;
      border: 0;
      border-bottom: 1px solid #eee;
    }
    strong {
      font-style: inherit;
      font-weight: bold;
    }
    em {
      font-style: italic;
      font-weight: inherit;
      line-height: inherit;
      white-space: normal;
    }
    .muted {
      color: #bfbfbf;
    }
    blockquote p {
      font-size: 14px;
      font-weight: 300;
      line-height: 18px;
      margin-bottom: 0;
    }
    blockquote small {
      display: block;
      font-size: 12px;
      font-weight: 300;
      line-height: 18px;
      color: #bfbfbf;
    }
    blockquote small:before {
      content: "\2014 \00A0";
    }
    address {
      display: block;
      line-height: 18px;
      margin-bottom: 18px;
    }
    code,
    pre {
      padding: 0 3px 2px;
      font-size: 12px;
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      border-radius: 3px;
    }
    code {
      padding: 1px 3px;
    }
    pre {
      margin: 3rem 0px 3rem 3rem;
      display: block;
      padding: 8.5px;
      line-height: 18px;
      font-size: 12px;
      border: 1px solid #ccc;
      border: 1px solid rgba(0, 0, 0, 0.15);
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      border-radius: 3px;
      white-space: pre;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
    label,
    input,
    select,
    textarea {
      font-size: 13px;
      font-weight: normal;
      line-height: normal;
    }
    label {
      padding-top: 6px;
      font-size: 13px;
      line-height: 18px;
      float: left;
      width: 130px;
      text-align: right;
      color: #404040;
    }
    input[type="checkbox"],
    input[type="radio"] {
      cursor: pointer;
    }
    input[type="checkbox"],
    input[type="radio"] {
      width: auto;
      height: auto;
      padding: 0;
      margin: 3px 0;
      *margin-top: 0;
      line-height: normal;
      border: none;
    }
    input[type="file"] {
      background-color: #ffffff;
      padding: initial;
      border: initial;
      line-height: initial;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
    }
    input[type="button"],
    input[type="reset"],
    input[type="submit"] {
      width: auto;
      height: auto;
    }
    select,
    input[type="file"] {
      height: 27px;
      line-height: 27px;
      *margin-top: 4px;
    }
    select[multiple] {
      height: inherit;
    }
    textarea {
      height: auto;
    }
    :-moz-placeholder {
      color: #bfbfbf;
    }
    ::-webkit-input-placeholder {
      color: #bfbfbf;
    }
    input,
    textarea {
      -webkit-transition: border linear 0.2s, box-shadow linear 0.2s;
      -moz-transition: border linear 0.2s, box-shadow linear 0.2s;
      -ms-transition: border linear 0.2s, box-shadow linear 0.2s;
      -o-transition: border linear 0.2s, box-shadow linear 0.2s;
      transition: border linear 0.2s, box-shadow linear 0.2s;
      -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
      -moz-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    input:focus,
    textarea:focus {
      outline: 0;
      border-color: rgba(82, 168, 236, 0.8);
      -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1),
        0 0 8px rgba(82, 168, 236, 0.6);
      -moz-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1),
        0 0 8px rgba(82, 168, 236, 0.6);
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1),
        0 0 8px rgba(82, 168, 236, 0.6);
    }
    input[type="file"]:focus,
    input[type="checkbox"]:focus,
    select:focus {
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      outline: 1px dotted #666;
    }
    table {
      margin-bottom: 18px;
      padding: 0;
      border-collapse: separate;
      *border-collapse: collapse;
      font-size: 13px;
      border: 1px solid #ddd;
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      border-radius: 4px;
    }
    table th,
    table td {
      padding: 10px 20px 10px;
      line-height: 18px;
      text-align: right;
      width: fit-content;
    }
    table th {
      padding-top: 9px;
      font-weight: bold;
      vertical-align: middle;
      border-bottom: 1px solid #ddd;
    }
    table td {
      vertical-align: top;
    }
    p {
      a {
        margin: 0px;
        vertical-align: middle;
        img {
          margin: 0px;
        }
      }
      img {
        max-width: 100%;
        object-fit: contain;
        border-radius: 4px;
      }
    }
    img {
      max-width: 100%;
      object-fit: contain;
      border-radius: 4px;
    }
    table th + th,
    table td + td {
      border-left: 1px solid #ddd;
    }
    table tr + tr td {
      border-top: 1px solid #ddd;
    }
    table tbody tr:first-child td:first-child {
      -webkit-border-radius: 4px 0 0 0;
      -moz-border-radius: 4px 0 0 0;
      border-radius: 4px 0 0 0;
    }
    table tbody tr:first-child td:last-child {
      -webkit-border-radius: 0 4px 0 0;
      -moz-border-radius: 0 4px 0 0;
      border-radius: 0 4px 0 0;
    }
    table tbody tr:last-child td:first-child {
      -webkit-border-radius: 0 0 0 4px;
      -moz-border-radius: 0 0 0 4px;
      border-radius: 0 0 0 4px;
    }
    table tbody tr:last-child td:last-child {
      -webkit-border-radius: 0 0 4px 0;
      -moz-border-radius: 0 0 4px 0;
      border-radius: 0 0 4px 0;
    }
    footer {
      margin-top: 17px;
      padding-top: 17px;
      border-top: 1px solid #eee;
    }
    .page-header {
      margin-bottom: 17px;
      border-bottom: 1px solid #ddd;
      -webkit-box-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
      -moz-box-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
      box-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
    }
    .page-header h1 {
      margin-bottom: 8px;
    }
    .close {
      float: right;
      color: #000000;
      font-size: 20px;
      font-weight: bold;
      line-height: 13.5px;
      text-shadow: 0 1px 0 #ffffff;
      filter: alpha(opacity=20);
      -khtml-opacity: 0.2;
      -moz-opacity: 0.2;
      opacity: 0.2;
    }
    .close:hover {
      color: #000000;
      text-decoration: none;
      filter: alpha(opacity=40);
      -khtml-opacity: 0.4;
      -moz-opacity: 0.4;
      opacity: 0.4;
    }
    pre {
      padding: 0;
      overflow: auto; /*--If the Code exceeds the width, a scrolling is available--*/
      overflow-y: hidden; /*--Hides vertical scroll created by IE--*/
    }
    pre code {
      margin: 5px; /*--Left Margin--*/
      padding: 0px;
      display: block;
      line-height: 18px;
    }
    .center {
      text-align: center;
    }
    .left {
      text-align: left;
    }
    .right {
      text-align: right;
    }
    body {
      font-family: "Geneva", Arial, sans-serif;
      font-size: 13px;
      margin: 10px;
    }
    a,
    a:visited {
      color: #09c;
    }
    a:hover {
      color: #336699;
      text-decoration: none;
    }
    h1 {
      margin: 0px 0px 10px;
      font-weight: bold;
    }
    h2 {
      border-bottom: 1px dashed #09c;
      margin: 5px 0px 15px;
    }
    h6 {
      color: #09c;
    }
    blockquote {
      background: #a3bdae;
      border-left: 4px solid #000;
      margin-left: 0.5rem;
      -webkit-border-radius: 6px;
      -moz-border-radius: 6px;
      border-top-right-radius: 24px;
      padding: 1rem 1rem;
      p {
        margin: 0px;
      }
    }
    ul,
    ol {
      margin-bottom: 15px;
    }
    li {
      padding: 3px;
      white-space: normal;
      line-height: 24px;
    }
    code {
      background-color: #0f172a;
      color: #f2efe1;
    }
    pre {
      background-color: #0f172a;
      border-radius: 12px;
      padding: 1rem;
    }
    pre > code {
      margin: 0px;
      padding: 5px;
      border: 0px;
      background-color: #0f172a;
    }
  }
}
</style>
