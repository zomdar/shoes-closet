export interface NewRelease {
    releaseDate: Date;
    releaseSites: Array<NewReleaseSites>;
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
    price: number;
    releaseSizes: Object;
    photoLink: string;
}
  
