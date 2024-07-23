/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Backstage URL - Backstage URL */
  "backstageUrl": string,
  /** Google OAuth Client ID for IAP - Google Oauth Client ID for Cloud IAP (Web Application) */
  "iapOAuthClientId": string,
  /** Google OAuth Client ID for Raycast - Google OAuth Client ID for Raycast App (iOS) */
  "raycastOAuthClientId": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search-people` command */
  export type SearchPeople = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `search-people` command */
  export type SearchPeople = {}
}


