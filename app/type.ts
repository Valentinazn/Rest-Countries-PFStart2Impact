export interface Welcome {
  name: Name;
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  cioc?: string;
  independent?: boolean;
  status: Status;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital?: string[];
  altSpellings: string[];
  region: Region;
  subregion?: string;
  languages: { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms?: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: Continent[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: StartOfWeek;
  capitalInfo: CapitalInfo;
  borders?: string[];
  gini?: { [key: string]: number };
  postalCode?: PostalCode;
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs?: string[];
  side: Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Continent {
  Africa = "Africa",
  Antarctica = "Antarctica",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SouthAmerica = "South America",
}

export interface Currencies {
  USD?: Aed;
  PEN?: Aed;
  TOP?: Aed;
  EUR?: Aed;
  PAB?: Aed;
  MGA?: Aed;
  XAF?: Aed;
  HUF?: Aed;
  MNT?: Aed;
  SAR?: Aed;
  SZL?: Aed;
  ZAR?: Aed;
  UGX?: Aed;
  PYG?: Aed;
  XOF?: Aed;
  MUR?: Aed;
  CKD?: Aed;
  NZD?: Aed;
  NPR?: Aed;
  SCR?: Aed;
  AED?: Aed;
  BYN?: Aed;
  DOP?: Aed;
  LYD?: Aed;
  PHP?: Aed;
  ALL?: Aed;
  IDR?: Aed;
  THB?: Aed;
  KES?: Aed;
  LRD?: Aed;
  INR?: Aed;
  BHD?: Aed;
  MWK?: Aed;
  ISK?: Aed;
  BND?: Aed;
  SGD?: Aed;
  WST?: Aed;
  GEL?: Aed;
  PGK?: Aed;
  GHS?: Aed;
  AFN?: Aed;
  CRC?: Aed;
  FJD?: Aed;
  KRW?: Aed;
  TWD?: Aed;
  CZK?: Aed;
  NIO?: Aed;
  CLP?: Aed;
  GMD?: Aed;
  BZD?: Aed;
  MVR?: Aed;
  VUV?: Aed;
  MYR?: Aed;
  XCD?: Aed;
  IRR?: Aed;
  RUB?: Aed;
  AUD?: Aed;
  KID?: Aed;
  BDT?: Aed;
  AMD?: Aed;
  MXN?: Aed;
  OMR?: Aed;
  CHF?: Aed;
  BSD?: Aed;
  TVD?: Aed;
  DKK?: Aed;
  FOK?: Aed;
  KYD?: Aed;
  EGP?: Aed;
  AZN?: Aed;
  GBP?: Aed;
  IMP?: Aed;
  BBD?: Aed;
  GTQ?: Aed;
  JPY?: Aed;
  VND?: Aed;
  HKD?: Aed;
  AOA?: Aed;
  MZN?: Aed;
  BWP?: Aed;
  SYP?: Aed;
  MDL?: Aed;
  GGP?: Aed;
  XPF?: Aed;
  PLN?: Aed;
  TTD?: Aed;
  KZT?: Aed;
  AWG?: Aed;
  SRD?: Aed;
  BMD?: Aed;
  MRU?: Aed;
  SLL?: Aed;
  GNF?: Aed;
  PKR?: Aed;
  LSL?: Aed;
  TJS?: Aed;
  ERN?: Aed;
  JEP?: Aed;
  KHR?: Aed;
  ANG?: Aed;
  UYU?: Aed;
  DZD?: Aed;
  MAD?: Aed;
  CVE?: Aed;
  MOP?: Aed;
  GYD?: Aed;
  NOK?: Aed;
  SSP?: Aed;
  LBP?: Aed;
  KWD?: Aed;
  SHP?: Aed;
  MMK?: Aed;
  ILS?: Aed;
  TMT?: Aed;
  VES?: Aed;
  TND?: Aed;
  TRY?: Aed;
  COP?: Aed;
  KMF?: Aed;
  SBD?: Aed;
  UZS?: Aed;
  JOD?: Aed;
  CUC?: Aed;
  CUP?: Aed;
  KGS?: Aed;
  SEK?: Aed;
  CDF?: Aed;
  GIP?: Aed;
  SOS?: Aed;
  LKR?: Aed;
  LAK?: Aed;
  YER?: Aed;
  FKP?: Aed;
  ZMW?: Aed;
  RSD?: Aed;
  STN?: Aed;
  DJF?: Aed;
  BGN?: Aed;
  ARS?: Aed;
  NGN?: Aed;
  RWF?: Aed;
  CAD?: Aed;
  KPW?: Aed;
  MKD?: Aed;
  ZWL?: Aed;
  CNY?: Aed;
  ETB?: Aed;
  BIF?: Aed;
  UAH?: Aed;
  TZS?: Aed;
  QAR?: Aed;
  BRL?: Aed;
  SDG?: BAM;
  RON?: Aed;
  IQD?: Aed;
  BTN?: Aed;
  HNL?: Aed;
  NAD?: Aed;
  HTG?: Aed;
  BAM?: BAM;
  JMD?: Aed;
  BOB?: Aed;
}

export interface Aed {
  name: string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng: Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

export interface Idd {
  root?: string;
  suffixes?: string[];
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common: string;
}

export interface PostalCode {
  format: string;
  regex?: string;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

export enum StartOfWeek {
  Monday = "monday",
  Saturday = "saturday",
  Sunday = "sunday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned",
}
