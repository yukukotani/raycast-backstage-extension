/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** OAuth Client ID for IAP - OAuth Client ID for IAP */
  "cloudIapOAuthClientId": string
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


