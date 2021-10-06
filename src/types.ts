interface LaunchCommon {
  id: string;
  success: boolean;
  details: string;
  name: string;
}

export interface LaunchResponse extends LaunchCommon {
  date_utc: string;
}

export interface Launch extends LaunchCommon {
  date: string;
}
