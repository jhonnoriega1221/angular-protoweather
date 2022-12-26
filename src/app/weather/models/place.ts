export interface Place {
    place_id:     number;
    licence?:     string;
    osm_type?:    string;
    osm_id?:      number;
    boundingbox?: string[];
    lat:          string;
    lon:          string;
    display_name: string;
    place_rank?:  number;
    category?:    string;
    type?:        string;
    importance?:  number;
    icon?:        string;
    address?:     Address;
}

export interface Address {
    city:             string;
    state_district?:   string;
    state?:            string;
    "ISO3166-2-lvl4"?: string;
    country?:          string;
    country_code?:     string;
    county?:           string;
    town?:             string;
    village?:          string;
}
