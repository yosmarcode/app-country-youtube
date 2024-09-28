export interface InativeName {
    spa:{
       official:string,
       common:string
    }
 }

export interface iCurrencies {
    VES:{
       name: string,
       symbol:string,
    }
 }

 export interface ITraslations {
    official: string,
    common: string
 };

 export interface IDenomine {
    f: string
    m: string
 }

 export interface IMaps {
    googleMaps:string,
    openStreetMaps: string
 }

export interface Iflags
{
    png: string
    svg: string
    alt: string
 }


 export interface  ICoatOfArms {
    png: string
    svg: string 
 }
 
export interface ICountry {

    name:{
       common: string,
       official:string,
       nativeName: InativeName
       },
    tld: Object
    cca2:string,
    ccn3:string | number,
    cca3:string | number,
    cioc:string | number,
    independent: boolean,
    status: string,
    unMember: boolean,
    currencies: iCurrencies,
    idd:{
       root:string,
       suffixes: object | void
    },
    capital: object | void,
    altSpellings:object | any,
    region:string,
    subregion: string,
    languages:{
       spa: string
    },
    translations: {
       bre: ITraslations
       ces: ITraslations
       cym: ITraslations
       deu: ITraslations
       est: ITraslations
       fin: ITraslations
       fra: ITraslations
       hrv: ITraslations
       hun: ITraslations
       ita: ITraslations
       jpn: ITraslations
       kor: ITraslations
       nld: ITraslations
       per: ITraslations
       pol: ITraslations
       por: ITraslations
       rus: ITraslations
       slk: ITraslations
       spa: ITraslations
       srp: ITraslations
       swe: ITraslations
       tur: ITraslations
       urd: ITraslations
       zho: ITraslations
    },
    latlng:object | any
    landlocked: boolean,
    borders: object | any
    area: number,
    demonyms:{
       eng: IDenomine
       fra: IDenomine
    },
    flag: object | any,
    maps: IMaps
    population:number,
    gini:void
    fifa: string,
    car:{
       signs: object
       side: string
    },
    timezones: object | void
    continents: object | void
    flags: Iflags
    coatOfArms: ICoatOfArms
    startOfWeek:string,
    capitalInfo: {
       latlng: object
    },
    postalCode:{
       format: string
       regex: string
    }
 }