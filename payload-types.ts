/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  title: string;
  image?: string | Media;
  layout: (
    | {
        content?: {
          [k: string]: unknown;
        }[];
        buttons: {
          label: string;
          type: 'page' | 'custom';
          page: string | Page;
          url: string;
          newTab: boolean;
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'cta';
      }
    | {
        content?: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'content';
      }
    | {
        image: string | Media;
        type?: 'normal' | 'fullscreen' | 'wide';
        caption?: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'image';
      }
  )[];
  meta: {
    title?: string;
    description?: string;
    keywords?: string;
  };
  slug?: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  sizes: {
    card: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    feature: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
  };
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "diagnosis".
 */
export interface Diagnosis {
  id: string;
  name: string;
  admission_note?: {
    [k: string]: unknown;
  }[];
  progress_note: {
    subjective?: {
      [k: string]: unknown;
    }[];
    objective?: {
      [k: string]: unknown;
    }[];
    assessment?: {
      [k: string]: unknown;
    }[];
    plan?: {
      [k: string]: unknown;
    }[];
  };
  summary_note?: {
    [k: string]: unknown;
  }[];
  risk_factors?: {
    [k: string]: unknown;
  }[];
  physical_examintaion?: {
    [k: string]: unknown;
  }[];
  lab?: {
    [k: string]: unknown;
  }[];
  imaging?: {
    [k: string]: unknown;
  }[];
  plan?: {
    [k: string]: unknown;
  }[];
  figures: {
    figure: string | Media;
    id?: string;
  }[];
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  createdAt: string;
  updatedAt: string;
}
