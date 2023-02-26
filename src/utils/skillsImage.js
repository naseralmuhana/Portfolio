import GCP from "../assets/svg/skills/gcp.svg"
import HTML from "../assets/svg/skills/html.svg"
import Photoshop from "../assets/svg/skills/photoshop.svg"
import Illustrator from "../assets/svg/skills/illustrator.svg"
import Docker from "../assets/svg/skills/docker.svg"
import AdobeXD from "../assets/svg/skills/adobe-xd.svg"
import afterEffects from "../assets/svg/skills/after-effects.svg"
import CSS from "../assets/svg/skills/css.svg"
import Sass from "../assets/svg/skills/sass.svg"
import Angular from "../assets/svg/skills/angular.svg"
import JS from "../assets/svg/skills/javascript.svg"
import NextJS from "../assets/svg/skills/nextJS.svg"
import NuxtJS from "../assets/svg/skills/nuxtJS.svg"
import React from "../assets/svg/skills/react.svg"
import Svelte from "../assets/svg/skills/svelte.svg"
import Typescript from "../assets/svg/skills/typescript.svg"
import Vue from "../assets/svg/skills/vue.svg"
import Bootstrap from "../assets/svg/skills/bootstrap.svg"
import Bulma from "../assets/svg/skills/bulma.svg"
import CapacitorJs from "../assets/svg/skills/capacitorjs.svg"
import Coffeescript from "../assets/svg/skills/coffeescript.svg"
import MemSQL from "../assets/svg/skills/memsql.svg"
import MongoDB from "../assets/svg/skills/mongoDB.svg"
import MySQL from "../assets/svg/skills/mysql.svg"
import PostgreSQL from "../assets/svg/skills/postgresql.svg"
import Tailwind from "../assets/svg/skills/tailwind.svg"
import ViteJS from "../assets/svg/skills/vitejs.svg"
import VuetifyJS from "../assets/svg/skills/vuetifyjs.svg"
import cLang from "../assets/svg/skills/c.svg"
import CPlusPlus from "../assets/svg/skills/cplusplus.svg"
import CSharp from "../assets/svg/skills/csharp.svg"
import Dart from "../assets/svg/skills/dart.svg"
import Go from "../assets/svg/skills/go.svg"
import Java from "../assets/svg/skills/java.svg"
import Julia from "../assets/svg/skills/julia.svg"
import Kotlin from "../assets/svg/skills/kotlin.svg"
import Matlab from "../assets/svg/skills/matlab.svg"
import PHP from "../assets/svg/skills/php.svg"
import Python from "../assets/svg/skills/python.svg"
import Ruby from "../assets/svg/skills/ruby.svg"
import Swift from "../assets/svg/skills/swift.svg"
import AdobeAudition from "../assets/svg/skills/adobeaudition.svg"
import AWS from "../assets/svg/skills/aws.svg"
import Deno from "../assets/svg/skills/deno.svg"
import Django from "../assets/svg/skills/django.svg"
import Firebase from "../assets/svg/skills/firebase.svg"
import Gimp from "../assets/svg/skills/gimp.svg"
import Git from "../assets/svg/skills/git.svg"
import Graphql from "../assets/svg/skills/graphql.svg"
import Lightroom from "../assets/svg/skills/lightroom.svg"
import MaterialUI from "../assets/svg/skills/materialui.svg"
import Nginx from "../assets/svg/skills/nginx.svg"
import Numpy from "../assets/svg/skills/numpy.svg"
import OpenCV from "../assets/svg/skills/opencv.svg"
import PremierePro from "../assets/svg/skills/premierepro.svg"
import Pytorch from "../assets/svg/skills/pytorch.svg"
import Selenium from "../assets/svg/skills/selenium.svg"
import Strapi from "../assets/svg/skills/strapi.svg"
import Tensorflow from "../assets/svg/skills/tensorflow.svg"
import Webix from "../assets/svg/skills/webix.svg"
import Wordpress from "../assets/svg/skills/wordpress.svg"

import Azure from "../assets/svg/skills/azure.svg"
import Blender from "../assets/svg/skills/blender.svg"
import Fastify from "../assets/svg/skills/fastify.svg"
import Figma from "../assets/svg/skills/figma.svg"
import Flutter from "../assets/svg/skills/flutter.svg"
import Haxe from "../assets/svg/skills/haxe.svg"
import Ionic from "../assets/svg/skills/ionic.svg"
import Markdown from "../assets/svg/skills/markdown.svg"
import MicrosoftOffice from "../assets/svg/skills/microsoftoffice.svg"
import Picsart from "../assets/svg/skills/picsart.svg"
import Sketch from "../assets/svg/skills/sketch.svg"
import Unity from "../assets/svg/skills/unity.svg"
import WolframAlpha from "../assets/svg/skills/wolframalpha.svg"
import Canva from "../assets/svg/skills/canva.svg"

import c from "../constants"

const skillsImage = (skill) => {
  switch (skill) {
    case c.GCP:
      return GCP
    case c.HTML:
      return HTML
    case c.Photoshop:
      return Photoshop
    case c.Docker:
      return Docker
    case c.Illustrator:
      return Illustrator
    case c.AdobeXD:
      return AdobeXD
    case c.AfterEffects:
      return afterEffects
    case c.CSS:
      return CSS
    case c.Sass:
      return Sass
    case c.Angular:
      return Angular
    case c.JS:
      return JS
    case c.NextJS:
      return NextJS
    case c.NuxtJS:
      return NuxtJS
    case c.React:
      return React
    case c.Svelte:
      return Svelte
    case c.Typescript:
      return Typescript
    case c.Vue:
      return Vue
    case c.Bootstrap:
      return Bootstrap
    case c.Bulma:
      return Bulma
    case c.CapacitorJs:
      return CapacitorJs
    case c.Coffeescript:
      return Coffeescript
    case c.MemSQL:
      return MemSQL
    case c.MongoDB:
      return MongoDB
    case c.MySQL:
      return MySQL
    case c.PostgreSQL:
      return PostgreSQL
    case c.Tailwind:
      return Tailwind
    case c.ViteJS:
      return ViteJS
    case c.VuetifyJS:
      return VuetifyJS
    case c.C:
      return cLang
    case c.CPlusPlus:
      return CPlusPlus
    case c.CSharp:
      return CSharp
    case c.Dart:
      return Dart
    case c.Go:
      return Go
    case c.Java:
      return Java
    case c.Kotlin:
      return Kotlin
    case c.Julia:
      return Julia
    case c.Matlab:
      return Matlab
    case c.PHP:
      return PHP
    case c.Python:
      return Python
    case c.Ruby:
      return Ruby
    case c.Swift:
      return Swift
    case c.AdobeAudition:
      return AdobeAudition
    case c.AWS:
      return AWS
    case c.Deno:
      return Deno
    case c.Django:
      return Django
    case c.Firebase:
      return Firebase
    case c.Gimp:
      return Gimp
    case c.Git:
      return Git
    case c.Graphql:
      return Graphql
    case c.Lightroom:
      return Lightroom
    case c.MaterialUI:
      return MaterialUI
    case c.Nginx:
      return Nginx
    case c.Numpy:
      return Numpy
    case c.OpenCV:
      return OpenCV
    case c.PremierePro:
      return PremierePro
    case c.Pytorch:
      return Pytorch
    case c.Selenium:
      return Selenium
    case c.Strapi:
      return Strapi
    case c.Tensorflow:
      return Tensorflow
    case c.Webix:
      return Webix
    case c.Wordpress:
      return Wordpress
    case c.Azure:
      return Azure
    case c.Blender:
      return Blender
    case c.Fastify:
      return Fastify
    case c.Figma:
      return Figma
    case c.Flutter:
      return Flutter
    case c.Haxe:
      return Haxe
    case c.Ionic:
      return Ionic
    case c.Markdown:
      return Markdown
    case c.MicrosoftOffice:
      return MicrosoftOffice
    case c.Picsart:
      return Picsart
    case c.Sketch:
      return Sketch
    case c.Unity:
      return Unity
    case c.WolframAlpha:
      return WolframAlpha
    case c.Canva:
      return Canva
    default:
      break
  }
}
export default skillsImage
