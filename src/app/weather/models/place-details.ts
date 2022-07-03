export interface PlaceDetails {
    place_id?: number
    parent_place_id?: number
    osm_type?: string
    osm_id?: number
    category?: string
    type?: string
    admin_level?: number
    localname?: string
    names?: Names
    addresstags?: any[]
    housenumber?: any
    calculated_postcode?: any
    country_code?: string
    indexed_date?: string
    importance?: number
    calculated_importance?: number
    extratags?: Extratags
    calculated_wikipedia?: string
    icon?: string
    rank_address?: number
    rank_search?: number
    isarea?: boolean
    centroid?: Centroid
    geometry: Geometry
    address?: Address[]
    linked_places?: LinkedPlace[]
  }
  
  export interface Names {
    "alt_name:ar"?: string
    "alt_name:el"?: string
    name?: string
    "name:ar"?: string
    "name:el"?: string
    "_place_name:es"?: string
    "_place_name:fr"?: string
    "_place_name:lt"?: string
    "_place_name:pl"?: string
    "_place_name:ru"?: string
    "_place_name:sr"?: string
    "_place_name:uk"?: string
    _place_old_name?: string
  }
  
  export interface Extratags {
    capital?: string
    ele?: string
    "idee:name"?: string
    "ine:municipio"?: string
    linked_place?: string
    population?: string
    "population:date"?: string
    "ref:ine"?: string
    wikidata?: string
    wikipedia?: string
  }
  
  export interface Centroid {
    type?: string
    coordinates?: number[]
  }
  
  export interface Geometry {
    type?: string
    coordinates: number[]
  }
  
  export interface Address {
    localname?: string
    place_id?: number
    osm_id?: number
    osm_type?: string
    place_type?: string
    class?: string
    type?: string
    admin_level?: number
    rank_address?: number
    distance?: number
    isaddress?: boolean
  }
  
  export interface LinkedPlace {
    localname?: string
    place_id?: number
    osm_id?: number
    osm_type?: string
    place_type?: any
    class?: string
    type?: string
    admin_level?: number
    rank_address?: number
    distance?: number
    isaddress?: any
  }
  