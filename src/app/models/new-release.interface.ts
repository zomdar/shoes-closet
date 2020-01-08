export interface NewRelease {
    releaseDate: Date;
    releaseSites: Object;
    shoeDetails: Object;
}

export interface NewReleaseSites {
    dropType: string;
    siteName: string;
    siteLink: string;
    dropTime: string;
}

export interface NewReleaseShoeDetail {
    brand: string;
    name: string;
    subName: string;
    realeaseSizes: number;
    price: number;
    photoLink: string;
}
  
