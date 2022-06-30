export interface Daily {
    sunrise: string[];
    weathercode: number[];
    time: string[];
    precipitation_sum: number[];
    temperature_2m_max: number[];
    sunset: string[];
}

export interface Hourly {
    surface_pressure: number[];
    temperature_2m: number[];
    relativehumidity_2m: number[];
    weathercode: number[];
    time: string[];
    windspeed_10m: number[];
    winddirection_10m: number[];
    shortwave_radiation: number[];
    dewpoint_2m: number[];
    precipitation: number[];
}

export interface DailyUnits {
    precipitation_sum: string;
    weathercode: string;
    time: string;
    sunset: string;
    temperature_2m_max: string;
    sunrise: string;
}

export interface HourlyUnits {
    windspeed_10m: string;
    winddirection_10m: string;
    relativehumidity_2m: string;
    precipitation: string;
    temperature_2m: string;
    time: string;
    weathercode: string;
    shortwave_radiation: string;
    surface_pressure: string;
    dewpoint_2m: string;
}

export interface Forecast {
    generationtime_ms: number;
    daily: Daily;
    elevation: number;
    utc_offset_seconds: number;
    latitude: number;
    hourly: Hourly;
    daily_units: DailyUnits;
    hourly_units: HourlyUnits;
    longitude: number;
}