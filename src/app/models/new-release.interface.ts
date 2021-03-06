export interface NewRelease {
    releaseDate;
    releaseSites: Array<NewReleaseSites>;
    shoeDetails: NewReleaseShoeDetail;
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
    color: string;
    styleCode: string;
    photoLink: string;
}

export interface NewReleaseSites {
    name: string;
    siteLink: string,
    releaseDate;
}
  
